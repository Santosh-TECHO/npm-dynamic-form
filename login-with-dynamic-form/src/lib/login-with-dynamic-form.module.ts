import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginWithDynamicFormComponent } from './login-with-dynamic-form.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [LoginWithDynamicFormComponent],
  exports: [LoginWithDynamicFormComponent]
})
export class LoginWithDynamicFormModule { }
