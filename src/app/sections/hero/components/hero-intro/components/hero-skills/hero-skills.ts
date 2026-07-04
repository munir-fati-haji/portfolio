import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeroSkillGroup } from '../../models/hero-skill-group';

@Component({
  selector: 'app-hero-skills',
  host: { class: 'hero-skills__section' },
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './hero-skills.html',
  styleUrl: './hero-skills.scss',
})
export class HeroSkills {
  public readonly groups = input.required<HeroSkillGroup[]>();
}
