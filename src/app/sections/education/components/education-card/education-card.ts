import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EducationItem } from '../../models/education-item.model';
import { EducationDialog } from '../education-dialog/education-dialog';

@Component({
  selector: 'app-education-card',
  imports: [MatButtonModule, MatCardModule, MatDialogModule, MatIconModule],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
  host: { class: 'block' },
})
export class EducationCard {
  public readonly education = input.required<EducationItem>();
  private readonly dialog = inject(MatDialog);

  public openDetails(): void {
    this.dialog.open(EducationDialog, {
      autoFocus: false,
      data: this.education(),
      maxHeight: 'calc(100dvh - 2rem)',
      maxWidth: 'calc(100vw - 2rem)',
      panelClass: 'portfolio-dialog',
      width: '44rem',
    });
  }
}
