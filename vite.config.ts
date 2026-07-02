import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aba1: resolve(__dirname, 'pages/aba1.html'),
        aba2: resolve(__dirname, 'pages/aba2.html'),
        aba3: resolve(__dirname, 'pages/aba3.html'),
        aba4: resolve(__dirname, 'pages/aba4.html'),
        aba5: resolve(__dirname, 'pages/aba5.html'),
        aba6: resolve(__dirname, 'pages/aba6.html'),
        aba7: resolve(__dirname, 'pages/aba7.html'),
      }
    }
  },
  test: {
    environment: 'jsdom',
  }
});
