import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { SectionHeader } from '@shared/components/section-header/section-header';
import { CASE_STUDY_DESCRIPTION, CASE_STUDY_EYEBROW, CASE_STUDY_TITLE } from './data/case-study-copy';
import { CASE_STUDY_STEPS } from './data/case-study-steps';

@Component({
  selector: 'app-case-study',
  imports: [MatCardModule, MatStepperModule, SectionHeader],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  protected readonly eyebrow = CASE_STUDY_EYEBROW;
  protected readonly title = CASE_STUDY_TITLE;
  protected readonly description = CASE_STUDY_DESCRIPTION;
  protected readonly steps = CASE_STUDY_STEPS;
}
