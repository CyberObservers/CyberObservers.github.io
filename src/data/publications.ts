export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links?: { label: string; url: string }[];
  abstract?: string;
  highlight?: boolean;
}

export const publications: Publication[] = [
  {
    title: 'Example Paper Title: A Study of Something Important',
    authors: 'Your Name, Coauthor A, Coauthor B',
    venue: 'Proceedings of Some Conference (ACM)',
    year: 2025,
    highlight: true,
    links: [
      { label: 'PDF', url: '#' },
      { label: 'Code', url: '#' },
      { label: 'arXiv', url: '#' },
    ],
    abstract:
      'A short one- or two-sentence abstract goes here. Replace with the real summary of your paper.',
  },
  {
    title: 'Another Earlier Work on a Related Topic',
    authors: 'Coauthor C, Your Name, Coauthor D',
    venue: 'Workshop on Things',
    year: 2024,
    links: [{ label: 'PDF', url: '#' }],
  },
];
