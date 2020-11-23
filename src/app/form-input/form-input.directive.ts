import {Directive, HostBinding} from '@angular/core';
import {FormFieldControl} from '../form-field/form-field-control.directive';

@Directive({
  selector: 'input[formInput]',
  providers: [
    {provide: FormFieldControl, useExisting: FormInput}
  ]
})
export class FormInput extends FormFieldControl {

  constructor() {
    super();
  }

  @HostBinding('class') cssClass = 'form__input'

  @HostBinding('class.form__input--error')
  get hasError(): boolean {
    return this.errorState;
  }
}
