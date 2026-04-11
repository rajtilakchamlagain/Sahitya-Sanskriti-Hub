/**
 * Calculates estimated reading time for a given text.
 * Assumes average reading speed of 200 words per minute.
 * 
 * @param {string} text - The text content to analyze
 * @returns {string} - Formatted string like "5 min read"
 */
export const calculateReadingTime = (text) => {
    if (!text) return "1 min read";

    // Strip HTML tags
    const cleanText = text.replace(/<[^>]*>/g, '');
    const words = cleanText.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);

    return `${time} min read`;
};
