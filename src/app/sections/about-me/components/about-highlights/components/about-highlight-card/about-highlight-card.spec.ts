import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHighlightCard } from './about-highlight-card';

describe('AboutHighlightCard', () => {
  let component: AboutHighlightCard;
  let fixture: ComponentFixture<AboutHighlightCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHighlightCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHighlightCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
