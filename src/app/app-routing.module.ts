import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dash1Component } from './dash1/dash1.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent
},
{
  path:"dash1",
  component:Dash1Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
