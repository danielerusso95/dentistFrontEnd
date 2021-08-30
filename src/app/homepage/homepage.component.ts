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

  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.service.getDailyAppointments().subscribe(
      (data) => {
        this.appointments = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  viewAppointment(appointment: any) {
    this.service.viewAppointment(appointment);
  }
}
