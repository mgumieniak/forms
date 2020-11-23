import {Component} from '@angular/core';
import {FormFieldControl} from '../form-field/form-field-control.directive';
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
  _dropDown = false;
  _value = '';
  _onChange: (value: string) => void;
  _onTouched: () => void;

  constructor() {
    super();
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  writeValue(obj: string): void {
    this._value = obj;
  }

  setValue(value): void {
    this._value = value;
    this._onChange(this._value);
    this._onTouched();
    this._dropDown = false;
  }

  onClick(): void {
    this._dropDown = true;
  }
}

