import { Component, input } from '@angular/core';
import { HeroStat } from '../../models/hero-stat.model';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.html',
})
export class HeroStats {
  public readonly stats = input.required<HeroStat[]>();
}
