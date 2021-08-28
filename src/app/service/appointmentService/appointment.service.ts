import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  /**
   * get alls appointments
   * @returns 
   */
  getAllAppointments():Observable<any>{
   return this.http.get<any>("http://localhost:8080//api/appointment/getAll");
  }

  /**
   * 
   * @returns get alls appointments of localDate
   */
  getDailyAppointments(){
    let date = new Date();
    let today:number[]=[date.getDate(),date.getMonth()+1,date.getFullYear()] 
    return this.http.get<any>("http://localhost:8080/api/appointment/getAllByDate/"+today[0]+"/"+today[1]+"/"+today[2]);
  }
  /**
   * update 
   */

}
