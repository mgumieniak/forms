import {AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';
import {FormInputDirective} from '../form-input/form-input.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements AfterContentInit {
  @ContentChild(FormInputDirective, {read: ElementRef}) child: FormInputDirective;

  constructor() {
  }

  ngAfterContentInit(): void {
    console.log(this.child);
  }
}
