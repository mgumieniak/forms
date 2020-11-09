import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  constructor() {
  }

  inputValue: string;

  ngOnInit(): void {
  }

  inputChanged(event): void {
    this.inputValue = event.target.value;
  }
}
