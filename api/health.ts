import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    const hasKey = !!process.env.GEMINI_API_KEY;
    res.status(200).json({
        status: "ok",
        mode: "standalone-serverless",
        apiKeyConfigured: hasKey,
        environment: process.env.VERCEL ? "vercel" : "development",
        timestamp: new Date().toISOString()
    });
}
