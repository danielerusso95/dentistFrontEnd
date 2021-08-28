import { AppointmentService } from './../service/appointmentService/appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers:[AppointmentService]
})
export class AppointmentComponent implements OnInit {

  public appointments:any;

  constructor(public service:AppointmentService) { }

  ngOnInit(): void {
    this.service.getAllAppointments().subscribe(data=>this.appointments=data)
  }

}
