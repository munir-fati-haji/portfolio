import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { SharedChipButton } from '@shared/components/shared-chip-button/shared-chip-button';
import { SkillCategoryCard } from './components/skill-category-card/skill-category-card';
import { SKILL_CATEGORIES } from './data/skill-categories';
import { SKILL_STATS } from './data/skill-stats';
import { SKILLS_DESCRIPTION, SKILLS_EYEBROW, SKILLS_TITLE } from './data/skills-copy';
import { Skills } from './skills';

describe('Skills', () => {
  beforeEach(() => MockBuilder(Skills).mock(SectionHeader).mock(SharedChipButton).mock(SkillCategoryCard));

  it('passes copy to the section header', () => {
    MockRender(Skills);

    const sectionHeader = ngMocks.find(SectionHeader);

    expect(ngMocks.input(sectionHeader, 'eyebrow')).toBe(SKILLS_EYEBROW);
    expect(ngMocks.input(sectionHeader, 'title')).toBe(SKILLS_TITLE);
    expect(ngMocks.input(sectionHeader, 'description')).toBe(SKILLS_DESCRIPTION);
  });

  it('renders stats, legend chips, and category cards from data', () => {
    const fixture = MockRender(Skills);
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;
    const legendChips = ngMocks.findAll(SharedChipButton);
    const categoryCards = ngMocks.findAll(SkillCategoryCard);

    SKILL_STATS.forEach((stat) => {
      expect(text).toContain(stat.value);
      expect(text).toContain(stat.label);
    });

    expect(ngMocks.input(legendChips[0], 'label')).toBe('Advanced');
    expect(ngMocks.input(legendChips[1], 'label')).toBe('Strong');
    expect(ngMocks.input(legendChips[2], 'label')).toBe('Practical');
    expect(ngMocks.input(legendChips[3], 'label')).toBe('Basic');
    expect(categoryCards).toHaveLength(SKILL_CATEGORIES.length);
    expect(ngMocks.input(categoryCards[0], 'category')).toEqual(SKILL_CATEGORIES[0]);
  });
});
