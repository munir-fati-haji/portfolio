import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { PROJECTS, PROJECTS_DESCRIPTION, PROJECTS_EYEBROW, PROJECTS_TITLE } from './data';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly eyebrow = PROJECTS_EYEBROW;
  protected readonly title = PROJECTS_TITLE;
  protected readonly description = PROJECTS_DESCRIPTION;
  protected readonly projects = PROJECTS;
}
