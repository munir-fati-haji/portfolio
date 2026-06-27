import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHighlights } from './about-highlights';

describe('AboutHighlights', () => {
  let component: AboutHighlights;
  let fixture: ComponentFixture<AboutHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHighlights],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHighlights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
