import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionContainer } from '@shared/components/section-container/section-container';
import { HeroCodeCard } from './components/hero-code-card/hero-code-card';
import { HeroIntro } from './components/hero-intro/hero-intro';
import { SKILL_GROUPS } from './components/hero-intro/data/hero-skills-group';
import { HeroStats } from './components/hero-stats/hero-stats';
import { HERO_CODE_SNIPPET } from './data/hero-code-snippet';
import { HERO_DESCRIPTION, HERO_NAME, HERO_ROLE } from './data/hero-profile';
import { HERO_STATS } from './data/hero-stats';
import { Hero } from './hero';

describe('Hero', () => {
  beforeEach(() => MockBuilder(Hero).mock(SectionContainer).mock(HeroIntro).mock(HeroCodeCard).mock(HeroStats));

  it('passes profile details to the intro', () => {
    MockRender(Hero);

    const intro = ngMocks.find(HeroIntro);

    expect(ngMocks.input(intro, 'name')).toBe(HERO_NAME);
    expect(ngMocks.input(intro, 'role')).toBe(HERO_ROLE);
    expect(ngMocks.input(intro, 'description')).toBe(HERO_DESCRIPTION);
    expect(ngMocks.input(intro, 'skills')).toEqual(SKILL_GROUPS);
  });

  it('passes code and stats to the feature panel', () => {
    MockRender(Hero);

    expect(ngMocks.input(ngMocks.find(HeroCodeCard), 'code')).toBe(HERO_CODE_SNIPPET);
    expect(ngMocks.input(ngMocks.find(HeroStats), 'stats')).toEqual(HERO_STATS);
  });
});
