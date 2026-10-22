export interface SkillItem {
  id: string;
  shortName: string;
  percentage: number;
  iconName: 'office' | 'design' | 'webdev' | string;
  description: string;
  tools: string[];
  color: string;
  glowColor: string;
  badgeBg: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  current: boolean;
  highlight: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  badge: string;
}

export interface ContactsInfo {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export interface PortfolioData {
  fullName: string;
  headline: string;
  professions: string[];
  location: string;
  profileImageUrl: string;
  about: string;
  skills: SkillItem[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
  contacts: ContactsInfo;
}

