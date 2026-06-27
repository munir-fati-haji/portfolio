import { EducationSkill } from './education-skill.model';

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  grade: string;
  icon: string;
  description: string;
  highlights: string[];
  skills: EducationSkill[];
}
