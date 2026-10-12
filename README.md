# Caleb Larry — portfolio

Static site built with [Astro](https://astro.build), deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

Live: https://machomono.github.io/portfolio/

## Editing

| To change | Edit |
| --- | --- |
| Résumé | `src/data/resume.js` |
| Site title, tagline, email, sidebar sections | `src/data/site.js` |
| Portfolio home page | `src/pages/index.astro` |
| A case study, or add a new one | `src/pages/work/*.md` |
| Images | `public/images/` |
| Colors, fonts, sidebar, layout | `src/layouts/Base.astro` |
| Case-study page template | `src/layouts/Work.astro` |
| Browser-style screenshot frame | `src/components/Shot.astro` |

A new Markdown file in `src/pages/work/` appears on the home page and in the sidebar automatically;
set `category` to `portal`, `ui` or `api` and `order` to position it.

## Local preview

```sh
npm install
npm run dev
```
