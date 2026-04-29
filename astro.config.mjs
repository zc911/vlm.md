import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vlm.md',
  output: 'static',
  integrations: [tailwind(), mdx()],
});
