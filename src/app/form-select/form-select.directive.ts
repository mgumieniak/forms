import {Directive, HostBinding} from '@angular/core';
import {FormFieldControl} from '../form-field-control.directive';

@Directive({
  selector: 'select[formInput]',
  providers: [
    {provide: FormFieldControl, useExisting: FormSelect}
  ]
})
export class FormSelect extends FormFieldControl {

  constructor() {
    super();
  }

  @HostBinding('class') cssClass = 'form__select'

}
