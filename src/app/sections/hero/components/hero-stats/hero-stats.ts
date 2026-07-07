import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeroStat } from '../../models/hero-stat.model';

@Component({
  selector: 'app-hero-stats',
  imports: [MatCardModule],
  templateUrl: './hero-stats.html',
  styleUrl: './hero-stats.scss',
  host: { class: 'hero-stats__grid' },
})
export class HeroStats {
  public readonly stats = input.required<HeroStat[]>();
}
