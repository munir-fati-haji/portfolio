import { Component, ElementRef, viewChildren } from '@angular/core';
import { AboutMe } from '@sections/about-me/about-me';
import { CaseStudy } from '@sections/case-study/case-study';
import { Contact } from '@sections/contact/contact';
import { Education } from '@sections/education/education';
import { Experience } from '@sections/experience/experience';
import { Hero } from '@sections/hero/hero';
import { Projects } from '@sections/projects/projects';
import { Skills } from '@sections/skills/skills';
import { WorkingOn } from '@sections/working-on/working-on';

@Component({
  selector: 'app-content',
  imports: [AboutMe, CaseStudy, Contact, Education, Experience, Hero, Projects, Skills, WorkingOn],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  private readonly sectionElements = viewChildren<unknown, ElementRef<HTMLElement>>('portfolioSection', {
    read: ElementRef,
  });

  public get scrollElement(): HTMLElement {
    return document.documentElement;
  }

  public getActiveSectionId(): string {
    const scrollPosition = window.scrollY + this.getScrollOffset() + window.innerHeight * 0.25;
    const activeSection = this.sectionElements()
      .filter((section) => this.getSectionTop(section.nativeElement) <= scrollPosition)
      .at(-1);

    return activeSection?.nativeElement.dataset['sectionId'] ?? 'hero';
  }

  public scrollToSection(sectionId: string): void {
    const sectionElement = this.sectionElements().find(
      (section) => section.nativeElement.dataset['sectionId'] === sectionId,
    )?.nativeElement;

    if (!sectionElement) {
      return;
    }

    window.scrollTo({
      top: Math.max(this.getSectionTop(sectionElement) - this.getScrollOffset(), 0),
      behavior: 'auto',
    });
  }

  private getSectionTop(sectionElement: HTMLElement): number {
    return sectionElement.getBoundingClientRect().top + window.scrollY;
  }

  private getScrollOffset(): number {
    const navbar = document.querySelector<HTMLElement>('.navbar__root');

    return (navbar?.getBoundingClientRect().bottom ?? 0) + 16;
  }
}
