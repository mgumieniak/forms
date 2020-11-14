import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  OnDestroy,
  OnInit
} from '@angular/core';
import {FormLabelDirective} from '../form-label/form-label.directive';
import {FormControlName} from '@angular/forms';
import {FormErrorComponent} from '../form-error/form-error.component';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  _destroyed = new Subject<void>();

  @ContentChild(FormErrorComponent) private _errorMsg: FormErrorComponent;
  @ContentChild(FormLabelDirective, {read: ElementRef}) private _label: ElementRef<HTMLLabelElement>;
  @ContentChild(FormControlName) private _formControlName: FormControlName;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this._formControlName.control.statusChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(this._setErrorMsgStatus);

    this._formControlName.formDirective.ngSubmit
      .pipe(takeUntil(this._destroyed))
      .subscribe(this._setSubmittedStatus());
  }


  private _setSubmittedStatus = () => {
    this._errorMsg.isFormSubmitted = this._formControlName.formDirective.submitted;
  };

  private _setErrorMsgStatus = (status) => {
    this._errorMsg.isError = status !== 'VALID';
  };

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}

