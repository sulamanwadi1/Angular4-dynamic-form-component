import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-component/form-input/form-input.component';
import { FormSelectComponent } from './form-component/form-select/form-select.component';
import { FormTextareaComponent } from './form-component/form-textarea/form-textarea.component';
import { FormCheckboxComponent } from './form-component/form-checkbox/form-checkbox.component';
import { FormRadiobuttonComponent } from './form-component/form-radiobutton/form-radiobutton.component';
import { GridComponent } from './form-component/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormCheckboxComponent,
    FormRadiobuttonComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
