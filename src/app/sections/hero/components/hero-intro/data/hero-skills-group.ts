import { HeroSkillGroup } from '../models/hero-skill-group';
import { BACKEND_SKILLS } from './hero-skills-backend';
import { FRONTEND_SKILLS } from './hero-skills-frontend';
import { TOOLS_SKILLS } from './hero-skills-tools';

export const SKILL_GROUPS: HeroSkillGroup[] = [
  {
    title: 'Frontend',
    skills: FRONTEND_SKILLS,
  },
  {
    title: 'Tools',
    skills: TOOLS_SKILLS,
  },
  {
    title: 'Backend',
    skills: BACKEND_SKILLS,
  },
];
