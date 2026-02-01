
export class GeminiLiveClient {
    private ws: WebSocket | null = null;
    private audioContext: AudioContext | null = null;
    private audioWorkletNode: AudioWorkletNode | null = null;
    private mediaStream: MediaStream | null = null;
    private apiKey: string;

    public onAudioData: ((data: ArrayBuffer) => void) | null = null;
    public onTextData: ((text: string, isUser: boolean) => void) | null = null;
    public onInterrupted: (() => void) | null = null;
    public onTurnComplete: (() => void) | null = null;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async connect() {
        const url = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=${this.apiKey}`;
        this.ws = new WebSocket(url);

        return new Promise<void>((resolve, reject) => {
            if (!this.ws) return reject("WebSocket not initialized");

            this.ws.onopen = () => {
                console.log("Gemini Live WebSocket Connected");
                this.sendSetup();
                resolve();
            };

            this.ws.onmessage = async (event) => {
                if (event.data instanceof Blob) {
                    this.handleServerAudio(await event.data.arrayBuffer());
                } else {
                    this.handleServerMessage(JSON.parse(event.data));
                }
            };

            this.ws.onerror = (error) => {
                console.error("Gemini WebSocket Error:", error);
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
        console.log("Sending setup with model: models/gemini-2.0-flash-exp");
        const setup = {
            setup: {
                model: "models/gemini-2.0-flash-exp",
                system_instruction: {
                    parts: [{
                        text: `You are Kaira, the AI Assistant for Cehpoint.
                        Your goal is to help users find the right service or page on our website.
                        When a user asks about a topic, providing the Direct Link is your PRIORITY.

                        SITE MAP & SERVICES:
                        - ** Cost Estimator **: /cost-estimator (Use this for "pricing", "cost", "quote")
                    - ** Services Main **: /services
                    - ** E - Commerce **: /services/ecommerce
                    - ** Edutech **: /services/edutech
                    - ** Fintech **: /services/fintech
                    - ** Cyber Security **: /services/cyber - security
                    - ** Cyber Crime Investigation **: /services/cyber - crime - investigation
                    - ** Rural Digitalization **: /services/rural - digitalization
                    - ** Game Development **: /services/game - development
                    - ** Business Apps **: /services/business - app - catalog
                    - ** AI Solutions **: /ai-solutions
                    - ** Training **: /training
                    - ** Incubation **: /incubation
                    - ** Internships **: /interns
                    - ** Careers **: /careers
                    - ** Investor Connect **: /investor-connect
                    - ** Leadership Search **: /leadership-search
                    - ** Company Profile **: /company-profile
                    - ** Insights / Blog **: /insights
                    - ** Contact **: /contact
                    - ** Privacy Policy **: /privacy
                        
                        If the user is vague, ask them to clarify which service they need.
                        Always use the exact paths above.`
                    }]
                }
            }
        };

        this.ws.send(JSON.stringify(setup));
    }

    async startAudioInput() {
        try {
            this.audioContext = new AudioContext({ sampleRate: 16000 });

            // Mobile Safari/Chrome requirement: Resume context if suspended
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }

            try {
                await this.audioContext.audioWorklet.addModule("/audio-processor.js");
            } catch (e) {
                console.error("Failed to load audio-processor.js", e);
                throw new Error("Failed to load audio processor (404 or CORS)");
            }

            this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);

            this.audioWorkletNode = new AudioWorkletNode(this.audioContext, "audio-processor");

            this.audioWorkletNode.port.onmessage = (event) => {
                const audioData = event.data.audio;
                this.sendAudioChunk(audioData);
            };

            source.connect(this.audioWorkletNode);
            this.audioWorkletNode.connect(this.audioContext.destination);
        } catch (error) {
            console.error("Audio Input Error:", error);
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
        if (data.serverContent) {
            if (data.serverContent.modelTurn) {
                const parts = data.serverContent.modelTurn.parts;
                if (parts) {
                    for (const part of parts) {
                        if (part.text && this.onTextData) {
                            this.onTextData(part.text, false);
                        }
                        if (part.inlineData && part.inlineData.mimeType.startsWith("audio/")) {
                            this.playAudioChunk(part.inlineData.data);
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
