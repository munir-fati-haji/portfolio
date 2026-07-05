import { MockBuilder, MockRender } from 'ng-mocks';

import { SKILL_GROUPS } from '../../data/hero-skills-group';
import { HeroSkills } from './hero-skills';

describe('HeroSkills', () => {
  beforeEach(() => MockBuilder(HeroSkills));

  it('renders group titles and accessible skill buttons', () => {
    const fixture = MockRender(HeroSkills, { groups: SKILL_GROUPS });
    const text = fixture.nativeElement.textContent;

    SKILL_GROUPS.forEach((group) => expect(text).toContain(group.title));

    const firstSkill = SKILL_GROUPS[0].skills[0];
    const firstSkillButton = fixture.nativeElement.querySelector(`button[aria-label="${firstSkill.label}"]`);

    expect(firstSkillButton).toBeTruthy();
  });
});
