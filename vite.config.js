// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  worker: {
    format: 'es', // Use ES module format for workers
    plugins: () => [
      // Define worker-specific plugins here
    ]
  },
});


