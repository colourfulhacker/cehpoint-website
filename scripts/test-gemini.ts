// Native fetch is available in Node.js 18+

const API_KEY = "AIzaSyCRA4ykWK2nfdfgiOd6zPPbhbNTPfpcJMM";
const models = ["gemini-flash-latest", "gemini-pro-latest", "gemini-2.0-flash"];

async function testModels() {
    for (const modelName of models) {
        console.log(`Testing model: ${modelName}...`);
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: "Say hello" }] }]
                })
            });

            const data: any = await response.json();
            if (response.ok) {
                console.log(`✅  ${modelName} worked!`);
                console.log(`   Response: ${data.candidates?.[0]?.content?.parts?.[0]?.text}`);
            } else {
                console.error(`❌  ${modelName} failed with ${response.status}:`, JSON.stringify(data));
            }
        } catch (err: any) {
            console.error(`💥 Error testing ${modelName}:`, err.message);
        }
    }
}

testModels();
