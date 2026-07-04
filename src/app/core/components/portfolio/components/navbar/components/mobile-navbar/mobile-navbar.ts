import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../../../../services/theme/theme.service';
import { NavbarLink } from '../../models/navbar-link.model';
import { FOOTER_LINKS } from '../../../footer/data/footer-links';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.scss',
})
export class MobileNavbar {
  public readonly brand = input.required<string>();
  public readonly isOpen = input.required<boolean>();
  public readonly links = input.required<NavbarLink[]>();
  public readonly closed = output<void>();
  protected readonly themeService = inject(ThemeService);
  protected readonly footerLinks = FOOTER_LINKS;

  protected close(): void {
    this.closed.emit();
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
