import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react(), svgr(),],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@context': '/src/context/',
      '@components': '/src/components/',
      '@components-plantillas': '/src/components/plantillas/',
      '@components-sidebar': '/src/components/sidebar/',
      '@components-editor': '/src/components/editor/',
      '@components-headers': '/src/components/headers/',
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
    },
  },
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['jsonwebtoken', 'crypto-browserify', 'stream-browserify', 'buffer'],
  },
});