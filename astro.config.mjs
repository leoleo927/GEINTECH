// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio de producción (se usa para la URL canónica / SEO).
  site: 'https://geintech.com.pe',
  vite: {
    plugins: [tailwindcss()],
  },
});
