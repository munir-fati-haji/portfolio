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

  it('projects content into the section container layout', () => {
    const fixture = MockRender(TestHost);
    const nativeElement = fixture.nativeElement as HTMLElement;

    expect(nativeElement.querySelector('.section-container__section')).toBeTruthy();
    expect(nativeElement.querySelector('.section-container__content')).toBeTruthy();
    expect(nativeElement.querySelector('.projected-content')?.textContent).toContain('Projected content');
  });
});
