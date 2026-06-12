import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const dirs = ['src/assets', 'public'];

async function convert() {
  for (const dir of dirs) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg')) {
          const input = path.join(dir, file);
          const output = path.join(dir, file.replace(/\.(png|jpg)$/, '.webp'));
          console.log(`Converting ${input} to ${output}`);
          await sharp(input).webp({ quality: 80, effort: 6 }).toFile(output);
          await fs.unlink(input);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
}
convert();
