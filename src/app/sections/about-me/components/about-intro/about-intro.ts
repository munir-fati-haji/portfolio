import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-intro',
  imports: [],
  templateUrl: './about-intro.html',
})
export class AboutIntro {
  public readonly eyebrow = input.required<string>();
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();
  public readonly secondDescription = input.required<string>();
}
