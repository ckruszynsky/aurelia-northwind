import {inject} from 'aurelia-framework';
import {CustomerService} from './customer-service';

@inject(CustomerService)
export class CustomerDetails {
  customer = {};

  constructor(customerService) {
    this.customerService = customerService;
  }

  canActivate(params) {
    if (!params.customerId) {
      
    }
  }

  activate(params) {
    return Promise.all([
      this
        .customerService
        .getCustomer(params.customerId)
        .then(message => {
          var resp = JSON.parse(message.response);
          this.customer = resp.Customer;
        })
    ]);
  }
}
