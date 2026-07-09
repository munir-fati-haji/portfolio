import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-experience-dialog',
  imports: [MatButtonModule, MatChipsModule, MatDialogModule, MatIconModule, MatListModule, NgOptimizedImage],
  templateUrl: './experience-dialog.html',
  styleUrl: './experience-dialog.scss',
})
export class ExperienceDialog {
  public readonly experience = inject<ExperienceItem>(MAT_DIALOG_DATA);
}
