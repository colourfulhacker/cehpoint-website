import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_PROMPT = `You are Kaira, the Senior AI Consultant for CEHPOINT.

PHASE-BASED PROTOCOL:
- Phase 1 (Discovery): First 6 exchanges. MUST ask 2-3 deep clarifying questions. NO handoffs.
- Phase 2 (Analysis): Summarize user needs. Ensure they align with the current page intent.
- Phase 3 (Handoff): ONLY suggest an expert if the requirement is high-stakes and Turn 7+. Use tag [RECOMMEND_LEADER: DepartmentName].

LEADERSHIP EXPERTISE MAP:
1. Cybercrime, Forensics & Security Intelligence: For hacking, scams, financial fraud.
2. People, Culture & Workforce Strategy (HR): For jobs, internships, career growth.
3. Technology, Engineering & Innovation: For software dev, VAPT audits, AI.
4. Executive Leadership & Strategy: For partnerships, investor relations.

CORE OPERATIONAL DIRECTIVE: "HUMAN-CENTRIC CONSULTANT MODE"
- ACT AS A HIGH-VALUE CONSULTANT: PROVIDE IMMEDIATE VALUE.
- VALUABLE INSIGHTS: Give professional reasoning and initial estimates/ranges (in INR) based on what the user says.
- INTELLIGENT BUDGETING: If they ask for price, give a range (e.g., ₹4,00,000 to ₹7,00,000) and explain why.

SILLY/FLIRTING PROTOCOL:
- If a user flirts: Respond with a WITTY, PLAYFUL, but FIRM boundary.
- Pivot immediately to business.
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const { message, history, location, conversationTurn } = req.body || {};
        const apiKey = process.env.OPENROUTER_API_KEY?.trim();
        const model = process.env.OPENROUTER_MODEL || "openrouter/free";

        if (!message) return res.status(400).json({ error: 'Message is required' });
        if (!apiKey) return res.status(500).json({ error: 'Server configuration error: OPENROUTER_API_KEY is missing' });

        const context = `${SYSTEM_PROMPT}
        Current Page Context: ${location || "Home"}
        Conversation Turn: ${conversationTurn || 1}
        `;

        const messages = [
            { role: "system", content: context },
            ...(Array.isArray(history) ? history.map((msg: any) => ({
                role: msg.role === 'user' ? 'user' : 'assistant',
                content: msg.content || msg.text || ''
            })) : []),
            { role: "user", content: message }
        ];

        console.log(`[OPENROUTER-DEBUG] Calling ${model}...`);

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                temperature: 0.2,
                top_p: 0.7,
                max_tokens: 2048,
                stream: true,
                reasoning: {
                    enabled: true
                }
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`OpenRouter API responded with ${response.status}: ${errorText}`);
        }

        // Set up streaming response to client
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) throw new Error("No reader available");

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.trim() === '' || line.trim() === 'data: [DONE]') continue;
                if (line.startsWith('data: ')) {
                    try {
                        const jsonString = line.replace('data: ', '').trim();
                        if (!jsonString) continue;
                        
                        const json = JSON.parse(jsonString);
                        const content = json.choices[0]?.delta?.content || "";
                        if (content) {
                            res.write(content);
                        }
                    } catch (e) {
                        console.error("Error parsing stream chunk:", e, "Line:", line);
                    }
                }
            }
        }

        res.end();

    } catch (error: any) {
        console.error('Kaira Chat Function Error:', error);
        if (!res.headersSent) {
            return res.status(500).json({
                error: "I'm having a bit of trouble connecting to my knowledge base.",
                details: error.message
            });
        }
        res.end();
    }
}
