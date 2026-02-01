import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, history } = req.body || {};
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY missing in logging');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Construct prompt
        const context = "You are Kaira, an advanced AI Assistant for Cehpoint (a Cyber Security & Digital Solutions firm). You are professional, concise, and helpful. You help users with navigation, services info, and general queries about Cehpoint.";
        const chatHistory = Array.isArray(history)
            ? history.map((msg: any) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}`).join('\n')
            : '';
        const fullPrompt = `${context}\n\nChat History:\n${chatHistory}\n\nUser: ${message}\nAssistant:`;

        // Direct Gemini API Call (REST)
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: fullPrompt }]
                }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API Error:', errorText);
            throw new Error(`Gemini API responded with ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            console.error('Unexpected Gemini response structure:', JSON.stringify(data));
            throw new Error('Invalid response from AI provider');
        }

        return res.status(200).json({ response: text });

    } catch (error: any) {
        console.error('Kaira Chat Function Error:', error);
        return res.status(500).json({
            error: 'Failed to process request',
            details: error.message
        });
    }
}
