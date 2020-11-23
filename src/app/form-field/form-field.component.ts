import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, OnDestroy} from '@angular/core';
import {FormControlName} from '@angular/forms';
import {FormError} from '../form-error/form-error.component';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormFieldControl} from './form-field-control.directive';
import {FormLabel} from '../form-label/form-label.component';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormField implements OnDestroy, AfterContentInit {
  _destroyed = new Subject<void>();

  @ContentChild(FormError) private _errorMsg: FormError;
  @ContentChild(FormLabel, {read: ElementRef}) private _label: ElementRef<HTMLLabelElement>;
  @ContentChild(FormFieldControl) private _control: FormFieldControl;
  @ContentChild(FormControlName) private _formControlName: FormControlName;

  constructor() {
  }

  ngAfterContentInit(): void {
    this._formControlName.control.statusChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(this._setErrorMsgStatus);

    this._formControlName.formDirective.ngSubmit
      .pipe(takeUntil(this._destroyed))
      .subscribe(this._setSubmittedStatus);
  }

  private _setSubmittedStatus = () => {
    this._setFormErrorSubmittedFlag();
    this._setControlErrorState();
  };

  private _setFormErrorSubmittedFlag(): void {
    this._errorMsg.isFormSubmitted = this._formControlName.formDirective.submitted;
  }

  private _setControlErrorState(): void {
    this._control.errorState = (this._formControlName.control.status !== 'VALID');
  }

  private _setErrorMsgStatus = (status) => {
    this._errorMsg.isError = status !== 'VALID';
  };

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}

