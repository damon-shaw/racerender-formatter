import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeColumnsStepComponent } from './prime-columns-step.component';

describe('PrimeColumnsStepComponent', () => {
  let component: PrimeColumnsStepComponent;
  let fixture: ComponentFixture<PrimeColumnsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeColumnsStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeColumnsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
