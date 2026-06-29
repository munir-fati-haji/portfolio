import { Component, input } from '@angular/core';
import { SharedChipButton } from '../../../../shared/components/shared-chip-button/shared-chip-button';
import { ProjectItem } from '../../models/project-item.model';

@Component({
  selector: 'app-project-card',
  imports: [SharedChipButton],
  host: { class: 'block' },
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  public readonly project = input.required<ProjectItem>();
}
