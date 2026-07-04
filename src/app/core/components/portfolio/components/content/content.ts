import { Component, ElementRef, inject, viewChildren } from '@angular/core';
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
  private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly sectionElements = viewChildren<unknown, ElementRef<HTMLElement>>('portfolioSection', {
    read: ElementRef,
  });

  public get scrollElement(): HTMLElement {
    return this.hostElement.nativeElement;
  }

  public getActiveSectionId(): string {
    const scrollPosition = this.scrollElement.scrollTop + this.scrollElement.clientHeight * 0.35;
    const activeSection = this.sectionElements()
      .filter((section) => section.nativeElement.offsetTop <= scrollPosition)
      .at(-1);

    return activeSection?.nativeElement.dataset['sectionId'] ?? 'hero';
  }

  public scrollToSection(sectionId: string): void {
    this.sectionElements()
      .find((section) => section.nativeElement.dataset['sectionId'] === sectionId)
      ?.nativeElement.scrollIntoView({ block: 'start' });
  }
}
