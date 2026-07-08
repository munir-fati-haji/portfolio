import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { HeroSkills } from './components/hero-skills/hero-skills';
import { HeroSkillGroup } from './models/hero-skill-group';

@Component({
  selector: 'app-hero-intro',
  imports: [RouterLink, MatButtonModule, MatChipsModule, MatIconModule, HeroSkills],
  templateUrl: './hero-intro.html',
  styleUrl: './hero-intro.scss',
  host: { class: 'hero-intro__content' },
})
export class HeroIntro {
  public readonly name = input.required<string>();
  public readonly role = input.required<string>();
  public readonly description = input.required<string>();
  public readonly recruiterSignals = input.required<string[]>();
  public readonly skills = input.required<HeroSkillGroup[]>();
}