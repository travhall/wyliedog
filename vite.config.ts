import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // Exclude stories from production build
      exclude: [
        '**/stories/**',
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/stories/index.ts',
      ],
    },
  },
});