import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeDownloadStepComponent } from './prime-download-step.component';

describe('PrimeDownloadStepComponent', () => {
  let component: PrimeDownloadStepComponent;
  let fixture: ComponentFixture<PrimeDownloadStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeDownloadStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeDownloadStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
