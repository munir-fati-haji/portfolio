import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
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
  public readonly scrollElement = document.createElement('div');

  public getActiveSectionId(): string {
    return 'hero';
  }

  public scrollToSection(): void {}
}

describe('Portfolio', () => {
  const router = {
    events: EMPTY,
    navigateByUrl: vi.fn(),
    url: '/',
  };

  beforeEach(() => {
    router.navigateByUrl.mockClear();

    return MockBuilder(Portfolio)
      .mock(Navbar)
      .replace(Content, ContentStub)
      .mock(Footer)
      .provide({ provide: Router, useValue: router })
      .provide({
        provide: ActivatedRoute,
        useValue: { snapshot: { data: { sectionId: 'hero' } } },
      });
  });

  it('renders the portfolio shell components', () => {
    MockRender(Portfolio);

    expect(ngMocks.find(Navbar)).toBeTruthy();
    expect(ngMocks.find(ContentStub)).toBeTruthy();
    expect(ngMocks.find(Footer)).toBeTruthy();
  });
});
