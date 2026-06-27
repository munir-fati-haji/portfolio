import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  imports: [],
  templateUrl: './about-skills.html',
})
export class AboutSkills {
  public readonly skills = input.required<readonly string[]>();
}
