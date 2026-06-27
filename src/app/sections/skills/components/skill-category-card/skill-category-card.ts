import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SkillCategory } from '../../models/skill-category.model';

@Component({
  selector: 'app-skill-category-card',
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './skill-category-card.html',
})
export class SkillCategoryCard {
  public readonly category = input.required<SkillCategory>();
  public readonly index = input.required<number>();
}
