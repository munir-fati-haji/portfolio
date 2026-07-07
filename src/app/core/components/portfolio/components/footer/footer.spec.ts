import { signal } from '@angular/core';
import { MockBuilder, MockRender } from 'ng-mocks';

import { ThemeService } from '@core/services/theme/theme.service';
import { FOOTER_COPYRIGHT } from './data/footer-copyright';
import { FOOTER_LINKS } from './data/footer-links';
import { Footer } from './footer';

describe('Footer', () => {
  const themeService = {
    isDark: signal(true),
  };

  beforeEach(() => MockBuilder(Footer).provide({ provide: ThemeService, useValue: themeService }));

  it('renders copyright and footer links from data', () => {
    const fixture = MockRender(Footer);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    expect(text).toContain(FOOTER_COPYRIGHT);

    FOOTER_LINKS.forEach((link) => {
      const anchor = nativeElement.querySelector<HTMLAnchorElement>(`a[aria-label="${link.label}"]`);

      if (anchor === null) {
        throw new Error(`Footer link "${link.label}" was not found.`);
      }

      expect(anchor.href).toBe(link.href);
      expect(anchor.target).toBe(link.external ? '_blank' : '');
      expect(anchor.rel).toBe(link.external ? 'noreferrer' : '');
    });
  });
});
