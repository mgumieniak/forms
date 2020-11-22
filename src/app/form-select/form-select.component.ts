import {Component} from '@angular/core';
import {FormFieldControl} from '../form-field-control.directive';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  providers: [
    {provide: FormFieldControl, useExisting: FormSelect},
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormSelect,
      multi: true,
    },
  ]
})
export class FormSelect extends FormFieldControl implements ControlValueAccessor {
  value = '';
  onChange: (value: string) => void;
  onTouched: () => void;

  constructor() {
    super();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string): void {
    this.value = obj;
  }


  setValue(value): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }
}

