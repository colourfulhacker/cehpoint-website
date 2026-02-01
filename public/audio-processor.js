
class AudioProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.bufferSize = 2048;
        this.buffer = new Float32Array(this.bufferSize);
        this.bufferIndex = 0;
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0];
        if (!input || !input.length) return true;

        const channel = input[0];
        for (let i = 0; i < channel.length; i++) {
            this.buffer[this.bufferIndex++] = channel[i];

            if (this.bufferIndex === this.bufferSize) {
                // Send full buffer to main thread
                this.port.postMessage({ audio: this.buffer.slice() });
                this.bufferIndex = 0;
            }
        }
        return true;
    }
}

registerProcessor("audio-processor", AudioProcessor);
