import { AfterViewInit, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { Location } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { auditTime, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';
import { ActiveSectionService } from '@core/services/active-section/active-section.service';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Content } from './components/content/content';

@Component({
  selector: 'app-portfolio',
  imports: [Navbar, Footer, Content],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  host: { class: 'block' },
})
export class Portfolio implements AfterViewInit {
  private readonly content = viewChild<Content>('content');
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly activeSectionService = inject(ActiveSectionService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly location = inject(Location);
  private readonly router = inject(Router);
  private programmaticScrollTimeout: ReturnType<typeof setTimeout> | undefined;
  private isProgrammaticScroll = false;

  public ngAfterViewInit(): void {
    this.scrollToCurrentSection();
    this.watchRouteChanges();
    this.watchScrollChanges();
  }

  private watchRouteChanges(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event) => this.getSectionIdFromUrl(event.urlAfterRedirects)),
        filter((sectionId) => this.content()?.getActiveSectionId() !== sectionId),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((sectionId) => {
        this.activeSectionService.setSectionId(sectionId);
        this.scrollToSection(sectionId);
      });
  }

  private scrollToCurrentSection(): void {
    const sectionId = this.getCurrentSectionId();

    this.activeSectionService.setSectionId(sectionId);

    if (this.content()?.getActiveSectionId() !== sectionId) {
      this.scrollToSection(sectionId);
    }
  }

  private scrollToSection(sectionId: string): void {
    this.isProgrammaticScroll = true;

    if (this.programmaticScrollTimeout) {
      clearTimeout(this.programmaticScrollTimeout);
    }

    requestAnimationFrame(() => {
      this.content()?.scrollToSection(sectionId);
      this.programmaticScrollTimeout = setTimeout(() => {
        this.isProgrammaticScroll = false;
        this.programmaticScrollTimeout = undefined;
      }, 250);
    });
  }

  private watchScrollChanges(): void {
    fromEvent(window, 'scroll', { passive: true })
      .pipe(
        auditTime(100),
        map(() => this.content()?.getActiveSectionId() ?? 'hero'),
        distinctUntilChanged(),
        filter(() => !this.isProgrammaticScroll),
        filter((sectionId) => this.activeSectionService.sectionId() !== sectionId),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((sectionId) => {
        this.activeSectionService.setSectionId(sectionId);
        this.location.replaceState(this.getRouteForSection(sectionId));
      });
  }

  private getCurrentSectionId(): string {
    let route = this.activatedRoute;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const sectionId = route.snapshot.data['sectionId'] as unknown;

    return typeof sectionId === 'string' ? sectionId : 'hero';
  }

  private getRouteForSection(sectionId: string): string {
    return sectionId === 'hero' ? '/' : `/${sectionId}`;
  }

  private getSectionIdFromUrl(url: string): string {
    const [path] = url.split(/[?#]/);
    const sectionId = path.replace(/^\/+/, '');

    return sectionId || 'hero';
  }
}
