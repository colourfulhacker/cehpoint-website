class AudioProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.buffer = [];
        this.sampleRate = 24000; // Target sample rate for Gemini
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0];
        if (!input || !input.length) return true;

        const channel = input[0];
        // Downsample or upsample to 16kHz for input (if needed) or pass through
        // Here we just pass raw PCM Float32 data to the main thread
        // The main thread will resample/encode as needed for the API

        if (channel.length > 0) {
            this.port.postMessage({
                audio: channel,
            });
        }

        return true;
    }
}

registerProcessor("audio-processor", AudioProcessor);
