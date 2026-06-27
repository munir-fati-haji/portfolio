import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ContactLink } from '../../models/contact-link.model';

@Component({
  selector: 'app-contact-link-card',
  imports: [MatIconModule],
  templateUrl: './contact-link-card.html',
})
export class ContactLinkCard {
  public readonly link = input.required<ContactLink>();
  public readonly isCopied = input.required<boolean>();
  public readonly copyRequested = output<ContactLink>();
}
