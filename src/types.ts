export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  pillar: 'Product' | 'AI' | 'E-commerce';
  period: string;
  role: string;
  image: string;
  summary: string;
  metrics: { label: string; value: string }[];
  problem: string;
  approach: string[];
  systemHighlights: string[];
  outcomes: string[];
  learnings: string;
}

export interface Principle {
  id: string;
  number: string;
  title: string;
  quote: string;
  excerpt: string;
  fullEssay: string[];
  readTime: string;
  keyTakeaways: string[];
}

export interface ExplorationItem {
  id: string;
  title: string;
  focusArea: string;
  stage: 'Active Prototype' | 'Research Paper' | 'Early Inquiry';
  hypothesis: string;
  methodology: string;
  interactiveAvailable?: boolean;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  theme: 'human' | 'product' | 'ai';
  keyImpact: string;
}
