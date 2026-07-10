import { Highlight } from 'ngx-highlightjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { HERO_CODE_SNIPPET } from '../../data/hero-code-snippet';
import { HeroCodeCard } from './hero-code-card';

describe('HeroCodeCard', () => {
  beforeEach(() => MockBuilder(HeroCodeCard).mock(Highlight));

  it('passes the code snippet to the highlighter', () => {
    MockRender(HeroCodeCard, { code: HERO_CODE_SNIPPET });

    const codeElement = ngMocks.find('code');

    expect(ngMocks.input(codeElement, 'highlight')).toBe(HERO_CODE_SNIPPET);
  });

  it('renders the code preview without a card title or subtitle', () => {
    const fixture = MockRender(HeroCodeCard, { code: HERO_CODE_SNIPPET });
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    expect(nativeElement.querySelector('mat-card-header')).toBeNull();
    expect(nativeElement.querySelector('mat-card-title')).toBeNull();
    expect(nativeElement.querySelector('mat-card-subtitle')).toBeNull();
    expect(nativeElement.querySelector('code')).not.toBeNull();
    expect(text).not.toContain('Portfolio component preview');
  });
});
