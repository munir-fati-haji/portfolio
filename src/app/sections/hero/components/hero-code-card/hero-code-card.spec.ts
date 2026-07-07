import { Highlight } from 'ngx-highlightjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { HERO_CODE_SNIPPET } from '../../data/hero-code-snippet';
import { WINDOW_ACTIONS } from './data/window-actions';
import { HeroCodeCard } from './hero-code-card';

describe('HeroCodeCard', () => {
  beforeEach(() => MockBuilder(HeroCodeCard).mock(Highlight));

  it('passes the code snippet to the highlighter', () => {
    MockRender(HeroCodeCard, { code: HERO_CODE_SNIPPET });

    const codeElement = ngMocks.find('code');

    expect(ngMocks.input(codeElement, 'highlight')).toBe(HERO_CODE_SNIPPET);
  });

  it('renders the expected window action labels for assistive technology', () => {
    const fixture = MockRender(HeroCodeCard, { code: HERO_CODE_SNIPPET });
    const nativeElement = fixture.nativeElement as HTMLElement;
    const actionElements = nativeElement.querySelectorAll('.hero-code-card__window-action');
    const actionLabels = Array.from(actionElements).map((element) => element.getAttribute('aria-label'));

    expect(actionLabels).toEqual(WINDOW_ACTIONS.map((action) => action.label));
  });
});
