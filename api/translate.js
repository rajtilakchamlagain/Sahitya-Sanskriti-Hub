import { GoogleGenerativeAI } from '@google/generative-ai';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { messagesToTranslate, nextLanguage } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response('Gemini API key is not configured', { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `Translate this exact JSON array of strings into ${nextLanguage}. Return NOTHING ELSE but the structured JSON array. Array: ${JSON.stringify(messagesToTranslate)}`;

    const result = await model.generateContent(prompt);
    let rawResponse = result.response.text().trim();

    // Bulletproof JSON extractor just in case Gemini hallucinates outside the MIME type
    const match = rawResponse.match(/\[.*\]/s);
    if (match) {
        rawResponse = match[0];
    }

    return new Response(rawResponse, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error("Translate API Error:", error);
    return new Response(JSON.stringify({ error: 'Translation failed' }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
