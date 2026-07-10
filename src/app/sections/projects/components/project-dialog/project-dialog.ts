import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProjectItem } from '../../models/project-item.model';

@Component({
  selector: 'app-project-dialog',
  imports: [MatButtonModule, MatChipsModule, MatDialogModule, MatIconModule, MatListModule],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})
export class ProjectDialog {
  public readonly project = inject<ProjectItem>(MAT_DIALOG_DATA);
}
