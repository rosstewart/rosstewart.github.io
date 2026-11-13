export const SITE = {
  name: 'Ross C. Stewart',
  shortName: 'Ross Stewart',
  role: 'Ph.D. student in Computer Science',
  affiliation: 'Northeastern University · Radivojac Lab',
  description:
    'Ross C. Stewart is a Ph.D. student at Northeastern University developing machine learning methods for variant effect prediction, protein–protein interactions, and clinical variant interpretation.',
  email: 'stewart.ro@northeastern.edu',
  location: 'Boston, MA',
  orcid: '0009-0006-4240-9308',
};

export const SOCIAL = [
  { label: 'Email', icon: 'mail', url: `mailto:${SITE.email}` },
  { label: 'Google Scholar', icon: 'scholar', url: 'https://scholar.google.com/citations?user=_SHWmEYAAAAJ&hl=en' },
  { label: 'GitHub', icon: 'github', url: 'https://github.com/rosstewart' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/ross-stewart-16523b220/' },
  { label: 'ORCID', icon: 'orcid', url: `https://orcid.org/${SITE.orcid}` },
] as const;

export const NAV = [
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Talks', href: '/talks/' },
  { label: 'Teaching & Service', href: '/teaching-service/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'CV', href: '/cv/' },
] as const;
