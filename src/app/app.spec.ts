import { RouterOutlet } from '@angular/router';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { App } from './app';

describe('App', () => {
  beforeEach(() => MockBuilder(App).mock(RouterOutlet));

  it('renders the router outlet as the application shell', () => {
    MockRender(App);

    expect(ngMocks.find(RouterOutlet)).toBeTruthy();
  });
});
