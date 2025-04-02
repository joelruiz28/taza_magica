import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/taza_magica/',  // Especifica la ruta base para GitHub Pages
  plugins: [react()],
});
