import { Component, input } from '@angular/core';
import { SharedChipButton } from '@shared/components/shared-chip-button/shared-chip-button';

@Component({
  selector: 'app-about-skills',
  host: { class: 'about-skills__section' },
  imports: [SharedChipButton],
  templateUrl: './about-skills.html',
  styleUrl: './about-skills.scss',
})
export class AboutSkills {
  public readonly skills = input.required<readonly string[]>();
}
