import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    // Вказати шлях до вашого головного CSS файлу
    postcss: 'src/index.css',
  },
});
