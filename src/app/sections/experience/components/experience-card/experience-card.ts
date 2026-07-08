import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-experience-card',
  imports: [MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatListModule],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
  host: { class: 'block' },
})
export class ExperienceCard {
  public readonly experience = input.required<ExperienceItem>();
}