import {inject, computedFrom} from 'aurelia-framework';
import {CustomerService} from './customer-service';

@inject(CustomerService)
export class Customers {
  customers = [];
  searchTerm = "";

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

  clearSearch(){
      this.searchTerm = "";

      if(this.allCustomers){
        this.customers = this.allCustomers;        
      }
  }

  search(){
    this.allCustomers = this.customers;
    this.customers = this.customers.filter((item) => {
        let matches = this.customerSearch(this.searchTerm,item.CompanyName);
          return matches;
       });
  } 
  
  customerSearch(searchExpression,value){
     if(!searchExpression || !value) return false;
     return value.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;
  }
}
