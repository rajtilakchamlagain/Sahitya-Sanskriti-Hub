import fs from 'fs';
import pngToIco from 'png-to-ico';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { Jimp } = require('jimp');

async function generate() {
    try {
        console.log('Reading logo.png...');
        // Jimp.read is static
        const image = await Jimp.read('public/logo.png');
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        const size = Math.max(width, height);

        console.log(`Original size: ${width}x${height}. Target square size: ${size}x${size}`);

        // Create new square image with transparent background (0x00000000)
        // Constructor: new Jimp(width, height, color)
        const squareImage = new Jimp({ width: size, height: size, color: 0x00000000 });

        // Composite original image onto center
        const x = (size - width) / 2;
        const y = (size - height) / 2;
        squareImage.composite(image, x, y);

        console.log('Writing temporary square logo...');
        await squareImage.write('public/logo-square.png');

        console.log('Converting to ICO...');
        const buf = await pngToIco('public/logo-square.png');
        fs.writeFileSync('public/favicon.ico', buf);
        console.log('Favicon created successfully at public/favicon.ico');

        // Cleanup
        fs.unlinkSync('public/logo-square.png');
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

generate();
