import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedChipButton } from '../../../../shared/components/shared-chip-button/shared-chip-button';
import { EducationCertificate } from '../../models/education-certificate.model';

@Component({
  selector: 'app-certificate-card',
  imports: [MatIconModule, SharedChipButton],
  host: { class: 'block' },
  templateUrl: './certificate-card.html',
})
export class CertificateCard {
  public readonly certificate = input.required<EducationCertificate>();
}
