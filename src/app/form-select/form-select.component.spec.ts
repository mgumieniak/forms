import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelect } from './form-select.component';

describe('FormSelectComponent', () => {
  let component: FormSelect;
  let fixture: ComponentFixture<FormSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelect ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
