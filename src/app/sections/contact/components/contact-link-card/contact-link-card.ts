import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContactLink } from '../../models/contact-link.model';

@Component({
  selector: 'app-contact-link-card',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './contact-link-card.html',
  styleUrl: './contact-link-card.scss',
  host: { class: 'block' },
})
export class ContactLinkCard {
  public readonly link = input.required<ContactLink>();
  public readonly isCopied = input.required<boolean>();
  public readonly copyRequested = output<ContactLink>();
}
