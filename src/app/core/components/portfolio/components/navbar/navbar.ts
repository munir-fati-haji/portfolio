import { Component, inject, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '../../../../services/theme/theme.service';
import { MobileNavbar } from './components/mobile-navbar/mobile-navbar';
import { NAVBAR_BRAND } from './data/navbar-brand';
import { NAVBAR_LINKS } from './data/navbar-links';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MobileNavbar],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly themeService = inject(ThemeService);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly brand = NAVBAR_BRAND;
  protected readonly links = NAVBAR_LINKS;

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  protected openMobileMenu(): void {
    this.isMobileMenuOpen.set(true);
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
