import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutHighlight } from '../../../../models/about-highlight.model';

@Component({
  selector: 'app-about-highlight-card',
  imports: [MatIconModule],
  templateUrl: './about-highlight-card.html',
})
export class AboutHighlightCard {
  public readonly highlight = input.required<AboutHighlight>();
}
