import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { FOCUS_AREAS } from './data/focus-areas';
import { WORKING_ON_DESCRIPTION, WORKING_ON_EYEBROW, WORKING_ON_TITLE } from './data/working-on-copy';

@Component({
  selector: 'app-working-on',
  imports: [SectionHeader],
  templateUrl: './working-on.html',
})
export class WorkingOn {
  protected readonly eyebrow = WORKING_ON_EYEBROW;
  protected readonly title = WORKING_ON_TITLE;
  protected readonly description = WORKING_ON_DESCRIPTION;
  protected readonly focusAreas = FOCUS_AREAS;
}
