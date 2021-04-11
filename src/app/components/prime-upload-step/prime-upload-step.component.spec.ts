import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeUploadStepComponent } from './prime-upload-step.component';

describe('PrimeUploadStepComponent', () => {
  let component: PrimeUploadStepComponent;
  let fixture: ComponentFixture<PrimeUploadStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeUploadStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeUploadStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
