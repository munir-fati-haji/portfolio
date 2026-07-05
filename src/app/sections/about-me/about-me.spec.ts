import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionContainer } from '@shared/components/section-container/section-container';
import { AboutHighlights } from './components/about-highlights/about-highlights';
import { AboutIntro } from './components/about-intro/about-intro';
import { AboutSkills } from './components/about-skills/about-skills';
import { ABOUT_DESCRIPTION, ABOUT_EYEBROW, ABOUT_SECOND_DESCRIPTION, ABOUT_TITLE } from './data/about-copy';
import { ABOUT_HIGHLIGHTS } from './data/about-highlights';
import { ABOUT_SKILLS } from './data/about-skills';
import { AboutMe } from './about-me';

describe('AboutMe', () => {
  beforeEach(() => MockBuilder(AboutMe).mock(SectionContainer).mock(AboutIntro).mock(AboutSkills).mock(AboutHighlights));

  it('passes profile copy to the intro', () => {
    MockRender(AboutMe);

    const intro = ngMocks.find(AboutIntro);

    expect(ngMocks.input(intro, 'eyebrow')).toBe(ABOUT_EYEBROW);
    expect(ngMocks.input(intro, 'title')).toBe(ABOUT_TITLE);
    expect(ngMocks.input(intro, 'description')).toBe(ABOUT_DESCRIPTION);
    expect(ngMocks.input(intro, 'secondDescription')).toBe(ABOUT_SECOND_DESCRIPTION);
  });

  it('passes skills and highlights to their sections', () => {
    MockRender(AboutMe);

    expect(ngMocks.input(ngMocks.find(AboutSkills), 'skills')).toEqual(ABOUT_SKILLS);
    expect(ngMocks.input(ngMocks.find(AboutHighlights), 'highlights')).toEqual(ABOUT_HIGHLIGHTS);
  });
});
