import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { ExperienceCard } from './components/experience-card/experience-card';
import {
  EXPERIENCE_DESCRIPTION,
  EXPERIENCE_EYEBROW,
  EXPERIENCE_ITEMS,
  EXPERIENCE_METRICS,
  EXPERIENCE_TITLE,
} from './data';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCard, SectionHeader],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  public readonly eyebrow = EXPERIENCE_EYEBROW;
  public readonly title = EXPERIENCE_TITLE;
  public readonly description = EXPERIENCE_DESCRIPTION;
  public readonly metrics = EXPERIENCE_METRICS;
  public readonly experiences = EXPERIENCE_ITEMS;
}
