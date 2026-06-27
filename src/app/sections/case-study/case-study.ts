import { Component } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.html',
  styleUrl: './case-study.css',
})
export class CaseStudy {
  protected readonly steps = [
    'Problem framing: understand the existing manual process or research challenge before choosing tools.',
    'System design: define the data flow, core states, and user journey so implementation stays focused.',
    'Implementation: build iteratively, validate behavior, and keep the interface clear for real users.',
  ];
}
