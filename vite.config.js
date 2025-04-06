import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
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
