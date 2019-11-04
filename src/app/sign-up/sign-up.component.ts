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
  firstName: string;
  lastName: string;
  emailId: string;
  id: number;
  errorMessage: string;
  customer: Customer;

  constructor(private customerService: CustomerService) { }
  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
      this.customerService.getCustomers()
	    .subscribe( customers => this.customers = customers);
   }

  onSubmit(){
    this.customer = new Customer(this.firstName,this.lastName,this.emailId);
     this.customerService.addCustomers(this.customer)
	     .subscribe( customer => {
					                  this.fetchCustomers();
                            this.reset();
                            this.id = Math.floor((Math.random() * 1000) + 1);
		                        this.firstName = customer.firstName;
		                        this.lastName = customer.lastName;
		                        this.emailId = customer.emailId;
					  },
                     error => this.errorMessage = <any>error);
    console.log("Customer data added with the data as !!");
    console.log(this.customer);
  }

  reset(){
    this.firstName = null;
    this.lastName = null;
    this.emailId = null;
    this.errorMessage = null;
  }

  onClear(){
    this.reset();
    console.log("Data cleared");
  }
}
