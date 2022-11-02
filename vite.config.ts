import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/easylist-ui-pwa/',
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    outDir: 'build',
    rollupOptions: {
      external: [],
      output: {
        plugins: [
          getBabelOutputPlugin({
            allowAllFormats: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '> 0.25%, not dead, IE 11',
                  useBuiltIns: false,
                  modules: false
                },
              ]
            ]
          }),
        ]
      },
    },
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
