import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class CustomerService {
  constructor(client){
    this.client = client;
  }

  getCustomers() {
      return this.client
            .fetch("customers")
            .then(response => response.json());
  }  

  get(Id){
      return this.client
            .fetch(`customers/${Id}`)
            .then(response => response.json());   
  }

  update(customer){
      return this.client
              .fetch(`customers/${customer.CustomerID}`,{method: 'put', body: json(customer)})
              .then(() => this.get(customer.CustomerID));   
  }

  save(customer){
      return this.client
              .fetch(`customers/${customer.CustomerID}`,{method: 'post', body: json(customer)})
              .then(() => this.get(customer.CustomerID));
  }

  delete(Id){
    return this.client
            .fetch(`customers/${Id}`,{method: 'delete'})
            .then(() => this.getCustomers() );
  }
}
