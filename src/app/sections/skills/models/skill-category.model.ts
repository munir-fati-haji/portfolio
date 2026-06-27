import { SkillItem } from './skill-item.model';

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}
