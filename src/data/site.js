export const site = {
  title: 'Caleb Larry',
  // It sets the browser tab text, the search-result description and link previews, so it should match the home page hero.
  tagline: 'Ex-network security, technical writer, builder of agent tooling',
  email: 'larrycm@gmail.com',
  linkedin: 'https://www.linkedin.com/in/caleb-larry-a717b1333/',
};

// Home page copy. Placeholder text: rewrite freely.
export const home = {
  eyebrow: 'AI agent tooling · Developer experience · Technical writing',
  headline: 'Tools that make technical documentation work for engineers and the AI agents reading it.',
  sub: 'Senior technical writer with a network security background, building agent tooling with Claude Code.',
  about: {
    heading: 'Technical writer turned agent builder',
    text: 'Seven years in IT, five of them in network security, before I moved into technical writing. I think in systems, and I design workflows around finishing the task, meeting the business need, and keeping the end user in mind.',
  },
};

// Home page sections, in display order. Each case study in
// src/pages/work/ picks one of these with its `category` frontmatter.
export const groups = [
  { id: 'ai', label: 'AI Systems' },
  { id: 'portal', label: 'Developer Portal Documentation' },
  { id: 'ui', label: 'UI Documentation' },
  { id: 'api', label: 'API Documentation' },
];

// Prefix a site-relative path with the deploy base ("/portfolio/").
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}

const modules = import.meta.glob('../pages/work/*.md');

// Every case study, sorted by group and then by `order`.
export async function getWork() {
  const pages = await Promise.all(Object.values(modules).map((load) => load()));
  const rank = (page) => groups.findIndex((group) => group.id === page.frontmatter.category);
  return pages.sort(
    (a, b) => rank(a) - rank(b) || a.frontmatter.order - b.frontmatter.order,
  );
}
