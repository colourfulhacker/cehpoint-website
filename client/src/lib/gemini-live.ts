
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
            }
        };

        this.ws.send(JSON.stringify(setup));
    }

    async startAudioInput() {
        this.audioContext = new AudioContext({ sampleRate: 16000 });
        await this.audioContext.audioWorklet.addModule("/audio-processor.js");

        this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const source = this.audioContext.createMediaStreamSource(this.mediaStream);

        this.audioWorkletNode = new AudioWorkletNode(this.audioContext, "audio-processor");

        this.audioWorkletNode.port.onmessage = (event) => {
            const audioData = event.data.audio;
            this.sendAudioChunk(audioData);
        };

        source.connect(this.audioWorkletNode);
        this.audioWorkletNode.connect(this.audioContext.destination);
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
                            // Handle inline audio if any
                        }
                    }
                }
            }
            if (data.serverContent.turnComplete && this.onTurnComplete) {
                this.onTurnComplete();
            }
            if (data.serverContent.interrupted && this.onInterrupted) {
                this.onInterrupted();
            }
        }
    }

    handleServerAudio(arrayBuffer: ArrayBuffer) {
        // Gemini sends raw PCM usually? Or inside JSON.
        // Actually the Bidi API sends JSON usually with base64 audio in serverContent.
        // But if it's sending binary blobs...
        // Let's stick to JSON parsing logic above mostly.
        // The API actually sends JSONs with `serverContent` -> `modelTurn` -> `parts` -> `inlineData`.
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
