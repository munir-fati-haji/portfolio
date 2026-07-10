import { Component } from '@angular/core';
import { MockBuilder, MockRender } from 'ng-mocks';

import { SectionContainer } from './section-container';

@Component({
  selector: 'app-test-host',
  imports: [SectionContainer],
  template: '<app-section-container><p class="projected-content">Projected content</p></app-section-container>',
})
class TestHost {}

describe('SectionContainer', () => {
  beforeEach(() => MockBuilder(TestHost).keep(SectionContainer));

  it('projects content through the host element', () => {
    const fixture = MockRender(TestHost);
    const nativeElement = fixture.nativeElement as HTMLElement;

    expect(nativeElement.querySelector('app-section-container')).toBeTruthy();
    expect(nativeElement.querySelector('.projected-content')?.textContent).toContain('Projected content');
  });
});
