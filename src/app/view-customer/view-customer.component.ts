import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../service/customerService/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
 
  public user:any;
  public newCustomer:any;
  
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.user=window.history.state;
  }

  updateCustomer(){
   this.http.put<any>("http://localhost:8080/api/customer/edit/"+this.user.cf,this.user).subscribe(data=>this.user=data)
  }

  setName(event:any){
    this.user.name=event.target.value
  }
  setSurname(event:any){
    this.user.surname=event.target.value
  }
  setEmail(event:any){
    this.user.email=event.target.value
  }
  setDob(event:any){
    this.user.dob=event.target.value
  }
  setCf(event:any){
    this.user.cf=event.target.value
  }
  setPhoneNumber(event:any){
    this.user.phoneNumber=event.target.value
  }
  deleteCustomer(){
    this.http.delete<any>("http://localhost:8080/api/customer/delete/"+this.user.cf).subscribe(data=>console.log(data));
    this.router.navigate(['/customer']).then(()=> { window.location.reload();
  });
  }





  


}
