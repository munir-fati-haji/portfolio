import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymWorkout } from './gym-workout';

describe('GymWorkout', () => {
  let component: GymWorkout;
  let fixture: ComponentFixture<GymWorkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymWorkout],
    }).compileComponents();

    fixture = TestBed.createComponent(GymWorkout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
