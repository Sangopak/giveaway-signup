import { Component, OnInit } from '@angular/core';
import { Customer } from './../model/customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }
  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
      this.customerService.getCustomers()
	    .subscribe( customers => this.customers = customers);
   }

  onSubmit(){
    console.log("Customer data added");
  }

  onClear(){
    console.log("Data cleared");
  }
}
