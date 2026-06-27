import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MobileNavbar } from './components/mobile-navbar/mobile-navbar';
import { NAVBAR_BRAND, NAVBAR_LINKS } from './data';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MobileNavbar],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly brand = NAVBAR_BRAND;
  protected readonly links = NAVBAR_LINKS;

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  protected openMobileMenu(): void {
    this.isMobileMenuOpen.set(true);
  }
}
