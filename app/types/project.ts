export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  date: string;
} 