import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-under-construction',
  imports: [MatIconModule],
  templateUrl: './under-construction.html',
})
export class UnderConstruction {
  public readonly sectionName = input.required<string>();
}
