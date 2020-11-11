import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  isError = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
