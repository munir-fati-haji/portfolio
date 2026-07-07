import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { CertificateCard } from './components/certificate-card/certificate-card';
import { EducationCard } from './components/education-card/education-card';
import { EDUCATION_CERTIFICATES } from './data/education-certificates';
import { EDUCATION_DESCRIPTION, EDUCATION_EYEBROW, EDUCATION_TITLE } from './data/education-copy';
import { EDUCATION_ITEMS } from './data/education-items';
import { WUT_AMBASSADOR_PROFILE_URL } from './data/education-links';
import { Education } from './education';

describe('Education', () => {
  beforeEach(() => MockBuilder(Education).mock(SectionHeader).mock(EducationCard).mock(CertificateCard));

  it('passes copy to the section header', () => {
    MockRender(Education);

    const sectionHeader = ngMocks.find(SectionHeader);

    expect(ngMocks.input(sectionHeader, 'eyebrow')).toBe(EDUCATION_EYEBROW);
    expect(ngMocks.input(sectionHeader, 'title')).toBe(EDUCATION_TITLE);
    expect(ngMocks.input(sectionHeader, 'description')).toBe(EDUCATION_DESCRIPTION);
  });

  it('renders education and certificate cards from data', () => {
    MockRender(Education);

    const educationCards = ngMocks.findAll(EducationCard);
    const certificateCards = ngMocks.findAll(CertificateCard);

    expect(educationCards).toHaveLength(EDUCATION_ITEMS.length);
    expect(ngMocks.input(educationCards[0], 'education')).toEqual(EDUCATION_ITEMS[0]);
    expect(certificateCards).toHaveLength(EDUCATION_CERTIFICATES.length);
    expect(ngMocks.input(certificateCards[0], 'certificate')).toEqual(EDUCATION_CERTIFICATES[0]);
  });

  it('links to the official ambassador profile', () => {
    const fixture = MockRender(Education);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const link = nativeElement.querySelector<HTMLAnchorElement>('.education__ambassador-link');

    if (link === null) {
      throw new Error('Education ambassador link was not found.');
    }

    expect(link.href).toBe(WUT_AMBASSADOR_PROFILE_URL);
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noreferrer');
  });
});
