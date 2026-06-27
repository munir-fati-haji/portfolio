import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCodeCard } from './hero-code-card';

describe('HeroCodeCard', () => {
  let component: HeroCodeCard;
  let fixture: ComponentFixture<HeroCodeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCodeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCodeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
