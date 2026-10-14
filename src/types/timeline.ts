export type ThemeColor = 
  | 'cyan' 
  | 'magenta' 
  | 'purple' 
  | 'crimson' 
  | 'gold' 
  | 'slate' 
  | 'amber';

export interface TimelineEvent {
  year?: string;
  month?: string;
  headline: string;
  detail: string;
  tag?: string;
}

export interface TimelineArc {
  id: string;
  arcNumber: number;
  romanNumeral: string;
  title: string;
  subtitle: string;
  period: string;
  startDate: string;
  endDate: string;
  theme: string;
  accentColor: string; // Hex color
  glowColor: string;
  bgGradient: string;
  characterImage: string;
  characterPoseDescription: string;
  quote?: string;
  description: string[];
  keyHighlights: string[];
  events: TimelineEvent[];
  stats?: { label: string; value: string }[];
  isConfidential?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Core Expertise", "Advanced", "Active Exploration"
    iconName: string;
    note: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'Flagship Core' | 'Commercial Offering' | 'Historic Milestone' | 'Active Ecosystem';
  description: string;
  technologies: string[];
  metrics?: string[];
  link?: string;
  domain?: string;
  isFlagship?: boolean;
}

export interface FoundationItem {
  id: string;
  title: string;
  theme: string;
  statement: string;
  narrative: string;
  icon: string;
}
