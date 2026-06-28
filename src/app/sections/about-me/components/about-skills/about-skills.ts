import { Component, input } from '@angular/core';
import { SharedChipButton } from '../../../../shared/components/shared-chip-button/shared-chip-button';

@Component({
  selector: 'app-about-skills',
  imports: [SharedChipButton],
  templateUrl: './about-skills.html',
})
export class AboutSkills {
  public readonly skills = input.required<readonly string[]>();
}
