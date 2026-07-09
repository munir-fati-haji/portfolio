import { AfterViewInit, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { auditTime, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';
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
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private scrollSyncedSectionId: string | null = null;

  public ngAfterViewInit(): void {
    this.scrollToCurrentSection();
    this.watchRouteChanges();
    this.watchScrollChanges();
  }

  private watchRouteChanges(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.getCurrentSectionId()),
        filter((sectionId) => !this.consumeScrollSyncedSection(sectionId)),
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
    requestAnimationFrame(() => this.content()?.scrollToSection(sectionId));
  }

  private watchScrollChanges(): void {
    fromEvent(window, 'scroll', { passive: true })
      .pipe(
        auditTime(100),
        map(() => this.content()?.getActiveSectionId() ?? 'hero'),
        distinctUntilChanged(),
        filter((sectionId) => this.getCurrentSectionId() !== sectionId),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((sectionId) => {
        this.scrollSyncedSectionId = sectionId;
        void this.router.navigateByUrl(this.getRouteForSection(sectionId), { replaceUrl: true });
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

  private consumeScrollSyncedSection(sectionId: string): boolean {
    if (this.scrollSyncedSectionId !== sectionId) {
      return false;
    }

    this.scrollSyncedSectionId = null;

    return true;
  }
}
