import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Login1Component } from './login1/login1.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes:Routes=[
  {
    path:"",
    component:Login1Component
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"forgetpassword",
    component:ForgetpasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
