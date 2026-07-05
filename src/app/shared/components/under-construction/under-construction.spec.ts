import { MockBuilder, MockRender } from 'ng-mocks';

import { UnderConstruction } from './under-construction';

describe('UnderConstruction', () => {
  beforeEach(() => MockBuilder(UnderConstruction));

  it('renders the supplied section name in the title and description', () => {
    const fixture = MockRender(UnderConstruction, { sectionName: 'Projects' });
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Projects is under construction');
    expect(text).toContain('I am still working on the Projects section.');
  });
});
