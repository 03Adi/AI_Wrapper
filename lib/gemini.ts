import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY environment variable");
}

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const generateAIContent = async (prompt: string, modelName: string = "gemini-3-flash-preview") => {
    try {
        const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Gemini Generation Error:", error);
        throw error;
    }
};
