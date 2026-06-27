import { Component, input } from '@angular/core';

type HeroStat = {
  value: string;
  label: string;
};

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.html',
})
export class HeroStats {
  public readonly stats = input.required<HeroStat[]>();
}
