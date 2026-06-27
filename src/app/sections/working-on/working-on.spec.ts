import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingOn } from './working-on';

describe('WorkingOn', () => {
  let component: WorkingOn;
  let fixture: ComponentFixture<WorkingOn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingOn],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkingOn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
