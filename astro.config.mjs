// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://romerospaintingmaintenance.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://romerospaintingmaintenance.com/portfolio'
    })
  ],
  adapter: vercel()
});