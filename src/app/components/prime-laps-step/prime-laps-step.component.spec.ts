import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeLapsStepComponent } from './prime-laps-step.component';

describe('PrimeLapsStepComponent', () => {
  let component: PrimeLapsStepComponent;
  let fixture: ComponentFixture<PrimeLapsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeLapsStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeLapsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
