import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) {}

    /**
   * get alls customer
   * @returns 
   */
     getAllCustomer():Observable<any>{
      return this.http.get<any>("http://localhost:8080//api/customer/getAll");
     }


}
