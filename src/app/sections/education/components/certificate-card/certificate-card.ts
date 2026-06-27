import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EducationCertificate } from '../../models/education-certificate.model';

@Component({
  selector: 'app-certificate-card',
  imports: [MatIconModule],
  templateUrl: './certificate-card.html',
})
export class CertificateCard {
  public readonly certificate = input.required<EducationCertificate>();
}
