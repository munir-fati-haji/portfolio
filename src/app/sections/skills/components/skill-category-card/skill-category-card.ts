import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SkillCategory } from '../../models/skill-category.model';

@Component({
  selector: 'app-skill-category-card',
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './skill-category-card.html',
  styleUrl: './skill-category-card.scss',
  host: { class: 'block' },
})
export class SkillCategoryCard {
  public readonly category = input.required<SkillCategory>();
}
