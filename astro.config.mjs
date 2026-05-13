import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vlm.md',
  output: 'static',
  integrations: [tailwind(), mdx(), pagefind(), sitemap()],
});
