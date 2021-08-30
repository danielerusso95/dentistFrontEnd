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

  /**
   * show details page for customer
   * @param customer
   */
  viewCustomer(customer: any) {
    this.router.navigate([`/viewCustomer`, customer.cf], {
      state: { ...customer },
    });
  }

  /**
   * find customer by cf
   * @param event
   * @param customers
   * @param inputCustomer
   * @returns
   */

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

  /**
   * insert customer
   * @param body
   * @returns
   */
  insertCustomer(body: any) {
    return this.http.post<any>(
      'http://localhost:8080/api/customer/insert',
      body
    );
  }

  /**
   * edit customer
   * @param event
   * @returns
   */
  editCustomer(customer: any, cf: string) {
    return this.http.put<any>(
      'http://localhost:8080/api/customer/edit/' + cf,
      customer
    );
  }

  /**
   * delete customer
   * @param event
   * @returns
   */
  deleteCustomer(customerCf: string) {
    return this.http.delete<any>(
      'http://localhost:8080/api/customer/delete/' + customerCf
    );
  }
}
