import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { CertificateCard } from './components/certificate-card/certificate-card';
import { EducationCard } from './components/education-card/education-card';
import {
  EDUCATION_CERTIFICATES,
  EDUCATION_DESCRIPTION,
  EDUCATION_EYEBROW,
  EDUCATION_ITEMS,
  EDUCATION_TITLE,
} from './data';

@Component({
  selector: 'app-education',
  imports: [CertificateCard, EducationCard, SectionHeader],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  public readonly eyebrow = EDUCATION_EYEBROW;
  public readonly title = EDUCATION_TITLE;
  public readonly description = EDUCATION_DESCRIPTION;
  public readonly educationItems = EDUCATION_ITEMS;
  public readonly certificates = EDUCATION_CERTIFICATES;
}
