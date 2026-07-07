import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from '@core/services/theme/theme.service';
import { NavbarLink } from '../../models/navbar-link.model';
import { FOOTER_LINKS } from '../../../footer/data/footer-links';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.scss',
})
export class MobileNavbar {
  public readonly brand = input.required<string>();
  public readonly isOpen = input.required<boolean>();
  public readonly links = input.required<NavbarLink[]>();
  public readonly closed = output();
  protected readonly themeService = inject(ThemeService);
  protected readonly footerLinks = FOOTER_LINKS;

  protected close(): void {
    this.closed.emit();
  }

  protected openExternalUrl(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
    this.close();
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
