import { AppointmentService } from './../service/appointmentService/appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [AppointmentService],
})
export class HomepageComponent implements OnInit {
  public appointments: any;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.findByDate();
  }

  /**
   * get all appointments for today
   * @param appointment
   */
  findByDate() {
    let date = new Date();
    let today: number[] = [date.getDate(), date.getMonth(), date.getFullYear()];
    this.appointmentService
      .getAppointmentsByDay(today)
      .subscribe((data) => (this.appointments = data));
  }

  /**
   * open a details page for appointment
   * @param appointment
   */
  viewAppointment(appointment: any) {
    this.appointmentService.viewAppointment(appointment);
  }
}
