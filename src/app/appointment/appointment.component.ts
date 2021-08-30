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

  /**
   * find all appointments by a date
   * @param event
   */
  findByDate(event: any) {
    this.appointmentService
      .findByDate(event.target.value)
      .subscribe((data) => (this.appointmentsByDay = data));
    console.log(this.appointmentsByDay);
  }
}
