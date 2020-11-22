import {Directive} from '@angular/core';
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

}
