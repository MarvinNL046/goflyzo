import fs from 'fs';
import { createCanvas } from 'canvas';
import pngToIco from 'png-to-ico';

// Create a canvas
const size = 32;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Draw background circle
ctx.fillStyle = '#007AFF';
ctx.beginPath();
ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
ctx.fill();

// Draw letter G
ctx.fillStyle = 'white';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('G', size/2, size/2 + 2);

// Convert to PNG buffer
const buffer = canvas.toBuffer('image/png');

// Save as PNG temporarily
fs.writeFileSync('public/images/favicon.png', buffer);

// Convert to ICO
async function convertToIco() {
    try {
        const ico = await pngToIco('public/images/favicon.png');
        fs.writeFileSync('app/favicon.ico', ico);
        // Clean up the temporary PNG
        fs.unlinkSync('public/images/favicon.png');
        console.log('Favicon created successfully!');
    } catch (error) {
        console.error('Error creating favicon:', error);
    }
}

convertToIco();
