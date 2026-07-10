import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SkillCategory } from '../../models/skill-category.model';

@Component({
  selector: 'app-skill-dialog',
  imports: [MatButtonModule, MatChipsModule, MatDialogModule, MatIconModule],
  templateUrl: './skill-dialog.html',
  styleUrl: './skill-dialog.scss',
})
export class SkillDialog {
  public readonly category = inject<SkillCategory>(MAT_DIALOG_DATA);
}
