import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AuthenticationRoutingModule

  ],
  exports: [
    RouterModule,
    AuthenticationRoutingModule,
    LoginComponent
  ],
  declarations: [
    AuthenticationComponent,
    LoginComponent]
    // providers: [FooterheaderService]

})
export class AuthenticationModule { }
