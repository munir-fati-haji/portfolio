import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActiveSectionService } from '@core/services/active-section/active-section.service';
import { NavbarLink } from '../../models/navbar-link.model';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.scss',
})
export class MobileNavbar {
  public readonly links = input.required<NavbarLink[]>();
  protected readonly activeSectionService = inject(ActiveSectionService);

  protected isActive(route: string): boolean {
    return this.activeSectionService.sectionId() === this.getSectionId(route);
  }

  private getSectionId(route: string): string {
    return route === '/' ? 'hero' : route.slice(1);
  }
}
