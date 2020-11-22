import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormError } from './form-error.component';

describe('FormErrorComponent', () => {
  let component: FormError;
  let fixture: ComponentFixture<FormError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormError ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
