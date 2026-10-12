export const site = {
  title: 'Caleb Larry',
  tagline: 'Self-taught IT and Technical Writing Professional',
  email: 'larrycm@gmail.com',
};

// Sidebar and home page sections, in display order. Each case study in
// src/pages/work/ picks one of these with its `category` frontmatter.
export const groups = [
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
