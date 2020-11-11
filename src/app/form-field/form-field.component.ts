import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {FormLabelDirective} from '../form-label/form-label.directive';
import {FormControlName} from '@angular/forms';
import {FormErrorComponent} from '../form-error/form-error.component';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild(FormErrorComponent) private _errorMsg: FormErrorComponent;
  @ContentChild(FormLabelDirective, {read: ElementRef}) private _label: ElementRef<HTMLLabelElement>;
  @ContentChild(FormControlName) private _formControlName: FormControlName;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this._label);
  }

  ngAfterViewInit(): void {

    this._formControlName.control.statusChanges.subscribe((newValue) => {
      console.log(newValue);
    });
    console.log(this._label);
  }
  // jak dobrze odsybskrubowac

}
