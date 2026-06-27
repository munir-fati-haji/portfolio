import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { SkillCategoryCard } from './components/skill-category-card/skill-category-card';
import { SKILL_CATEGORIES, SKILL_STATS, SKILLS_DESCRIPTION, SKILLS_EYEBROW, SKILLS_TITLE } from './data';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, SkillCategoryCard],
  templateUrl: './skills.html',
})
export class Skills {
  public readonly eyebrow = SKILLS_EYEBROW;
  public readonly title = SKILLS_TITLE;
  public readonly description = SKILLS_DESCRIPTION;
  public readonly stats = SKILL_STATS;
  public readonly categories = SKILL_CATEGORIES;
}
