import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceItem } from '../../models/experience-item.model';
import { ExperienceDialog } from '../experience-dialog/experience-dialog';

@Component({
  selector: 'app-experience-card',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatIconModule],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
  host: { class: 'block' },
})
export class ExperienceCard {
  public readonly experience = input.required<ExperienceItem>();
  private readonly dialog = inject(MatDialog);

  public openDetails(): void {
    this.dialog.open(ExperienceDialog, {
      autoFocus: false,
      data: this.experience(),
      maxWidth: 'calc(100vw - 2rem)',
      panelClass: 'portfolio-dialog',
      width: '44rem',
    });
  }
}
