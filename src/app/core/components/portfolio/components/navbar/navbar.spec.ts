import { signal } from '@angular/core';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { vi } from 'vitest';

import { ThemeService } from '@core/services/theme/theme.service';
import { MobileNavbar } from './components/mobile-navbar/mobile-navbar';
import { NAVBAR_BRAND } from './data/navbar-brand';
import { NAVBAR_LINKS } from './data/navbar-links';
import { Navbar } from './navbar';

describe('Navbar', () => {
  const themeService = {
    isDark: signal(true),
    toggleIcon: signal('light_mode'),
    toggleLabel: signal('Switch to light theme'),
    toggleTheme: vi.fn(),
  };

  beforeEach(() => {
    themeService.toggleTheme.mockClear();

    return MockBuilder(Navbar).mock(MobileNavbar).provide({ provide: ThemeService, useValue: themeService });
  });

  it('renders brand and navigation links from data', () => {
    const fixture = MockRender(Navbar);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    expect(text).toContain(NAVBAR_BRAND);
    NAVBAR_LINKS.forEach((link) => {
      expect(text).toContain(link.label);
    });
  });

  it('passes mobile menu data to the mobile navbar', () => {
    MockRender(Navbar);

    const mobileNavbar = ngMocks.find(MobileNavbar);

    expect(ngMocks.input(mobileNavbar, 'brand')).toBe(NAVBAR_BRAND);
    expect(ngMocks.input(mobileNavbar, 'links')).toEqual(NAVBAR_LINKS);
    expect(ngMocks.input(mobileNavbar, 'isOpen')).toBe(false);
  });

  it('toggles the theme when the theme button is clicked', () => {
    const fixture = MockRender(Navbar);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const themeButton = nativeElement.querySelector<HTMLButtonElement>('.navbar__theme-toggle');

    if (themeButton === null) {
      throw new Error('Navbar theme button was not found.');
    }

    themeButton.click();

    expect(themeService.toggleTheme).toHaveBeenCalledOnce();
  });
});
