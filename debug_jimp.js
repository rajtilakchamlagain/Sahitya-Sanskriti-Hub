import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const Jimp = require('jimp');

console.log('Jimp export type:', typeof Jimp);
console.log('Jimp keys:', Object.keys(Jimp));
console.log('Jimp prototype keys:', Object.keys(Jimp.prototype || {}));
try {
    console.log('Jimp.read type:', typeof Jimp.read);
} catch (e) {
    console.log('Jimp.read error:', e.message);
}

if (Jimp.default) {
    console.log('Jimp.default export type:', typeof Jimp.default);
    console.log('Jimp.default.read type:', typeof Jimp.default.read);
}
