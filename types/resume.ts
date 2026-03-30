export type Locale = 'fr' | 'en';

export type LocalizedString = {
  fr: string;
  en: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  location?: LocalizedString;
  summary: LocalizedString;
  details: LocalizedString[];
  technologies: string[];
};

export type Project = {
  name: string;
  description: LocalizedString;
  link?: string;
  technologies: string[];
};

export type ResumeData = {
  name: string;
  title: LocalizedString;
  yearsOfExperience: LocalizedString;
  summary: LocalizedString;
  email: string;
  phone: string;
  location: LocalizedString;
  links: ContactLink[];
  experiences: Experience[];
  projects: Project[];
  skills: string[];
};