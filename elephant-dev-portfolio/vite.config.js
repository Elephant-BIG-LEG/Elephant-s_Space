import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Elephant-s_Space/',
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
});
