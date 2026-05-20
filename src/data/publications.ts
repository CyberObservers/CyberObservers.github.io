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
    title:
      'Simulating Organized Group Behavior: New Framework, Benchmark, and Analysis',
    authors:
      'Xinkai Zou*, Yiming Huang*, Zhuohang Wu, Jian Sha, Nan Huang, Longfei Yun, Jingbo Shang, Letian Peng  (*equal contribution)',
    venue: 'Under submission, COLM 2026',
    year: 2026,
    highlight: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2604.09874' },
      { label: 'Project', url: 'https://jayzou3773.github.io/projects/group-behavior-simulation/' },
      { label: 'Code', url: 'https://github.com/jayzou3773/Organized-Group-Behavior-Simulation' },
      { label: 'Demo', url: 'https://jayzou3773.github.io/projects/group-behavior-simulation/openai_tc.html' },
    ],
    abstract:
      'We study how organized groups — corporations, governments, institutions — make collective decisions, and propose GROVE: a benchmark of 8,052 context-decision pairs across 44 entities and 9 domains, together with a framework that converts historical behavior into interpretable, traceable decision models. Time-aware and group-aware adapters enable behavioral evolution and cross-organization transfer.',
  },
];
