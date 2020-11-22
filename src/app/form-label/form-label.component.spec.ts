import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLabel } from './form-label.component';

describe('FormLabelComponent', () => {
  let component: FormLabel;
  let fixture: ComponentFixture<FormLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLabel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
