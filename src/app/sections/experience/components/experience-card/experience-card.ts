import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedChipButton } from '@shared/components/shared-chip-button/shared-chip-button';
import { ExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-experience-card',
  imports: [MatCardModule, MatIconModule, SharedChipButton],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
  host: { class: 'block' },
})
export class ExperienceCard {
  public readonly experience = input.required<ExperienceItem>();
}
