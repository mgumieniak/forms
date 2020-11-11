import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsComponent} from './forms/forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormLabelDirective } from './form-label/form-label.directive';
import { FormInputDirective } from './form-input/form-input.directive';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormFieldComponent,
    FormLabelDirective,
    FormInputDirective,
    FormErrorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
