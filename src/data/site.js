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
    heading: 'About',
    sections: [
      {
        title: 'How I got here',
        text: [
          "I spent seven years in IT, five of them in network security. I then moved into technical writing because I love reading, writing, and organizing data, and I wanted to use my English degree for more than security incident write-ups.",
          "In technical writing I grew from junior to senior, and in the age of AI I've grown into something different again.",
        ],
      },
      {
        title: 'How I work',
        text: [
          "I've always thought in systems and modular design. Paired with a security professional's eye for detail and a technical writer's command of prose, that lets me design workflows aimed at completing tasks, meeting business needs, and keeping the end user front of mind.",
        ],
      },
      {
        title: 'Teaching myself',
        text: [
          "My English degree taught me to teach myself, since I routinely competed with and outperformed my CS counterparts. Interviews used to start with \"You have an English degree. How did you get here?\" Now they go \"You have this experience and an English degree? Get in here!\"",
          "The discipline that carried me through my security career and my GCIH certification still drives me. I don't know where the AI world is headed, but my background shows I can adapt and meet the next challenge.",
        ],
      },
    ],
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
