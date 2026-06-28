import { Component, input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { WINDOW_ACTIONS } from './data/window-actions';

@Component({
  selector: 'app-hero-code-card',
  imports: [Highlight],
  templateUrl: './hero-code-card.html',
})
export class HeroCodeCard {
  public readonly code = input.required<string>();
  protected readonly windowActions = WINDOW_ACTIONS;
}
