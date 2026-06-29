import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedChipButton } from '../../../../shared/components/shared-chip-button/shared-chip-button';
import { EducationItem } from '../../models/education-item.model';

@Component({
  selector: 'app-education-card',
  imports: [MatIconModule, SharedChipButton],
  host: { class: 'block' },
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
})
export class EducationCard {
  public readonly education = input.required<EducationItem>();
  public readonly index = input.required<number>();
}
