import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { FOCUS_AREAS } from './data/focus-areas';
import { WORKING_ON_DESCRIPTION, WORKING_ON_EYEBROW, WORKING_ON_TITLE } from './data/working-on-copy';
import { WorkingOn } from './working-on';

describe('WorkingOn', () => {
  beforeEach(() => MockBuilder(WorkingOn).mock(SectionHeader));

  it('passes copy to the section header', () => {
    MockRender(WorkingOn);

    const sectionHeader = ngMocks.find(SectionHeader);

    expect(ngMocks.input(sectionHeader, 'eyebrow')).toBe(WORKING_ON_EYEBROW);
    expect(ngMocks.input(sectionHeader, 'title')).toBe(WORKING_ON_TITLE);
    expect(ngMocks.input(sectionHeader, 'description')).toBe(WORKING_ON_DESCRIPTION);
  });

  it('renders each focus area', () => {
    const fixture = MockRender(WorkingOn);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    FOCUS_AREAS.forEach((area) => {
      expect(text).toContain(area);
    });
  });
});
