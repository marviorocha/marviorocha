import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: 'https://marviorocha.com'
  adapter: netlify()
});
