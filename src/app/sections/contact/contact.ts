import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { ContactLinkCard } from './components/contact-link-card/contact-link-card';
import { CONTACT_DESCRIPTION, CONTACT_EYEBROW, CONTACT_TITLE } from './data/contact-copy';
import { CONTACT_LINKS } from './data/contact-links';
import { ContactLink } from './models/contact-link.model';

@Component({
  selector: 'app-contact',
  imports: [ContactLinkCard, RouterLink, MatButtonModule, SectionHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly eyebrow = CONTACT_EYEBROW;
  protected readonly title = CONTACT_TITLE;
  protected readonly description = CONTACT_DESCRIPTION;
  protected readonly contactLinks = CONTACT_LINKS;
  protected readonly copiedLabel = signal<string | null>(null);

  protected async copyContactValue(link: ContactLink): Promise<void> {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(link.value);
    } else {
      this.copyWithFallback(link.value);
    }

    this.copiedLabel.set(link.label);

    window.setTimeout(() => {
      if (this.copiedLabel() === link.label) {
        this.copiedLabel.set(null);
      }
    }, 1600);
  }

  private copyWithFallback(value: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = value;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}
