import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EducationItem } from '../../models/education-item.model';

@Component({
  selector: 'app-education-card',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatListModule],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
  host: { class: 'block' },
})
export class EducationCard {
  public readonly education = input.required<EducationItem>();
}
