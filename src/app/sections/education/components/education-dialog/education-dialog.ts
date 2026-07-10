import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EducationItem } from '../../models/education-item.model';

@Component({
  selector: 'app-education-dialog',
  imports: [MatButtonModule, MatChipsModule, MatDialogModule, MatIconModule, MatListModule],
  templateUrl: './education-dialog.html',
  styleUrl: './education-dialog.scss',
})
export class EducationDialog {
  public readonly education = inject<EducationItem>(MAT_DIALOG_DATA);
}
