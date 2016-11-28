import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class CustomerService {
  constructor(httpClient){
    this.httpClient = httpClient;
  }

  getCustomers() {
      return this.httpClient.get("http://localhost:51340/customers?format=json");            
  }  

  getCustomer(Id){
    return this.httpClient.get("http://localhost:51340/customers/"+ Id + "?format=json");
  }
}
