import { Component } from '@angular/core';
import { SharedChipButton } from '../../shared/components/shared-chip-button/shared-chip-button';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { SkillCategoryCard } from './components/skill-category-card/skill-category-card';
import { SKILL_CATEGORIES } from './data/skill-categories';
import { SKILL_STATS } from './data/skill-stats';
import { SKILLS_DESCRIPTION, SKILLS_EYEBROW, SKILLS_TITLE } from './data/skills-copy';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, SharedChipButton, SkillCategoryCard],
  templateUrl: './skills.html',
})
export class Skills {
  public readonly eyebrow = SKILLS_EYEBROW;
  public readonly title = SKILLS_TITLE;
  public readonly description = SKILLS_DESCRIPTION;
  public readonly stats = SKILL_STATS;
  public readonly categories = SKILL_CATEGORIES;
}
