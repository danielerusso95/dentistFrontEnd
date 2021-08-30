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
  getAppointmentsByDay(day: any) {
    console.log(day);
    return this.http.get<any>(
      'http://localhost:8080/api/appointment/getAllByDate/' +
        day[0] +
        '/' +
        day[1] +
        '/' +
        day[2]
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
  /**
   *
   * @returns post an appointment
   */
  insertAppointment(body: any) {
    return this.http.post<any>(
      'http://localhost:8080/api/appointment/insert',
      body
    );
  }
}
