import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { ExperienceCard } from './components/experience-card/experience-card';
import { EXPERIENCE_DESCRIPTION, EXPERIENCE_EYEBROW, EXPERIENCE_TITLE } from './data/experience-copy';
import { EXPERIENCE_ITEMS } from './data/experience-items';
import { EXPERIENCE_METRICS } from './data/experience-metrics';
import { Experience } from './experience';

describe('Experience', () => {
  beforeEach(() => MockBuilder(Experience).mock(SectionHeader).mock(ExperienceCard));

  it('passes copy to the section header', () => {
    MockRender(Experience);

    const sectionHeader = ngMocks.find(SectionHeader);

    expect(ngMocks.input(sectionHeader, 'eyebrow')).toBe(EXPERIENCE_EYEBROW);
    expect(ngMocks.input(sectionHeader, 'title')).toBe(EXPERIENCE_TITLE);
    expect(ngMocks.input(sectionHeader, 'description')).toBe(EXPERIENCE_DESCRIPTION);
  });

  it('renders metrics and experience cards from data', () => {
    const fixture = MockRender(Experience);
    const text = fixture.nativeElement.textContent;
    const cards = ngMocks.findAll(ExperienceCard);

    EXPERIENCE_METRICS.forEach((metric) => {
      expect(text).toContain(metric.value);
      expect(text).toContain(metric.label);
    });

    expect(cards).toHaveLength(EXPERIENCE_ITEMS.length);
    expect(ngMocks.input(cards[0], 'experience')).toEqual(EXPERIENCE_ITEMS[0]);
    expect(ngMocks.input(cards[0], 'index')).toBe(0);
  });
});
