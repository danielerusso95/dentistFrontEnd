import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../service/customerService/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  public user: any;
  public newCustomer: any;
  public update = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = window.history.state;
  }

  onSubmit(body: any) {
    this.updateCustomer(body);
  }

  updateCustomer(body: any) {
    this.customerService.editCustomer(body).subscribe(
      (data) => {
        this.user = data;
        this.router.navigate(['/customer']).then(() => {
          window.location.reload();
        });
      },
      (error) => (this.update = true)
    );
  }

  deleteCustomer(user: any) {
    this.customerService
      .deleteCustomer(user.cf)
      .subscribe((data) => console.log(data));
    this.router.navigate(['/customer']).then(() => {
      window.location.reload();
    });
  }
}
