import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  host: { class: 'block' },
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {
  public readonly eyebrow = input.required<string>();
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();
}
