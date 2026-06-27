import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeroSkills } from './components/hero-skills/hero-skills';
import { HeroSkillGroup } from './models/hero-skill-group';

@Component({
  selector: 'app-hero-intro',
  imports: [MatButtonModule, MatIconModule, HeroSkills],
  templateUrl: './hero-intro.html',
})
export class HeroIntro {
  public readonly name = input.required<string>();
  public readonly role = input.required<string>();
  public readonly description = input.required<string>();
  public readonly skills = input.required<HeroSkillGroup[]>();
}
