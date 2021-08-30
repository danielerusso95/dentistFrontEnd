import { AppointmentService } from './../service/appointmentService/appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [AppointmentService],
})
export class AppointmentComponent implements OnInit {
  public appointments: any;
  public appointmentsByDay: any;

  constructor(public appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService
      .getAllAppointments()
      .subscribe((data) => (this.appointments = data));
  }

  /**
   * redirect to details page of appointment
   * @param appointment
   */
  viewAppointment(appointment: any) {
    this.appointmentService.viewAppointment(appointment);
  }

  findByDate(event: any) {
    let intDate = [0, 0, 0];
    let date = event.target.value.split('-');
    date = date.reverse();
    for (let index = 0; index < date.length; index++) {
      intDate[index] = parseInt(date[index]);
    }
    intDate[1] -= 1;
    this.appointmentService.getAppointmentsByDay(intDate).subscribe((data) => {
      this.appointmentsByDay = data;
    });
  }
}
