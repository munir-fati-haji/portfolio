import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeroSkills } from './components/hero-skills/hero-skills';
import { HeroSkillGroup } from './models/hero-skill-group';

@Component({
  selector: 'app-hero-intro',
  imports: [RouterLink, MatButtonModule, MatIconModule, HeroSkills],
  templateUrl: './hero-intro.html',
  styleUrl: './hero-intro.scss',
  host: { class: 'hero-intro__content' },
})
export class HeroIntro {
  public readonly name = input.required<string>();
  public readonly role = input.required<string>();
  public readonly description = input.required<string>();
  public readonly skills = input.required<HeroSkillGroup[]>();

  public downloadCv(): void {
    const link = document.createElement('a');

    link.href = new URL('Munir_Fati_Haji_CV.pdf', document.baseURI).href;
    link.download = 'Munir_Fati_Haji_CV.pdf';
    link.click();
  }
}
