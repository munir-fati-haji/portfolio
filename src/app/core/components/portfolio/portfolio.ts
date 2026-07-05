import { AfterViewInit, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Content } from './components/content/content';

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

  public ngAfterViewInit(): void {
    this.scrollToCurrentSection();
    this.watchRouteChanges();
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
}
