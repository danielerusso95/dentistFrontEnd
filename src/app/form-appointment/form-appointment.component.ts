import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private appointmentService: AppointmentService,
    private router: Router
  ) {}
  public customers: any;

  public failed: boolean = false;

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
    console.log(body);
    this.appointmentService.insertAppointment(body).subscribe(
      (data) => {
        if (data)
          this.router.navigate(['/appointment']).then(() => {
            window.location.reload();
          });
        else{
          this.failed=true;
        }        
      },
      (error) => (this.failed = true)
    );
  }

  /**
   * get value from input and manipulate they to insert an appointment
   * @param formBody
   */
  onSubmit(formBody: any) {
    let customer = this.customers.filter(
      (el: { cf: any }) => el.cf == formBody.customer
    );
    let time;
    let data;

    if (formBody.time.split(' ')[1] == 'PM') {
      time = parseInt(formBody.time.split(' ')[0].split(':')[0]) + 12;
      data =
        formBody.date +
        'T' +
        time +
        ':' +
        formBody.time.split(' ')[0].split(':')[1];
    } else {
      data = formBody.date + 'T' + formBody.time.split(' ')[0];
    }
    let body = {
      date: data,
      customer: customer[0],
    };

    this.insertAppointment(body);
  }
}
