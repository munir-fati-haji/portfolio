import { Component } from '@angular/core';
import { HeroIntro } from './components/hero-intro/hero-intro';
import { HeroCodeCard } from './components/hero-code-card/hero-code-card';
import { HeroStats } from './components/hero-stats/hero-stats';
import { SKILL_GROUPS } from './components/hero-intro/data/hero-skills-group';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { HERO_CODE_SNIPPET } from './data/hero-code-snippet';
import { HERO_DESCRIPTION, HERO_NAME, HERO_ROLE } from './data/hero-profile';
import { HERO_STATS } from './data/hero-stats';

@Component({
  selector: 'app-hero',
  imports: [HeroIntro, HeroCodeCard, HeroStats, SectionContainer],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly name = HERO_NAME;
  protected readonly role = HERO_ROLE;
  protected readonly description = HERO_DESCRIPTION;
  protected readonly skills = SKILL_GROUPS;
  protected readonly stats = HERO_STATS;
  protected readonly codeSnippet = HERO_CODE_SNIPPET;
}
