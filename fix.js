const fs = require('fs');
let content = fs.readFileSync('src/data/articles.js', 'utf8');

// Fix syntax error at the top
content = content.replace('    t const articles = [\n', '');

// Find the Haribhakta article
const startObj = content.indexOf('    {\n        id: "haribhakta-putali-rani"');
const endObj = content.indexOf('    },\n    {\n        id: 1,');

if (startObj !== -1 && endObj !== -1) {
    const articleStr = content.slice(startObj, endObj + 6);
    // Remove it from the top
    content = content.slice(0, startObj) + content.slice(endObj + 6);
    
    // Append it to the bottom
    const lastBracket = content.lastIndexOf(']');
    content = content.slice(0, lastBracket) + ',\n' + articleStr + '\n];';
}

fs.writeFileSync('src/data/articles.js', content);
