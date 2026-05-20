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
    name: 'GROVE — Organized Group Behavior Simulation',
    blurb:
      'A framework and benchmark for simulating how organized groups (corporations, governments, institutions) make collective decisions, by converting historical behavior into interpretable, traceable models. GROVE includes 8,052 context-decision pairs across 44 entities and 9 domains, with time-aware and group-aware adapters for behavioral evolution and cross-organization transfer.',
    stack: ['Python', 'LLMs', 'GPT-4o', 'Decision Trees', 'Benchmark'],
    url: 'https://jayzou3773.github.io/projects/group-behavior-simulation/',
    repo: 'https://github.com/jayzou3773/Organized-Group-Behavior-Simulation',
    status: 'live',
  },
];
