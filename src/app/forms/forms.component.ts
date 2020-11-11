import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  forms: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.forms = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }

  isNameInvalid = false;

  onSubmit(): void {
    this.isNameInvalid = this.forms.controls.name.invalid;
    console.log(this.forms.value, this.forms.valid);
  }

}
