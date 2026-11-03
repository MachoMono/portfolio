export const site = {
  title: 'Caleb Larry',
  tagline: 'Self-taught IT and Technical Writing Professional',
  email: 'larrycm@gmail.com',
  github: 'https://github.com/MachoMono',
};

// Home page copy. Placeholder text: rewrite freely.
export const home = {
  eyebrow: 'AI agent tooling · Developer experience · Technical writing',
  headline: 'Tools that make technical documentation work for engineers and the AI agents reading it.',
  sub: 'Senior Technical Writer building agent tooling with Claude Code.',
  chips: ['4-agent pipeline, 2 human gates', 'Built with Claude Code', 'Nothing ships without a yes'],
  about: {
    heading: 'Technical writer turned agent builder',
    text: 'Five years as a security analyst before that. I design toward buy-in: a good system only works if the people using it trust it.',
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
