import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarLink } from '../../models/navbar-link.model';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.scss',
})
export class MobileNavbar {
  public readonly links = input.required<NavbarLink[]>();
}
