import fs from 'fs';
const home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
console.log('Home imports and top sections:');
const lines = home.split('\n');
console.log(lines.slice(0, 40).join('\n'));
