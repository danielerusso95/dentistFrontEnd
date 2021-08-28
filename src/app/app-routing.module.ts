import { HomepageComponent } from './homepage/homepage.component';
import { CustomerComponent } from './customer/customer.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"homepage",component:HomepageComponent},
{path:"appointment",component:AppointmentComponent},
{path:"customer",component:CustomerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
