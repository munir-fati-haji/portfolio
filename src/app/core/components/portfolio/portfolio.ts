import { AfterViewInit, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { auditTime, distinctUntilChanged, filter, fromEvent, map, Subscription, timer } from 'rxjs';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Content } from './components/content/content';

const sectionRouteById: Record<string, string> = {
  hero: '/',
  about: '/about',
  experience: '/experience',
  education: '/education',
  skills: '/skills',
  projects: '/projects',
  'working-on': '/working-on',
  'case-study': '/case-study',
  contact: '/contact',
};

@Component({
  selector: 'app-portfolio',
  imports: [Navbar, Footer, Content],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  host: { class: 'flex h-dvh flex-col overflow-hidden max-sm:h-svh' },
})
export class Portfolio implements AfterViewInit {
  private readonly content = viewChild<Content>('content');
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private routeDrivenScrollSectionId: string | null = null;
  private routeDrivenScrollFallbackSubscription: Subscription | null = null;

  public ngAfterViewInit(): void {
    this.scrollToCurrentSection();
    this.watchSectionScroll();
    this.watchRouteChanges();
  }

  private watchSectionScroll(): void {
    const content = this.content();

    if (!content) {
      return;
    }

    fromEvent(content.scrollElement, 'scroll')
      .pipe(
        auditTime(80),
        map(() => this.content()?.getActiveSectionId()),
        filter((sectionId): sectionId is string => !!sectionId),
        filter((sectionId) => this.shouldUpdateRouteFromScroll(sectionId)),
        map((sectionId) => sectionRouteById[sectionId]),
        filter((route): route is string => !!route && this.router.url !== route),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((route) => void this.router.navigateByUrl(route, { replaceUrl: true }));
  }

  private watchRouteChanges(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.getCurrentSectionId()),
        filter((sectionId) => this.content()?.getActiveSectionId() !== sectionId),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((sectionId) => {
        this.scrollToSection(sectionId);
      });
  }

  private scrollToCurrentSection(): void {
    this.scrollToSection(this.getCurrentSectionId());
  }

  private scrollToSection(sectionId: string): void {
    this.trackRouteDrivenScroll(sectionId);
    requestAnimationFrame(() => this.content()?.scrollToSection(sectionId));
  }

  private getCurrentSectionId(): string {
    let route = this.activatedRoute;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const sectionId = route.snapshot.data['sectionId'] as unknown;

    return typeof sectionId === 'string' ? sectionId : 'hero';
  }

  private shouldUpdateRouteFromScroll(sectionId: string): boolean {
    if (!this.routeDrivenScrollSectionId) {
      return true;
    }

    if (sectionId === this.routeDrivenScrollSectionId) {
      this.clearRouteDrivenScroll();
    }

    return false;
  }

  private trackRouteDrivenScroll(sectionId: string): void {
    this.clearRouteDrivenScroll();
    this.routeDrivenScrollSectionId = sectionId;
    this.routeDrivenScrollFallbackSubscription = timer(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.clearRouteDrivenScroll();
      });
  }

  private clearRouteDrivenScroll(): void {
    this.routeDrivenScrollSectionId = null;

    if (this.routeDrivenScrollFallbackSubscription) {
      this.routeDrivenScrollFallbackSubscription.unsubscribe();
      this.routeDrivenScrollFallbackSubscription = null;
    }
  }
}
