class AudioProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        const input = inputs[0];
        if (input && input.length > 0) {
            const audioData = input[0];
            // Post the audio data to the main thread
            this.port.postMessage({ audio: audioData });
        }
        return true;
    }
}

registerProcessor("audio-processor", AudioProcessor);
