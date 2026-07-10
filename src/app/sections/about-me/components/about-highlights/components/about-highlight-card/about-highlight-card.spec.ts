import { MockBuilder, MockRender } from 'ng-mocks';

import { ABOUT_HIGHLIGHTS } from '../../../../data/about-highlights';
import { AboutHighlightCard } from './about-highlight-card';

describe('AboutHighlightCard', () => {
  beforeEach(() => MockBuilder(AboutHighlightCard));

  it('renders the highlight title, description, and icon', () => {
    const highlight = ABOUT_HIGHLIGHTS[0];
    const fixture = MockRender(AboutHighlightCard, { highlight });
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    expect(text).toContain(highlight.title);
    expect(text).toContain(highlight.description);
    expect(text).toContain(highlight.icon);
  });
});
