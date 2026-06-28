import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedChipButton } from '../../../../shared/components/shared-chip-button/shared-chip-button';
import { ExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-experience-card',
  imports: [MatIconModule, SharedChipButton],
  host: { class: 'block' },
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  public readonly experience = input.required<ExperienceItem>();
  public readonly index = input.required<number>();
}
