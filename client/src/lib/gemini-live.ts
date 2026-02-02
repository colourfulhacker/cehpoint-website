
export class GeminiLiveClient {
    private ws: WebSocket | null = null;
    private audioContext: AudioContext | null = null;
    private mediaStream: MediaStream | null = null;
    private apiKey: string;
    public selectedDeviceId: string = "";
    public modelId: string = "models/gemini-2.0-flash-exp"; // Stable Live Model

    public onAudioData: ((data: ArrayBuffer) => void) | null = null;
    public onTextData: ((text: string, isUser: boolean) => void) | null = null;
    public onInterrupted: (() => void) | null = null;
    public onTurnComplete: (() => void) | null = null;
    public onStatusChange: ((status: string) => void) | null = null;
    public onError: ((error: string) => void) | null = null;
    public onModelChange: ((model: string) => void) | null = null; // New callback for UI reporting
    public onDebugLog: ((log: string) => void) | null = null;
    public onVolumeChange: ((vol: number) => void) | null = null;

    private useFallbackTTS = false; // DISABLED: Pure Native Audio requested

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private emitStatus(status: string) {
        if (this.onStatusChange) this.onStatusChange(status);
        this.emitDebug(`Status: ${status}`);
    }

    private emitError(error: string) {
        if (this.onError) this.onError(error);
        this.emitDebug(`ERROR: ${error}`);
    }

    private emitDebug(msg: string) {
        if (this.onDebugLog) this.onDebugLog(`[${new Date().toLocaleTimeString()}] ${msg}`);
    }

    // FALLBACK TTS
    public speakText(text: string) {
        if (!this.useFallbackTTS) {
            this.emitDebug("TTS Skipped (Native Audio active)");
            return;
        }
        this.emitDebug(`TTS Attempting to speak: "${text.substring(0, 20)}..."`);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.1;

        utterance.onstart = () => this.emitDebug("TTS: Started Speaking");
        utterance.onerror = (e) => this.emitDebug(`TTS Error: ${e.error}`);

        window.speechSynthesis.speak(utterance);
    }

