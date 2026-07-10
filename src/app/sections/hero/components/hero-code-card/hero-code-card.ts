import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-hero-code-card',
  imports: [MatCardModule, Highlight],
  templateUrl: './hero-code-card.html',
  styleUrl: './hero-code-card.scss',
  host: { class: 'block' },
})
export class HeroCodeCard {
  public readonly code = input.required<string>();
}
