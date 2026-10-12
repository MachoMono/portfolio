export const site = {
  title: 'Caleb Larry',
  tagline: 'Self-taught IT and Technical Writing Professional',
  email: 'larrycm@gmail.com',
  nav: [
    { label: 'Portfolio', href: '' },
    { label: 'My Resume', href: 'my-resume/' },
    { label: 'Contact', href: 'contact/' },
  ],
};

// Prefix a site-relative path with the deploy base ("/portfolio/").
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
