import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export default class CustomerService {
  constructor(httpClient){
    this.httpClient = httpClient;
  }

  getCustomers() {
       return this.httpClient.get("http://localhost:51340/customers?format=json");
  }  
}
