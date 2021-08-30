import { CustomerService } from './service/customerService/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CustomerComponent } from './customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { FormAppointmentComponent } from './form-appointment/form-appointment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AppointmentComponent,
    CustomerComponent,
    HomepageComponent,
    ViewCustomerComponent,
    FormCustomerComponent,
    ViewAppointmentComponent,
    FormAppointmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
