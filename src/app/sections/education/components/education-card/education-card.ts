import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EducationItem } from '../../models/education-item.model';

@Component({
  selector: 'app-education-card',
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './education-card.html',
})
export class EducationCard {
  public readonly education = input.required<EducationItem>();
  public readonly index = input.required<number>();
}
