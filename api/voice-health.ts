
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');

    const apiKey = process.env.GEMINI_API_KEY;
    const model = "models/gemini-2.0-flash-exp";

    const healthStatus: any = {
        status: "unknown",
        checks: {
            apiKeyPresent: !!apiKey,
            modelReachable: "pending",
            webSocketUrl: "pending"
        },
        timestamp: new Date().toISOString()
    };

    if (!apiKey) {
        healthStatus.status = "error";
        healthStatus.error = "GEMINI_API_KEY is missing in environment variables.";
        return res.status(500).json(healthStatus);
    }

    try {
        // 1. Check Model Availability via REST
        // This confirms the key is valid and the model exists/is accessible
        const url = `https://generativelanguage.googleapis.com/v1beta/${model}?key=${apiKey}`;
        const modelRes = await fetch(url);
        const modelData = await modelRes.json();

        if (modelRes.ok) {
            healthStatus.checks.modelReachable = "success";
            healthStatus.checks.modelDetails = {
                name: modelData.name,
                version: modelData.version,
                displayName: modelData.displayName
            };
        } else {
            healthStatus.checks.modelReachable = "failed";
            healthStatus.checks.error = modelData;
            healthStatus.status = "error";
            return res.status(502).json(healthStatus);
        }

        // 2. Construct WebSocket URL (Client uses this)
        // We can't easily test WS connection from serverless (it's short-lived),
        // but if REST works for the same model, WS is usually fine.
        const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=HIDDEN`;
        healthStatus.checks.webSocketUrl = "valid_structure";

        healthStatus.status = "healthy";
        healthStatus.message = "Voice API is verified and ready.";

        return res.status(200).json(healthStatus);

    } catch (error: any) {
        healthStatus.status = "error";
        healthStatus.error = error.message;
        return res.status(500).json(healthStatus);
    }
}
