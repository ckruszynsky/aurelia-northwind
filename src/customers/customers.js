import {inject, computedFrom} from 'aurelia-framework';
import {CustomerService} from './customer-service';

@inject(CustomerService)
export class Customers {
  customers = [];

  constructor(customerService) {
    this.customerService = customerService;
  }

  activate() {
    return Promise.all([
      this.loadCustomers()
    ]).bind(this);
  }

  loadCustomers(){
    return this.customerService
          .getCustomers()
          .then(data =>{ 
            this.customers = data
          });
  }
  
  deleteCustomer(customer){
     return this.customerService
              .delete(customer.CustomerID)
              .then(() => this.loadCustomers());
  }
}
