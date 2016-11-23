import {inject} from 'aurelia-framework';
import CustomerService from './customer-service';

@inject(CustomerService)
export class Customers {
  customers = [];

  constructor(customerService){
    this.title = "Customers";
    this.customerService = customerService;
  }

  activate(){
    return Promise.all([
        this.customerService.getCustomers().then(message =>this.customers = JSON.parse(message.response).Customers)
    ]);
  }

  getAvatar(){
    var random = Math.floor(Math.random() *(10-1+1)+1);
    return "//unsplash.it/50/50?image="+ random;
  }
}
