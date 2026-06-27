export interface SkillItem {
  name: string;
  icon: string;
  level: 'Advanced' | 'Strong' | 'Practical' | 'Basic';
  experience?: string;
}
