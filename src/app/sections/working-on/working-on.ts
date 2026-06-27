import { Component } from '@angular/core';

@Component({
  selector: 'app-working-on',
  templateUrl: './working-on.html',
  styleUrl: './working-on.css',
})
export class WorkingOn {
  protected readonly focusAreas = [
    'Polishing this portfolio into a complete product-like experience.',
    'Improving Angular architecture, component composition, and reusable UI patterns.',
    'Strengthening full-stack project workflows from idea to deployed application.',
  ];
}
