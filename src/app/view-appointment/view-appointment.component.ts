import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css'],
})
export class ViewAppointmentComponent implements OnInit {
  public appointment: any;
  public newAppointment: any;
  public update = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.appointment = window.history.state;
  }
  setName(event: any) {
    this.appointment.customer.name = event.target.value;
  }
  setSurname(event: any) {
    this.appointment.customer.surname = event.target.value;
  }
  setEmail(event: any) {
    this.appointment.customer.email = event.target.value;
  }
  setDate(event: any) {
    this.appointment.date = event.target.value;
  }
  setPhoneNumber(event: any) {
    this.appointment.customer.phoneNumber = event.target.value;
  }
  updateAppointment() {
    this.http
      .put<any>(
        'http://localhost:8080/api/appointment/edit/' + this.appointment.id,
        this.appointment
      )
      .subscribe(
        (data) => {
          this.appointment = data;
          this.router.navigate(['/appointment']).then(() => {
            window.location.reload();
          });
        },
        (error) => (this.update = true)
      );
  }
  deleteAppointment() {
    this.http
      .delete<any>(
        'http://localhost:8080/api/appointment/delete/' + this.appointment.id
      )
      .subscribe((data) => console.log(data));
    this.router.navigate(['/appointment']).then(() => {
      window.location.reload();
    });
  }
}
