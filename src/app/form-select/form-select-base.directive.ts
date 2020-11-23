import {Directive, HostBinding} from '@angular/core';
import {FormFieldControl} from '../form-field/form-field-control.directive';

@Directive({
  selector: 'select[formInput]',
  providers: [
    {provide: FormFieldControl, useExisting: FormSelectBase}
  ]
})
export class FormSelectBase extends FormFieldControl {

  constructor() {
    super();
  }

  @HostBinding('class.form__select--error')
  get hasError(): boolean {
    return this.errorState;
  }

}
