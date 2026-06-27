import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contactLinks = [
    {
      label: 'Email',
      value: 'munir.fati.haji@gmail.com',
      href: 'mailto:munir.fati.haji@gmail.com',
      external: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/munir-fati-haji',
      href: 'https://github.com/munir-fati-haji',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/munir-fati-haji',
      href: 'https://www.linkedin.com/in/munir-fati-haji',
      external: true,
    },
  ];
  protected readonly copiedLabel = signal<string | null>(null);

  protected async copyContactValue(value: string, label: string): Promise<void> {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(value);
    } else {
      this.copyWithFallback(value);
    }

    this.copiedLabel.set(label);

    window.setTimeout(() => {
      if (this.copiedLabel() === label) {
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
