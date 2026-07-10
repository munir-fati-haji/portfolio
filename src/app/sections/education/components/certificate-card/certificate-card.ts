import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EducationCertificate } from '../../models/education-certificate.model';

@Component({
  selector: 'app-certificate-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './certificate-card.html',
  styleUrl: './certificate-card.scss',
  host: { class: 'block' },
})
export class CertificateCard {
  public readonly certificate = input.required<EducationCertificate>();
}
