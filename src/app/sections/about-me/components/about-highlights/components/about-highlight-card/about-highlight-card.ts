import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AboutHighlight } from '../../../../models/about-highlight.model';

@Component({
  selector: 'app-about-highlight-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about-highlight-card.html',
  styleUrl: './about-highlight-card.scss',
})
export class AboutHighlightCard {
  public readonly highlight = input.required<AboutHighlight>();
}
