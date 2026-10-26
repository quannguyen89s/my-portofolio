export type ProjectCategory = 'All' | 'Smart Home / IoT' | 'Web Apps' | 'Backend & API' | 'Mobile';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudyData {
  overview: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  keyOutcomes: string[];
  techStackBreakdown: { title: string; tech: string[] }[];
}

export interface Project {
  id: string;
  title: string;
  repoName?: string;
  tagline: string;
  category: string;
  featured: boolean;
  year: string;
  description: string;
  gradient: string;
  coverImage: string;
  mockupType: 'browser' | 'terminal' | 'analytics';
  metrics: ProjectMetric[];
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  caseStudy: CaseStudyData;
}

export interface TimelineItem {
  id: string;
  year: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'work' | 'education' | 'milestone';
  description: string;
  highlights: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}
