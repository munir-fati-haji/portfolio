import { Component, input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-hero-code-card',
  imports: [Highlight],
  templateUrl: './hero-code-card.html',
})
export class HeroCodeCard {
  public readonly code = input.required<string>();

  protected readonly windowActions = [
    { label: 'Close', className: 'bg-red-400' },
    { label: 'Minimize', className: 'bg-yellow-400' },
    { label: 'Maximize', className: 'bg-green-400' },
  ];
}
