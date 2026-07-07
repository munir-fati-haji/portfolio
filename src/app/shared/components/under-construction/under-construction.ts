import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-under-construction',
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './under-construction.html',
  styleUrl: './under-construction.scss',
})
export class UnderConstruction {
  public readonly sectionName = input.required<string>();
}
