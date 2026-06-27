import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-experience-card',
  imports: [MatIconModule],
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  public readonly experience = input.required<ExperienceItem>();
  public readonly index = input.required<number>();
}
