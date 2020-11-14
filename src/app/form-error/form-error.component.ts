import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorComponent implements OnInit {

  isFormSubmitted = false;
  isError = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
