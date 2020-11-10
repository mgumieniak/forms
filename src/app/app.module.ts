import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormsComponent } from './forms/forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormLabelDirective } from './form-label/form-label.directive';
import { FormInputDirective } from './form-input/form-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    FormsComponent,
    FormLabelDirective,
    FormInputDirective,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
