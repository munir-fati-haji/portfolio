import { ExperienceSkill } from './experience-skill.model';

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  icon: string;
  summary: string;
  highlights: string[];
  skills: ExperienceSkill[];
}
