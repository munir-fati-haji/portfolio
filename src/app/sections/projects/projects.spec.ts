import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { ProjectCard } from './components/project-card/project-card';
import { PROJECTS } from './data/projects';
import { PROJECTS_DESCRIPTION, PROJECTS_EYEBROW, PROJECTS_TITLE } from './data/projects-copy';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(() => {
    return MockBuilder(Projects).mock(ProjectCard).mock(SectionHeader);
  });

  it('renders project cards from project data', () => {
    MockRender(Projects);

    const projectCards = ngMocks.findAll(ProjectCard);

    expect(projectCards).toHaveLength(PROJECTS.length);
    expect(ngMocks.input(projectCards[0], 'project')).toEqual(PROJECTS[0]);
  });

  it('passes copy to the section header', () => {
    MockRender(Projects);

    const sectionHeader = ngMocks.find(SectionHeader);

    expect(ngMocks.input(sectionHeader, 'eyebrow')).toBe(PROJECTS_EYEBROW);
    expect(ngMocks.input(sectionHeader, 'title')).toBe(PROJECTS_TITLE);
    expect(ngMocks.input(sectionHeader, 'description')).toBe(PROJECTS_DESCRIPTION);
  });
});
