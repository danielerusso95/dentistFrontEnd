import { FormCustomerComponent } from './form-customer/form-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerComponent } from './customer/customer.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'viewCustomer/:customer', component: ViewCustomerComponent },
  { path: 'formCustomer', component: FormCustomerComponent },
  { path: 'viewAppointment/:appointment', component: ViewAppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
