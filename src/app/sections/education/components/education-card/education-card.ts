import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedChipButton } from '@shared/components/shared-chip-button/shared-chip-button';
import { EducationItem } from '../../models/education-item.model';

@Component({
  selector: 'app-education-card',
  imports: [MatCardModule, MatIconModule, SharedChipButton],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
  host: { class: 'block' },
})
export class EducationCard {
  public readonly education = input.required<EducationItem>();
}
