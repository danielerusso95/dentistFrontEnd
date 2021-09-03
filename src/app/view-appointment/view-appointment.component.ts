import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointmentService/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css'],
})
export class ViewAppointmentComponent implements OnInit {
  public day: Date = new Date();
  public today: string = '';
  public appointment: any;
  public newAppointment: any;
  public update = false;
  public date = '';
  public time = '';

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.today = `${this.day.getFullYear()}-${
      this.day.getMonth() + 1 > 9
        ? `${this.day.getMonth() + 1}`
        : `0${this.day.getMonth() + 1}`
    }-${this.day.getUTCDate()}`;

    this.appointment = window.history.state;
    this.date = this.appointment.date.split('T')[0];
    this.time = this.appointment.date.split('T')[1].split('.')[0];
  }

  onSubmit(formBody: any) {
    let customer = this.appointment.customer;

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
      id: this.appointment.id,
      date: data,
      customer: customer,
    };
    console.log(body);
    this.updateAppointment(body);
  }

  updateAppointment(body: any) {
    this.appointmentService.editAppointment(body).subscribe(
      (data) => {
        if (data) {
          this.router.navigate(['/appointment']).then(() => {
            window.location.reload();
          });
        } else {
          this.update = true;
        }
      },
      (error) => (this.update = true)
    );
  }
  deleteAppointment() {
    this.appointmentService
      .deleteAppointment(this.appointment.id)
      .subscribe((data) => console.log(data));
    this.router.navigate(['/appointment']).then(() => {
      window.location.reload();
    });
  }
}
