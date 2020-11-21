import {Directive, HostBinding} from '@angular/core';
import {FormFieldControl} from '../form-field-control.directive';

@Directive({
  selector: 'input[formInput]',
  providers: [{provide: FormFieldControl, useExisting: FormInputDirective}]
})
export class FormInputDirective extends FormFieldControl {

  constructor() {
    super();
  }

  @HostBinding('class.form__input--error')
  get hasError(): boolean {
    return this.errorState;
  }

}
