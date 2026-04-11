import { articles } from './src/data/articles.js';

console.log("Articles count:", articles.length);
articles.forEach(a => {
    console.log(`ID: ${a.id}, Title: ${a.title}`);
});
