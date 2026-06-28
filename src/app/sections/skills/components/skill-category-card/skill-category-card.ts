import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedChipButton } from '../../../../shared/components/shared-chip-button/shared-chip-button';
import { SkillCategory } from '../../models/skill-category.model';

@Component({
  selector: 'app-skill-category-card',
  imports: [MatIconModule, SharedChipButton],
  host: { class: 'block' },
  templateUrl: './skill-category-card.html',
})
export class SkillCategoryCard {
  public readonly category = input.required<SkillCategory>();
  public readonly index = input.required<number>();
}