    async connect() {
        this.emitStatus("Connecting...");
        const url = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=${this.apiKey}`;
        this.ws = new WebSocket(url);

        return new Promise<void>((resolve, reject) => {
            if (!this.ws) return reject("WebSocket not initialized");

            this.ws.onopen = () => {
                console.log("Gemini Live WebSocket Connected");
                this.emitStatus("Connected. Configuring...");
                this.useFallbackTTS = true; // Reset fallback
                this.sendSetup();
                resolve();
            };

            this.ws.onmessage = async (event) => {
                if (event.data instanceof Blob) {
                    this.handleServerAudio(await event.data.arrayBuffer() as ArrayBuffer);
                } else {
                    this.handleServerMessage(JSON.parse(event.data));
                }
            };

            this.ws.onerror = (error) => {
                console.error("Gemini WebSocket Error:", error);
                this.emitError("Connection Error (WS).");
                reject(error);
            };

            this.ws.onclose = (event) => {
                console.log("Gemini WebSocket Closed:", event.code, event.reason);
                if (event.code !== 1000) {
                    console.error("WebSocket closed abnormally", event);
                }
            };
        });
    }

    sendSetup() {
        if (!this.ws) return;

        console.log(`Sending setup with model: ${this.modelId}`);
        this.emitStatus(`Configuring Model: ${this.modelId.split('/').pop()}...`);
        if (this.onModelChange) this.onModelChange(this.modelId);

        const setup = {
            setup: {
                model: this.modelId,
                generation_config: {
                    response_modalities: ["AUDIO"],
                    speech_config: {
                        voice_config: {
                            prebuilt_voice_config: {
                                voice_name: "Aoede"
                            }
                        }
                    }
                },
                system_instruction: {
                    parts: [{
                        text: `You are Kaira, Cehpoint's AI Assistant.
                    Your goal: Help users find services using strict paths or connect with leadership.
                    
                    LANGUAGE PROTOCOL:
                    - Primary: Professional English.
                    - If user speaks Bengali -> Reply in English, then briefly ask if they want Bengali. Switch ONLY if asked.

                    SITEMAP:
                    - Services: /services (Ecommerce, Fintech, Cyber Security, etc)
                    - Cyber Crime: /services/cyber-crime-investigation
                    - Cost Estimator: /cost-estimator (NOT /calculator)
                    - Careers: /careers
                    - Contact: /contact
                    - Leadership: /leadership-search

                    LEADERSHIP (Recommended for high-stakes/complex queries):
                    - Jit Banerjee (CEO)
                    - Siddharth Jain (Zero-Trust Lead)
                    - Meenakshi Rao (Privacy Lead)
                    - Vikas Nair (Forensics Lead)
                    - Aditi Kulkarni (Cybercrime Training)
                    
                    PROTOCOL:
                    - Speak concisely.
                    - If complex inquiry -> Recommend specific leader from list (e.g. "For Forensics, please contact Vikas Nair").
                    - If unsure -> Refer to /leadership-search.
                    - User is speaking via Voice. Keep answers short.`
                    }]
                }
            }
        };

        this.emitDebug("TX: Setup (Audio Modality Requested)");
        this.ws.send(JSON.stringify(setup));
    }

    async startAudioInput() {
        try {
            this.emitStatus("Requesting Microphone...");
            this.audioContext = new AudioContext({ sampleRate: 16000 });
            console.log(`[AudioContext] Sample Rate: ${this.audioContext.sampleRate}`);

            // HARDWARE TEST: Play a 440Hz beep to confirm speakers work
            this.playTestBeep();

            // PRIMING
            this.sendTextMessage("Hello");

            if (this.audioContext.state === 'suspended') {
                console.log("Resuming Audio Context...");
                await this.audioContext.resume();
            }

            // AUDIO INPUT
            this.emitStatus("Requesting Microphone...");

            // Use selected device if available, otherwise default
            const constraints = this.selectedDeviceId
                ? { audio: { deviceId: { exact: this.selectedDeviceId } } }
                : { audio: true };

            console.log("Requesting Mic with Constraints:", JSON.stringify(constraints));
            this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);

            // ROBUST FALLBACK: Use ScriptProcessor
            // Buffer size 512 gives ~32ms latency @ 16kHz (Target: 20-40ms).
            const processor = this.audioContext.createScriptProcessor(512, 1, 1);

            processor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                this.sendAudioChunk(inputData);
            };

            source.connect(processor);
            processor.connect(this.audioContext.destination); // Required for Chrome to activate

            this.emitStatus("Listening (Legacy Mode)...");
            console.log("Audio Input Started: ScriptProcessor (Legacy)");
        } catch (error) {
            console.error("Audio Input Error:", error);
            this.emitError("Microphone Access Failing.");
            throw error;
        }
    }

    sendAudioChunk(float32Array: Float32Array) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

        // Convert Float32 to Int16 PCM
        const int16Array = new Int16Array(float32Array.length);
        for (let i = 0; i < float32Array.length; i++) {
            const s = Math.max(-1, Math.min(1, float32Array[i]));
            int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }

        // Base64 encode
        const base64Audio = this.arrayBufferToBase64(int16Array.buffer);

        // Calculate RMS (Volume) for debugging
        let sum = 0;
        for (let i = 0; i < float32Array.length; i++) {
            sum += float32Array[i] * float32Array[i];
        }
        const rms = Math.sqrt(sum / float32Array.length);
        if (this.onVolumeChange) this.onVolumeChange(rms * 5); // Scale up for visibility

        if (Math.random() < 0.05) {
            this.emitDebug(`Microphone RMS: ${rms.toFixed(4)}`);
        }

        const msg = {
            realtime_input: {
                media_chunks: [
                    {
                        mime_type: "audio/pcm",
                        data: base64Audio
                    }
                ]
            }
        };
        this.ws.send(JSON.stringify(msg));
    }

    sendTextMessage(text: string) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
        const msg = {
            client_content: {
                turns: [
                    {
                        role: "user",
                        parts: [{ text: text }]
                    }
                ],
                turn_complete: true
            }
        };
        this.ws.send(JSON.stringify(msg));
        if (this.onTextData) this.onTextData(text, true);
    }

    handleServerMessage(data: any) {
        // console.log("Server Msg:", data); 
        this.emitDebug(`RX: ${JSON.stringify(data).substring(0, 50)}...`);

        // Handle Protocol Errors
        if (data.error) {
            console.error("Gemini Protocol Error:", data.error);
            this.emitError(`AI Error: ${data.error.message || "Unknown Protocol Error"}`);
            return;
        }

        if (data.serverContent) {
            if (data.serverContent.modelTurn) {
                const parts = data.serverContent.modelTurn.parts;

                if (parts) {
                    for (const part of parts) {
                        // 1. Native Audio (Priority)
                        if (part.inlineData && part.inlineData.mimeType.startsWith("audio/")) {
                            // If TTS is active, KILL IT immediately. Native audio has arrived.
                            if (window.speechSynthesis.speaking || this.useFallbackTTS) {
                                window.speechSynthesis.cancel();
                                this.useFallbackTTS = false;
                                this.emitDebug("Native Audio RX -> Stopping TTS");
                            }
                            this.playAudioChunk(part.inlineData.data);
                        }

                        // 2. Text (Fallback/UI)
                        if (part.text) {
                            // Log incoming text to prove connection is alive
                            this.emitDebug(`AI Text: ${part.text.substring(0, 30)}...`);

                            if (this.onTextData) this.onTextData(part.text, false);

                            // Try TTS immediately if we are still dependent on it
                            if (this.useFallbackTTS) {
                                this.speakText(part.text);
                            }
                        }
                    }
                }
            }
            if (data.serverContent.turnComplete && this.onTurnComplete) {
                this.onTurnComplete();
            }
            if (data.serverContent.interrupted && this.onInterrupted) {
                this.onInterrupted();
                this.stopAudioPlayback();
            }
        }
    }

    private audioQueue: Float32Array[] = [];
    private isPlaying = false;
    private scheduledTime = 0;

    playAudioChunk(base64Audio: string) {
        if (!this.audioContext) return;

        // Decode Base64 to Int16
        const binaryString = window.atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        const int16 = new Int16Array(bytes.buffer);

        // Convert Int16 to Float32
        // Fix for "SharedArrayBuffer" lint: Cast the buffer explicitly to ArrayBuffer
        const float32 = new Float32Array(int16.length);
        for (let i = 0; i < int16.length; i++) {
            float32[i] = int16[i] / 32768.0;
        }

        this.queueAudio(float32);
    }

    queueAudio(audioData: Float32Array) {
        if (!this.audioContext) return;

        // Ensure AudioContext is running (needed for autoplay policies)
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }

        const buffer = this.audioContext.createBuffer(1, audioData.length, 24000); // Gemini 2.0 output is 24kHz
        // @ts-ignore
        buffer.copyToChannel(audioData, 0);

        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(this.audioContext.destination);

        const currentTime = this.audioContext.currentTime;
        if (this.scheduledTime < currentTime) {
            this.scheduledTime = currentTime;
        }

        source.start(this.scheduledTime);
        this.scheduledTime += buffer.duration;
    }

    playTestBeep() {
        if (!this.audioContext) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime); // A4 tone
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime); // Low volume
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.2); // Beep for 200ms
        console.log("Hardware Test: Beep played.");
    }

    stopAudioPlayback() {
        // In a real implementation we would cancel scheduled sources.
        // For simple chunks it's trickier to cancel specific nodes without tracking them.
        // But resetting scheduledTime helps.
        if (this.audioContext) {
            this.scheduledTime = this.audioContext.currentTime;
        }
    }

    handleServerAudio(arrayBuffer: ArrayBuffer) {
        // Not used for JSON protocol
    }

    arrayBufferToBase64(buffer: ArrayBuffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    disconnect() {
        if (this.ws) this.ws.close();
        if (this.mediaStream) this.mediaStream.getTracks().forEach(track => track.stop());
        if (this.audioContext) this.audioContext.close();
        this.ws = null;
    }
}
