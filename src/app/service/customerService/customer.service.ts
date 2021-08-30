import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * get alls customer
   * @returns
   */
  getAllCustomer(): Observable<any> {
    return this.http.get<any>('http://localhost:8080//api/customer/getAll');
  }

  viewCustomer(customer: any) {
    this.router.navigate([`/viewCustomer`, customer.cf], {
      state: { ...customer },
    });
  }

  findById(event: any, customers: any, inputCustomer: string) {
    let oneCustomer: any;
    inputCustomer = event.target.value;
    for (let i = 0; i < customers.length; i++) {
      if (customers[i].cf == inputCustomer) {
        oneCustomer = customers[i];
      } else if (inputCustomer.length == 0) {
        oneCustomer = null;
      }
    }
    return oneCustomer;
  }
}
