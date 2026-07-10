import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ProjectItem } from '../../models/project-item.model';
import { ProjectDialog } from '../project-dialog/project-dialog';

@Component({
  selector: 'app-project-card',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatIconModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: { class: 'block' },
})
export class ProjectCard {
  public readonly project = input.required<ProjectItem>();
  private readonly dialog = inject(MatDialog);

  public openDetails(): void {
    this.dialog.open(ProjectDialog, {
      autoFocus: false,
      data: this.project(),
      maxHeight: 'calc(100dvh - 2rem)',
      maxWidth: 'calc(100vw - 2rem)',
      panelClass: 'portfolio-dialog',
      width: '44rem',
    });
  }
}
