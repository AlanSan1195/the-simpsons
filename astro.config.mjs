// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Keep the HTML whitespace behavior used before Astro 7.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});
