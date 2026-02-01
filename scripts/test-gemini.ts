
import { WebSocket } from 'ws';
import * as dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "models/gemini-2.0-flash-exp";

if (!API_KEY) {
    console.error("❌ No GEMINI_API_KEY found in .env");
    process.exit(1);
}

console.log(`🔍 Testing Connectivity for Model: ${MODEL}`);

// 1. Test REST API (Model Info)
async function testRest() {
    console.log("\n--- Testing REST API (Model Availability) ---");
    const url = `https://generativelanguage.googleapis.com/v1beta/${MODEL}?key=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
            console.log("✅ REST Check Passed: Model found.");
            console.log(`   Name: ${data.name}`);
            console.log(`   Version: ${data.version}`);
        } else {
            console.error("❌ REST Check Failed:", data);
        }
    } catch (e) {
        console.error("❌ REST Network Error:", e.message);
    }
}

// 2. Test WebSocket (Handshake)
function testWebSocket() {
    console.log("\n--- Testing WebSocket (Live API Handshake) ---");
    const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=${API_KEY}`;

    console.log(`   URL: ${wsUrl.split('?')[0]}...`); // Hide key

    const ws = new WebSocket(wsUrl);

    ws.on('open', () => {
        console.log("✅ WebSocket Handshake Successful!");
        console.log("   Connection established.");

        // Send Setup Message
        const setupMsg = {
            setup: { model: MODEL }
        };
        ws.send(JSON.stringify(setupMsg));
        console.log("   Sent setup message.");
    });

    ws.on('message', (data) => {
        console.log("📩 Received Message:", data.toString());
        ws.close(); // Success, close it
    });

    ws.on('error', (err) => {
        console.error("❌ WebSocket Error:", err.message);
    });

    ws.on('close', (code, reason) => {
        console.log(`   WebSocket Closed. Code: ${code}, Reason: ${reason}`);
    });
}

(async () => {
    await testRest();
    testWebSocket();
})();
