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

const settleInitialScroll = async (): Promise<void> => {
  const content = ngMocks.findInstance(ContentStub);

  ContentStub.activeSectionId = 'hero';
  content.scrollElement.dispatchEvent(new Event('scroll'));
  await waitFor(100);
};

describe('Portfolio', () => {
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

  it('renders the portfolio shell components', () => {
    MockRender(Portfolio);

    expect(ngMocks.find(Navbar)).toBeTruthy();
    expect(ngMocks.find(ContentStub)).toBeTruthy();
    expect(ngMocks.find(Footer)).toBeTruthy();
  });

  it('does not replace a route navigation with a stale scroll section', async () => {
    MockRender(Portfolio);
    await settleInitialScroll();

    routeData.sectionId = 'about';
    router.url = '/about';
    routerEvents.next(new NavigationEnd(1, '/about', '/about'));
    await waitFor(20);

    const content = ngMocks.findInstance(ContentStub);
    ContentStub.activeSectionId = 'hero';
    content.scrollElement.dispatchEvent(new Event('scroll'));
    await waitFor(100);

    expect(ContentStub.scrollToSection).toHaveBeenCalledWith('about');
    expect(router.navigateByUrl).not.toHaveBeenCalledWith('/', { replaceUrl: true });
  });

  it('updates the route for user-driven scrolling', async () => {
    MockRender(Portfolio);
    await settleInitialScroll();

    const content = ngMocks.findInstance(ContentStub);
    ContentStub.activeSectionId = 'contact';
    content.scrollElement.dispatchEvent(new Event('scroll'));
    await waitFor(100);

    expect(router.navigateByUrl).toHaveBeenCalledWith('/contact', { replaceUrl: true });
  });
});
