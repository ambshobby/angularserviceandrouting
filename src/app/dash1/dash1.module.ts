import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Dash1Component } from './dash1.component';
import { Dash1RoutingModule } from './dash1-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    Dash1Component
  ],
  imports: [
    CommonModule,
    Dash1RoutingModule
  ]
})
export class Dash1Module { }
