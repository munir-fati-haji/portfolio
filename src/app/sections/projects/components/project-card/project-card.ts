import { Component, input } from '@angular/core';
import { ProjectItem } from '../../models/project-item.model';

@Component({
  selector: 'app-project-card',
  host: { class: 'block' },
  templateUrl: './project-card.html',
})
export class ProjectCard {
  public readonly project = input.required<ProjectItem>();
}
