import { Component } from '@angular/core';
import { HeroIntro } from './components/hero-intro/hero-intro';
import { HeroCodeCard } from './components/hero-code-card/hero-code-card';
import { HeroStats } from './components/hero-stats/hero-stats';
import { HERO_CODE_SNIPPET } from './constants/hero-code-snippet';
import { SKILL_GROUPS } from './components/hero-intro/constants/hero-skills-group';
import { SectionContainer } from '../../shared/components/full-page-wrapper/section-container';

@Component({
  selector: 'app-hero',
  imports: [HeroIntro, HeroCodeCard, HeroStats, SectionContainer],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly name = 'Munir';
  protected readonly role = 'Angular Frontend Developer';

  protected readonly description =
    'I build modern, responsive, and maintainable web applications using Angular, TypeScript, RxJS, and clean UI architecture. I enjoy turning complex enterprise workflows into simple, elegant user experiences.';

  protected readonly skills = SKILL_GROUPS;

  protected readonly stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'UI Features Built' },
    { value: 'MSc', label: 'Robotics Graduate' },
  ];

  protected readonly codeSnippet = HERO_CODE_SNIPPET;
}
