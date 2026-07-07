import { MockBuilder, MockRender } from 'ng-mocks';

import { AboutMe } from '@sections/about-me/about-me';
import { CaseStudy } from '@sections/case-study/case-study';
import { Contact } from '@sections/contact/contact';
import { Education } from '@sections/education/education';
import { Experience } from '@sections/experience/experience';
import { Hero } from '@sections/hero/hero';
import { Projects } from '@sections/projects/projects';
import { Skills } from '@sections/skills/skills';
import { WorkingOn } from '@sections/working-on/working-on';
import { Content } from './content';

describe('Content', () => {
  beforeEach(() =>
    MockBuilder(Content)
      .mock(Hero)
      .mock(AboutMe)
      .mock(Experience)
      .mock(Education)
      .mock(Skills)
      .mock(Projects)
      .mock(WorkingOn)
      .mock(CaseStudy)
      .mock(Contact),
  );

  it('renders portfolio sections in route order', () => {
    const fixture = MockRender(Content);
    const nativeElement = fixture.point.nativeElement as HTMLElement;
    const sectionIds = Array.from(nativeElement.children).map((element) => element.getAttribute('data-section-id'));

    expect(sectionIds).toEqual([
      'hero',
      'about',
      'experience',
      'education',
      'skills',
      'projects',
      'working-on',
      'case-study',
      'contact',
    ]);
  });

  it('exposes the host element as the scroll element', () => {
    const fixture = MockRender(Content);
    const nativeElement = fixture.point.nativeElement as HTMLElement;

    expect(fixture.point.componentInstance.scrollElement).toBe(nativeElement);
  });
});
