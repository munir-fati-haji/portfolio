import { Component, inject } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '@core/services/theme/theme.service';
import { MobileNavbar } from './components/mobile-navbar/mobile-navbar';
import { NAVBAR_BRAND } from './data/navbar-brand';
import { NAVBAR_LINKS } from './data/navbar-links';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MobileNavbar,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly themeService = inject(ThemeService);
  protected readonly brand = NAVBAR_BRAND;
  protected readonly links = NAVBAR_LINKS;

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
