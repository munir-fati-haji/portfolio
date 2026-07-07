import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { CASE_STUDY_DESCRIPTION, CASE_STUDY_EYEBROW, CASE_STUDY_TITLE } from './data/case-study-copy';
import { CASE_STUDY_STEPS } from './data/case-study-steps';
import { CaseStudy } from './case-study';

describe('CaseStudy', () => {
  beforeEach(() => MockBuilder(CaseStudy).mock(SectionHeader));

  it('passes copy to the section header', () => {
    MockRender(CaseStudy);

    const sectionHeader = ngMocks.find(SectionHeader);

    expect(ngMocks.input(sectionHeader, 'eyebrow')).toBe(CASE_STUDY_EYEBROW);
    expect(ngMocks.input(sectionHeader, 'title')).toBe(CASE_STUDY_TITLE);
    expect(ngMocks.input(sectionHeader, 'description')).toBe(CASE_STUDY_DESCRIPTION);
  });

  it('renders each case study step in order', () => {
    const fixture = MockRender(CaseStudy);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    CASE_STUDY_STEPS.forEach((step, index) => {
      expect(text).toContain(`Step 0${String(index + 1)}`);
      expect(text).toContain(step);
    });
  });
});
