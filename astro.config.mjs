// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel';

export default defineConfig({
  // 👇 Muy importante: todas las rutas se generan con /novelist/
  // base: '/novelist/',

  vite: {
     plugins: [tailwindcss()],
     server: {
       strictPort: true, // si está ocupado, error
       allowedHosts: [ 'dev.dynecore.com' ]
     },
   },

  server: {
      port: 2100,       // puerto fijo
      host: true
    },

  // build estático para producción
  output: 'static',

  adapter: vercel()
})