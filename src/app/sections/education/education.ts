import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { CertificateCard } from './components/certificate-card/certificate-card';
import { EducationCard } from './components/education-card/education-card';
import { EDUCATION_CERTIFICATES } from './data/education-certificates';
import { EDUCATION_DESCRIPTION, EDUCATION_EYEBROW, EDUCATION_TITLE } from './data/education-copy';
import { EDUCATION_ITEMS } from './data/education-items';
import { WUT_AMBASSADOR_PROFILE_URL } from './data/education-links';

@Component({
  selector: 'app-education',
  imports: [CertificateCard, EducationCard, SectionHeader],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  public readonly ambassadorProfileUrl = WUT_AMBASSADOR_PROFILE_URL;
  public readonly eyebrow = EDUCATION_EYEBROW;
  public readonly title = EDUCATION_TITLE;
  public readonly description = EDUCATION_DESCRIPTION;
  public readonly educationItems = EDUCATION_ITEMS;
  public readonly certificates = EDUCATION_CERTIFICATES;
}
