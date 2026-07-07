import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { SectionHeader } from '@shared/components/section-header/section-header';
import { SkillCategoryCard } from './components/skill-category-card/skill-category-card';
import { SKILL_CATEGORIES } from './data/skill-categories';
import { SKILL_STATS } from './data/skill-stats';
import { SKILLS_DESCRIPTION, SKILLS_EYEBROW, SKILLS_TITLE } from './data/skills-copy';

@Component({
  selector: 'app-skills',
  imports: [MatCardModule, MatChipsModule, SectionHeader, SkillCategoryCard],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  public readonly eyebrow = SKILLS_EYEBROW;
  public readonly title = SKILLS_TITLE;
  public readonly description = SKILLS_DESCRIPTION;
  public readonly stats = SKILL_STATS;
  public readonly categories = SKILL_CATEGORIES;
}
