import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { ProjectItem } from '../../models/project-item.model';

@Component({
  selector: 'app-project-card',
  imports: [MatCardModule, MatChipsModule, MatListModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: { class: 'block' },
})
export class ProjectCard {
  public readonly project = input.required<ProjectItem>();
}
