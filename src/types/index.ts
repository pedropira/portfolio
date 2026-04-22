export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl: string;
  image: string | string[];
}

export interface Achievement {
  id: string;
  text: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  from: string;
  to: string;
  achievements: Achievement[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
export interface Mentor {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}
