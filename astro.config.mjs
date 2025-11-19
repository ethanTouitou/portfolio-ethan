// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';         // ← ajoute l'adaptateur Node
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',                       // ← important pour avoir dist/server/
  adapter: node({
    mode: 'standalone'                    // ← recommandé (serveur Node autonome)
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});
