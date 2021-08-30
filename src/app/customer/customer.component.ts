import { CustomerService } from './../service/customerService/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService],
})
export class CustomerComponent implements OnInit {
  public customers: any;

  public inputCustomer: any;

  public oneCustomer: any;

  constructor(private service: CustomerService) {}

  ngOnInit(): void {
    this.service.getAllCustomer().subscribe(
      (data) => (this.customers = data),
      (error) => console.log(error)
    );
  }

  /**
   * Redirect to details page of customer
   * @param customer
   */
  viewCustomer(customer: any) {
    this.service.viewCustomer(customer);
  }

  /**
   * find one customer by id (cf)
   * @param event
   */
  findById(event: any) {
    this.inputCustomer = event.target.value;
    this.oneCustomer = this.service.findById(
      event,
      this.customers,
      this.inputCustomer
    );
  }
}
