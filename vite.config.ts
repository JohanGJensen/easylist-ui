import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/easylist-ui-pwa/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
