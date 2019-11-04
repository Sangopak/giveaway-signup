import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = "http://localhost:3000/customers";
  constructor(private http:Http) { }

  getCustomers(): Observable<Customer[]> {
        return this.http.get(this.url)
		        .map(this.extractData)
		        .catch(this.handleErrorObservable);
    }

	addCustomers(customer:Customer): Observable<Customer> {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, customer, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
	}

	private extractData(res: Response) {
	    let body = res.json();
        return body || {};
    }

  private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }

}
