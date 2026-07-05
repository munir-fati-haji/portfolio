import { Component } from '@angular/core';
import { MockBuilder, MockRender } from 'ng-mocks';

import { SectionContainer } from './section-container';

@Component({
  imports: [SectionContainer],
  template: '<app-section-container><p class="projected-content">Projected content</p></app-section-container>',
})
class TestHost {}

describe('SectionContainer', () => {
  beforeEach(() => MockBuilder(TestHost).keep(SectionContainer));

  it('projects content into the section container layout', () => {
    const fixture = MockRender(TestHost);

    expect(fixture.nativeElement.querySelector('.section-container__section')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.section-container__content')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.projected-content')?.textContent).toContain('Projected content');
  });
});
