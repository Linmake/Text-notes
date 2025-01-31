import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@context': '/src/context/', // Asegúrate que esta ruta sea correcta
      '@components': '/src/components/',
      '@components-plantillas': '/src/components/plantillas/',
      '@components-sidebar': '/src/components/sidebar/',
      '@components-editor': '/src/components/editor/',
      '@components-headers': '/src/components/headers/',
    }
  },
});
