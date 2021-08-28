import { CustomerService } from './../service/customerService/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
 
  public customers:any;

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getAllCustomer().subscribe(data=>this.customers=data
      ,error=>console.log(error));
  }

}
