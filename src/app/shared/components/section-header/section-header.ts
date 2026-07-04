import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
  host: { class: 'block' },
})
export class SectionHeader {
  public readonly eyebrow = input.required<string>();
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();
}
