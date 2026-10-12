import { defineConfig } from 'astro/config';

// Served as a GitHub Pages project site: https://machomono.github.io/portfolio/
// If a custom domain is added later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://machomono.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
});
