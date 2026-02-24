import { NextRequest, NextResponse } from 'next/server';
import { generateAIContent } from '@/lib/gemini';

// Simple in-memory rate limiting (Note: This is per-server-instance)
// In a production app, use Redis/Upstash for shared rate limiting
const ipCache = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; // 5 requests
const WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const userData = ipCache.get(ip) || { count: 0, lastReset: now };

    if (now - userData.lastReset > WINDOW_MS) {
        userData.count = 0;
        userData.lastReset = now;
    }

    userData.count += 1;
    ipCache.set(ip, userData);

    return userData.count > RATE_LIMIT;
}

export async function POST(req: NextRequest) {
    try {
        // 1. Rate Limiting
        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again after a minute.' },
                { status: 429 }
            );
        }

        // 2. Parse Request
        const { prompt, systemPrompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        // 3. Combine Prompts
        const fullPrompt = systemPrompt
            ? `Instructions: ${systemPrompt}\n\nUser Input: ${prompt}`
            : prompt;

        // 4. Generate Content
        const content = await generateAIContent(fullPrompt);

        return NextResponse.json({ content });
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to generate content' },
            { status: 500 }
        );
    }
}
