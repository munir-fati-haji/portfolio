import { Component, input } from '@angular/core';
import { AboutHighlight } from '../../models/about-highlight.model';
import { AboutHighlightCard } from './components/about-highlight-card/about-highlight-card';

@Component({
  selector: 'app-about-highlights',
  host: { class: 'about-highlights__grid' },
  imports: [AboutHighlightCard],
  templateUrl: './about-highlights.html',
  styleUrl: './about-highlights.scss',
})
export class AboutHighlights {
  public readonly highlights = input.required<AboutHighlight[]>();
}
