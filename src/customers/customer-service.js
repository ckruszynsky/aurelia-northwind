import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class CustomerService {
  constructor(client){
    this.client = client;
  }
  createNew() {
      let customer = {
        CustomerID : '',
        CompanyName: '',
        ContactName: '',
        Address: '',
        PostalCode: '',
        Country: '',
        Phone: '',
        Fax: ''
      };

     let promise = Promise.resolve(customer);
     return promise;
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

  delete(Id){
    return this.client
            .fetch(`customers/${Id}`,{method: 'delete'});
  }
}
