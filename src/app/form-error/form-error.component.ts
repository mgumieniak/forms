import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormError implements OnInit {
  _isFormSubmitted = false;
  _isError = false;

  @Input() set isFormSubmitted(status) {
    this._isFormSubmitted = status;
    this.cdr.markForCheck();
  }

  @Input() set isError(status) {
    this._isError = status;
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

}
