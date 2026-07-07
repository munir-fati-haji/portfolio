import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { filter, timer } from 'rxjs';
import { SectionHeader } from '@shared/components/section-header/section-header';
import { ContactLinkCard } from './components/contact-link-card/contact-link-card';
import { CONTACT_DESCRIPTION, CONTACT_EYEBROW, CONTACT_TITLE } from './data/contact-copy';
import { CONTACT_LINKS } from './data/contact-links';
import { ContactLink } from './models/contact-link.model';

@Component({
  selector: 'app-contact',
  imports: [ContactLinkCard, RouterLink, MatButtonModule, MatCardModule, SectionHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly eyebrow = CONTACT_EYEBROW;
  protected readonly title = CONTACT_TITLE;
  protected readonly description = CONTACT_DESCRIPTION;
  protected readonly contactLinks = CONTACT_LINKS;
  protected readonly copiedLabel = signal<string | null>(null);
  private readonly destroyRef = inject(DestroyRef);

  protected openExternalUrl(url: string): void {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  protected async copyContactValue(link: ContactLink): Promise<void> {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(link.value);
    } else {
      await this.copyWithFallback(link.value);
    }

    this.copiedLabel.set(link.label);

    timer(1600)
      .pipe(
        filter(() => this.copiedLabel() === link.label),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.copiedLabel.set(null);
      });
  }

  private async copyWithFallback(value: string): Promise<void> {
    await window.navigator.share({ text: value });
  }
}
