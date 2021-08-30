import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointmentService/appointment.service';
import { CustomerService } from '../service/customerService/customer.service';

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.css'],
})
export class FormAppointmentComponent implements OnInit {
  public day: Date = new Date();
  public today: string = '';
  constructor(
    private customerService: CustomerService,
    private appointmentService: AppointmentService
  ) {}
  public customers: any;

  ngOnInit(): void {
    this.today = `${this.day.getFullYear()}-${
      this.day.getMonth() + 1 > 9
        ? `${this.day.getMonth() + 1}`
        : `0${this.day.getMonth() + 1}`
    }-${this.day.getUTCDate()}`;

    this.customerService
      .getAllCustomer()
      .subscribe((data) => (this.customers = data));
  }

  /**
   * insert an appointment
   * @param body
   */
  insertAppointment(body: any) {
    this.appointmentService
      .insertAppointment(body)
      .subscribe((data) => console.log(data));
  }

  /**
   * get value from input and manipulate they to insert an appointment
   * @param formBody
   */
  onSubmit(formBody: any) {
    let customer = this.customers.filter(
      (el: { cf: any }) => el.cf == formBody.customer
    );
    let body = {
      date: formBody.date + 'T' + formBody.time,
      customer: customer[0],
    };
    this.insertAppointment(body);
  }
}
