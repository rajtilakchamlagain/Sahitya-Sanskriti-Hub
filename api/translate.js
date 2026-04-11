import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { text, targetLang } = req.body;

    if (!text || !targetLang) {
        return res.status(400).json({ error: 'Missing text or targetLang' });
    }

    // Placeholder for Environment Variable
    const apiKey = process.env.AZURE_TRANSLATOR_KEY || 'PLACEHOLDER_KEY';
    const region = process.env.AZURE_TRANSLATOR_REGION || 'global';
    const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';

    // If key is missing/placeholder, return mock data for testing UI
    if (apiKey === 'PLACEHOLDER_KEY' || !apiKey) {
        console.warn('Using Mock Translation (No API Key found)');

        // Mock logic to simulate translation "look"
        const mockTranslated = Array.isArray(text)
            ? text.map(t => `[${targetLang}] ${t}`)
            : `[${targetLang}] ${text}`;

        return res.status(200).json({
            translations: Array.isArray(mockTranslated) ? mockTranslated : [mockTranslated],
            isMock: true
        });
    }

    try {
        const response = await axios.post(
            `${endpoint}&to=${targetLang}`,
            text.map(t => ({ Text: t })),
            {
                headers: {
                    'Ocp-Apim-Subscription-Key': apiKey,
                    'Ocp-Apim-Subscription-Region': region,
                    'Content-Type': 'application/json',
                },
            }
        );

        const translations = response.data.map(item => item.translations[0].text);

        // Cache for 24 hours at the edge
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

        return res.status(200).json({ translations });

    } catch (error) {
        console.error('Translation Error:', error.response?.data || error.message);
        return res.status(500).json({ error: 'Translation Failed' });
    }
}
