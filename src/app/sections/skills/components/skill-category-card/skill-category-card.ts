import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedChipButton } from '@shared/components/shared-chip-button/shared-chip-button';
import { SkillCategory } from '../../models/skill-category.model';
import { SkillLevelVariantPipe } from '../../pipes/skill-level-variant.pipe';

@Component({
  selector: 'app-skill-category-card',
  imports: [MatCardModule, MatIconModule, SharedChipButton, SkillLevelVariantPipe],
  host: { class: 'block' },
  templateUrl: './skill-category-card.html',
  styleUrl: './skill-category-card.scss',
})
export class SkillCategoryCard {
  public readonly category = input.required<SkillCategory>();
  public readonly index = input.required<number>();
}
