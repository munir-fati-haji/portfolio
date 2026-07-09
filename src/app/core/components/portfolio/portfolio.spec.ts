import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { vi } from 'vitest';

import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Portfolio } from './portfolio';

@Component({
  selector: 'app-content',
  template: '',
})
class ContentStub {
  public static activeSectionId = 'hero';
  public static scrollToSection = vi.fn();

  public readonly scrollElement = document.createElement('div');

  public getActiveSectionId(): string {
    return ContentStub.activeSectionId;
  }

  public scrollToSection(sectionId: string): void {
    ContentStub.scrollToSection(sectionId);
  }
}

const routerEvents = new Subject<NavigationEnd>();
const routeData = { sectionId: 'hero' };
const router = {
  events: routerEvents,
  navigateByUrl: vi.fn(),
  url: '/',
};

const waitFor = (duration: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

beforeEach(() =>
  MockBuilder(Portfolio)
    .mock(Navbar)
    .replace(Content, ContentStub)
    .mock(Footer)
    .provide({ provide: Router, useValue: router })
    .provide({
      provide: ActivatedRoute,
      useValue: { snapshot: { data: routeData } },
    }),
);

beforeEach(() => {
  ContentStub.activeSectionId = 'hero';
  ContentStub.scrollToSection.mockClear();
  router.navigateByUrl.mockClear();
  router.url = '/';
  routeData.sectionId = 'hero';
});

describe('Portfolio', () => {
  it('renders the portfolio shell components', () => {
    MockRender(Portfolio);

    expect(ngMocks.find(Navbar)).toBeTruthy();
    expect(ngMocks.find(ContentStub)).toBeTruthy();
    expect(ngMocks.find(Footer)).toBeTruthy();
  });
});

describe('Portfolio route synchronization', () => {
  it('scrolls to the active route section when the route changes', async () => {
    MockRender(Portfolio);

    routeData.sectionId = 'about';
    router.url = '/about';
    routerEvents.next(new NavigationEnd(1, '/about', '/about'));
    await waitFor(20);

    expect(ContentStub.scrollToSection).toHaveBeenCalledWith('about');
  });

  it('updates the route when scrolling changes the active section', async () => {
    MockRender(Portfolio);

    ContentStub.activeSectionId = 'contact';
    window.dispatchEvent(new Event('scroll'));
    await waitFor(150);

    expect(router.navigateByUrl).toHaveBeenCalledWith('/contact', { replaceUrl: true });
  });
});
