import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSkills } from './hero-skills';

describe('HeroSkills', () => {
  let component: HeroSkills;
  let fixture: ComponentFixture<HeroSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSkills],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
