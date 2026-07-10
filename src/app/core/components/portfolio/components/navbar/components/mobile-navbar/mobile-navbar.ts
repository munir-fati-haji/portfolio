import { Component, ElementRef, effect, inject, input, viewChildren } from '@angular/core';
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
  private readonly navLinks = viewChildren<ElementRef<HTMLButtonElement>>('navLink');

  public constructor() {
    effect(() => {
      const sectionId = this.activeSectionService.sectionId();
      const links = this.links();
      const navLinks = this.navLinks();

      queueMicrotask(() => {
        this.scrollActiveLinkIntoView(sectionId, links, navLinks);
      });
    });
  }

  protected isActive(route: string): boolean {
    return this.activeSectionService.sectionId() === this.getSectionId(route);
  }

  private getSectionId(route: string): string {
    return route === '/' ? 'hero' : route.slice(1);
  }

  private scrollActiveLinkIntoView(
    sectionId: string,
    links: NavbarLink[],
    navLinks: readonly ElementRef<HTMLButtonElement>[],
  ): void {
    if (window.matchMedia('(width >= 80rem)').matches) {
      return;
    }

    const activeIndex = links.findIndex((link) => this.getSectionId(link.route) === sectionId);
    const activeLink = activeIndex >= 0 ? navLinks[activeIndex]?.nativeElement : undefined;

    activeLink?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
}
