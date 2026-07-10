import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SkillCategory } from '../../models/skill-category.model';
import { SkillDialog } from '../skill-dialog/skill-dialog';

@Component({
  selector: 'app-skill-category-card',
  imports: [MatButtonModule, MatCardModule, MatDialogModule, MatIconModule],
  templateUrl: './skill-category-card.html',
  styleUrl: './skill-category-card.scss',
  host: { class: 'block' },
})
export class SkillCategoryCard {
  public readonly category = input.required<SkillCategory>();
  private readonly dialog = inject(MatDialog);

  public openDetails(): void {
    this.dialog.open(SkillDialog, {
      autoFocus: false,
      data: this.category(),
      maxHeight: 'calc(100dvh - 2rem)',
      maxWidth: 'calc(100vw - 2rem)',
      panelClass: 'portfolio-dialog',
      width: '44rem',
    });
  }
}
