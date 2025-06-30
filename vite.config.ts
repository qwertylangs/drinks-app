import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
      __IS_DEV__: JSON.stringify(mode === 'development'),
    },
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
    },
  };
});
