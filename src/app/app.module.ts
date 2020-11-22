import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsComponent} from './forms/forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormField } from './form-field/form-field.component';
import { FormInput } from './form-input/form-input.directive';
import { FormError } from './form-error/form-error.component';
import { FormLabel } from './form-label/form-label.component';
import { FormSelect } from './form-select/form-select.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormField,
    FormInput,
    FormError,
    FormLabel,
    FormSelect,
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
