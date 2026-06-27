import { Component } from '@angular/core';
import { AboutIntro } from './components/about-intro/about-intro';
import { AboutSkills } from './components/about-skills/about-skills';
import { AboutHighlights } from './components/about-highlights/about-highlights';
import { AboutHighlight } from './models/about-highlight.model';
import { SectionContainer } from '../../shared/components/full-page-wrapper/section-container';

@Component({
  selector: 'app-about-me',
  imports: [AboutIntro, AboutSkills, AboutHighlights, SectionContainer],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  public readonly eyebrow = 'About Me';

  public readonly title = 'Frontend developer focused on clean, scalable user interfaces';

  public readonly description =
    'I am an Angular Frontend Developer with experience building enterprise web applications using Angular, TypeScript, RxJS, and modern UI architecture. I enjoy creating reusable components, improving user experience, and turning complex enterprise workflows into clean, responsive interfaces.';

  public readonly secondDescription =
    'My background in Robotics gives me a strong problem-solving mindset, and my frontend experience helps me build practical, maintainable applications that feel simple for users.';

  public readonly skills: readonly string[] = [
    'Angular',
    'TypeScript',
    'RxJS',
    'Angular Material',
    'Tailwind CSS',
    'AG Grid',
    'Enterprise UI',
  ];

  public readonly highlights: AboutHighlight[] = [
    {
      title: 'Angular & TypeScript',
      description: 'Building scalable frontend applications with reusable components.',
      icon: 'code',
    },
    {
      title: 'Enterprise UI',
      description: 'Experience with dashboards, forms, workflows, tables, and business tools.',
      icon: 'dashboard',
    },
    {
      title: 'Clean Architecture',
      description: 'Focused on maintainable structure, readable code, and component design.',
      icon: 'account_tree',
    },
    {
      title: 'Robotics Background',
      description: 'MSc Robotics graduate with strong analytical and engineering thinking.',
      icon: 'precision_manufacturing',
    },
  ];
}
