import { MockBuilder, MockRender } from 'ng-mocks';

import { ABOUT_HIGHLIGHTS } from '../../../../data/about-highlights';
import { AboutHighlightCard } from './about-highlight-card';

describe('AboutHighlightCard', () => {
  beforeEach(() => MockBuilder(AboutHighlightCard));

  it('renders the highlight title, description, and icon', () => {
    const highlight = ABOUT_HIGHLIGHTS[0];
    const fixture = MockRender(AboutHighlightCard, { highlight });

    expect(fixture.nativeElement.textContent).toContain(highlight.title);
    expect(fixture.nativeElement.textContent).toContain(highlight.description);
    expect(fixture.nativeElement.textContent).toContain(highlight.icon);
  });
});
