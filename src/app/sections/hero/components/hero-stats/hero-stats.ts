import { Component, input } from '@angular/core';
import { HeroStat } from '../../models/hero-stat.model';

@Component({
  selector: 'app-hero-stats',
  host: { class: 'hero-stats__grid' },
  templateUrl: './hero-stats.html',
  styleUrl: './hero-stats.scss',
})
export class HeroStats {
  public readonly stats = input.required<HeroStat[]>();
}
