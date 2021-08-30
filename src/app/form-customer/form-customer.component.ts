import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customerService/customer.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css'],
})
export class FormCustomerComponent implements OnInit {
  public flag = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * insert a customer with data from form
   * @param body
   */
  insertCustomer(body: any) {
    this.customerService.insertCustomer(body).subscribe(
      (data) => {
        this.flag = true;
        this.router.navigate(['/customer']).then(() => {
          window.location.reload();
        });
      },
      (error) => (this.flag = true)
    );
  }
}
