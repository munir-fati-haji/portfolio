import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { HeroSkills } from './components/hero-skills/hero-skills';
import { SKILL_GROUPS } from './data/hero-skills-group';
import { HeroIntro } from './hero-intro';

describe('HeroIntro', () => {
  beforeEach(() => MockBuilder(HeroIntro).mock(HeroSkills));

  it('renders supplied profile text', () => {
    const fixture = MockRender(HeroIntro, {
      name: 'Munir',
      role: 'Frontend Developer',
      description: 'Builds Angular applications.',
      skills: SKILL_GROUPS,
    });

    expect(fixture.nativeElement.textContent).toContain('Munir');
    expect(fixture.nativeElement.textContent).toContain('Frontend Developer');
    expect(fixture.nativeElement.textContent).toContain('Builds Angular applications.');
  });

  it('passes skill groups to the skills component', () => {
    MockRender(HeroIntro, {
      name: 'Munir',
      role: 'Frontend Developer',
      description: 'Builds Angular applications.',
      skills: SKILL_GROUPS,
    });

    expect(ngMocks.input(ngMocks.find(HeroSkills), 'groups')).toEqual(SKILL_GROUPS);
  });
});
