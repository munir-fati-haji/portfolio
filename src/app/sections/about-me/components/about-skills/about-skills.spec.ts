import { MockBuilder, MockRender } from 'ng-mocks';

import { AboutSkills } from './about-skills';

describe('AboutSkills', () => {
  beforeEach(() => MockBuilder(AboutSkills));

  it('renders one Material chip per skill', () => {
    const skills = ['Angular', 'TypeScript', 'RxJS'];
    const fixture = MockRender(AboutSkills, { skills });
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;
    const chips = nativeElement.querySelectorAll('mat-chip');

    expect(chips).toHaveLength(skills.length);

    skills.forEach((skill) => {
      expect(text).toContain(skill);
    });
  });
});
