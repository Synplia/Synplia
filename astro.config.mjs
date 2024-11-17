import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  ...(isProduction ? {
    site: 'https://synplia.github.io',
    base: '/Synplia'
  } : {
    site: 'http://localhost:4321'
  })
});