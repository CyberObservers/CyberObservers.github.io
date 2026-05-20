export interface Project {
  name: string;
  blurb: string;
  stack: string[];
  url?: string;
  repo?: string;
  status?: 'live' | 'archived' | 'wip';
}

export const projects: Project[] = [
  {
    name: 'Project One',
    blurb:
      'A short description of what this project does, why it exists, and what problem it solves. Keep it tight.',
    stack: ['TypeScript', 'React', 'Postgres'],
    url: '#',
    repo: 'https://github.com/CyberObservers/project-one',
    status: 'live',
  },
  {
    name: 'Project Two',
    blurb:
      'Another project. Replace these with your real work — open-source tools, research code, demos, etc.',
    stack: ['Python', 'PyTorch'],
    repo: 'https://github.com/CyberObservers/project-two',
    status: 'wip',
  },
];
