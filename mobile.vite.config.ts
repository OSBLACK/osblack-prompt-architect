import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'mobile',
  base: './',
  plugins: [react()],
  resolve: { alias: { '@': resolve(process.cwd(), '.') } },
  build: { outDir: '../dist-mobile', emptyOutDir: true },
});
