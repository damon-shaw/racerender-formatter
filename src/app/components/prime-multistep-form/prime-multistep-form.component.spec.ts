import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeMultistepFormComponent } from './prime-multistep-form.component';

describe('PrimeMultistepFormComponent', () => {
  let component: PrimeMultistepFormComponent;
  let fixture: ComponentFixture<PrimeMultistepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeMultistepFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeMultistepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
