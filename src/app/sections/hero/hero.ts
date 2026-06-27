import { Component } from '@angular/core';
import { HeroIntro } from './components/hero-intro/hero-intro';
import { HeroCodeCard } from './components/hero-code-card/hero-code-card';
import { HeroStats } from './components/hero-stats/hero-stats';
import { SKILL_GROUPS } from './components/hero-intro/data';
import { SectionContainer } from '../../shared/components/full-page-wrapper/section-container';
import { HERO_CODE_SNIPPET, HERO_DESCRIPTION, HERO_NAME, HERO_ROLE, HERO_STATS } from './data';

@Component({
  selector: 'app-hero',
  imports: [HeroIntro, HeroCodeCard, HeroStats, SectionContainer],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly name = HERO_NAME;
  protected readonly role = HERO_ROLE;
  protected readonly description = HERO_DESCRIPTION;
  protected readonly skills = SKILL_GROUPS;
  protected readonly stats = HERO_STATS;
  protected readonly codeSnippet = HERO_CODE_SNIPPET;
}
