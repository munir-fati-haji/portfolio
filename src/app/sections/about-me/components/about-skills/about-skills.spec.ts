import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SharedChipButton } from '@shared/components/shared-chip-button/shared-chip-button';
import { AboutSkills } from './about-skills';

describe('AboutSkills', () => {
  beforeEach(() => MockBuilder(AboutSkills).mock(SharedChipButton));

  it('renders one chip per skill with the configured chip styling', () => {
    const skills = ['Angular', 'TypeScript', 'RxJS'];

    MockRender(AboutSkills, { skills });

    const chips = ngMocks.findAll(SharedChipButton);

    expect(chips).toHaveLength(skills.length);
    expect(ngMocks.input(chips[0], 'label')).toBe(skills[0]);
    expect(ngMocks.input(chips[0], 'size')).toBe('md');
    expect(ngMocks.input(chips[0], 'variant')).toBe('cyan');
  });
});
