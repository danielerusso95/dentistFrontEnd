import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient, private _router: Router) {}

  /**
   * get alls appointments
   * @returns
   */
  getAllAppointments(): Observable<any> {
    return this.http.get<any>('http://localhost:8080//api/appointment/getAll');
  }

  /**
   *
   * @returns get alls appointments of localDate
   */
  getDailyAppointments() {
    let date = new Date();
    console.log(date.getMonth());
    let today: number[] = [date.getDate(), date.getMonth(), date.getFullYear()];
    return this.http.get<any>(
      'http://localhost:8080/api/appointment/getAllByDate/' +
        today[0] +
        '/' +
        today[1] +
        '/' +
        today[2]
    );
  }
  /**
   * show appointment
   */

  viewAppointment(appointment: any) {
    this._router.navigate([`/viewAppointment`, appointment.date], {
      state: { ...appointment },
    });
  }
}
