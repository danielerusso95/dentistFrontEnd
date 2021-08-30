import { CustomerService } from './../service/customerService/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
 
  public customers:any;

  public inputCustomer:any;

  public oneCustomer:any;

  constructor(private service:CustomerService,
    private _router: Router) { 
      
    }

  ngOnInit(): void {
    this.service.getAllCustomer().subscribe(data=>this.customers=data
      ,error=>console.log(error));
  }
  // ngAfterViewChecked() {
  //   this.service.getAllCustomer().subscribe(data=>this.customers=data
  //     ,error=>console.log(error));
  // }
  
  

  /**
   * ROTTE PARAMETRICHE PER PASSARLO DA UN COMPONENTE ALL'ALTRO
   * @param customer 
   */
  viewCustomer(customer:any) {
    this._router.navigate([`/viewCustomer`,customer.cf] , {state:{...customer} }); 
   }

   findById(event:any){   
    this.inputCustomer=event.target.value;   
    for(let i=0;i<this.customers.length;i++){
      if(this.customers[i].cf==this.inputCustomer){
       this.oneCustomer=this.customers[i]
      }else if(this.inputCustomer.length==0){
        this.oneCustomer=null;
      }
    }
   }
}
