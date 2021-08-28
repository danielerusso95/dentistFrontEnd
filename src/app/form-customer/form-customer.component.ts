import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {
  public user={name:'',surname:'',email:'',dob:'',phoneNumber:'',cf:''}

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  insertCustomer(){
   this.http.post<any>("http://localhost:8080/api/customer/insert",this.user).subscribe(data=>console.log(data))
   this.router.navigate(['/customer']).then(()=> { window.location.reload();
   });
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

}
