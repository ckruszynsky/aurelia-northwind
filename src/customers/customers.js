import {inject,computedFrom} from 'aurelia-framework';
import {CustomerService} from './customer-service';

@inject(CustomerService)
export class Customers {
  customers = [];
 
  constructor(customerService) {
    this.customerService = customerService;
  }

  activate() {    
    
    return Promise.all([
      this.customerService.getCustomers()
        .then(message => {
          var resp = JSON.parse(message.response);
          this.customers = resp.Customers;         
        })
    ]);
  }  
}
