import { Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about-skills',
  imports: [MatChipsModule],
  templateUrl: './about-skills.html',
  styleUrl: './about-skills.scss',
  host: { class: 'about-skills__section' },
})
export class AboutSkills {
  public readonly skills = input.required<readonly string[]>();
}
