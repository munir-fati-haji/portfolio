import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { ABOUT_HIGHLIGHTS } from '../../data/about-highlights';
import { AboutHighlightCard } from './components/about-highlight-card/about-highlight-card';
import { AboutHighlights } from './about-highlights';

describe('AboutHighlights', () => {
  beforeEach(() => MockBuilder(AboutHighlights).mock(AboutHighlightCard));

  it('renders a highlight card for each highlight', () => {
    MockRender(AboutHighlights, { highlights: ABOUT_HIGHLIGHTS });

    const cards = ngMocks.findAll(AboutHighlightCard);

    expect(cards).toHaveLength(ABOUT_HIGHLIGHTS.length);
    expect(ngMocks.input(cards[0], 'highlight')).toEqual(ABOUT_HIGHLIGHTS[0]);
  });
});
