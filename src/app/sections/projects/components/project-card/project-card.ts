import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ProjectItem } from '../../models/project-item.model';

@Component({
  selector: 'app-project-card',
  imports: [MatCardModule, MatChipsModule],
  host: { class: 'block' },
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  public readonly project = input.required<ProjectItem>();
}
