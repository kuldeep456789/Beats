import { GoogleGenAI, Type } from "@google/genai";
import { EventItem } from "../types";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateFreshEvents = async (): Promise<Partial<EventItem>[]> => {
  if (!ai) {
    console.warn("Gemini API key not configured. Using default events.");
    return [];
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are the creative director for "UrbanBeat", a trendy youth event collective.
      Generate 3 unique, exciting, and modern event ideas for the upcoming month.
      The tone should be energetic, inclusive, and cool.
      
      Return ONLY a JSON array.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              location: { type: Type.STRING },
              tags: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["title", "description", "location", "tags"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];

    return JSON.parse(text) as Partial<EventItem>[];
  } catch (error) {
    console.error("Failed to generate events:", error);
    return [];
  }
};