import { Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../../../../services/theme/theme.service';
import { FOOTER_LINKS } from '../../../footer/data';
import { NavbarLink } from '../../models/navbar-link.model';

@Component({
  selector: 'app-mobile-navbar',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './mobile-navbar.html',
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
