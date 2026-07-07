import { signal } from '@angular/core';
import { MockBuilder, MockRender } from 'ng-mocks';
import { vi } from 'vitest';

import { ThemeService } from '@core/services/theme/theme.service';
import { FOOTER_COPYRIGHT } from './data/footer-copyright';
import { FOOTER_LINKS } from './data/footer-links';
import { Footer } from './footer';

describe('Footer', () => {
  const themeService = {
    isDark: signal(true),
  };

  beforeEach(() => MockBuilder(Footer).provide({ provide: ThemeService, useValue: themeService }));

  it('renders copyright and footer Material icon buttons from data', () => {
    const fixture = MockRender(Footer);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    expect(text).toContain(FOOTER_COPYRIGHT);

    FOOTER_LINKS.forEach((link) => {
      const button = nativeElement.querySelector<HTMLButtonElement>(`button[aria-label="${link.label}"]`);

      if (button === null) {
        throw new Error(`Footer button "${link.label}" was not found.`);
      }
    });
  });

  it('opens footer links from Material icon button actions', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const fixture = MockRender(Footer);
    const nativeElement = fixture.nativeElement as HTMLElement;

    FOOTER_LINKS.forEach((link) => {
      const button = nativeElement.querySelector<HTMLButtonElement>(`button[aria-label="${link.label}"]`);

      if (button === null) {
        throw new Error(`Footer button "${link.label}" was not found.`);
      }

      button.click();

      expect(openSpy).toHaveBeenCalledWith(link.href, '_blank', 'noopener,noreferrer');
    });
  });
});
