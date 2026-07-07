import { MockBuilder, MockRender } from 'ng-mocks';

import { HERO_STATS } from '../../data/hero-stats';
import { HeroStats } from './hero-stats';

describe('HeroStats', () => {
  beforeEach(() => MockBuilder(HeroStats));

  it('renders each stat value and label', () => {
    const fixture = MockRender(HeroStats, { stats: HERO_STATS });
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    HERO_STATS.forEach((stat) => {
      expect(text).toContain(stat.value);
      expect(text).toContain(stat.label);
    });
  });
});
