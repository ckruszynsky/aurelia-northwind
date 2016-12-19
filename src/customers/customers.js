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
    ]);
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
    this.customers = this.customers.filter((customer) => {
        let matches = this.customerSearch(this.searchTerm,customer);
          return matches;
       });
  } 

  customerSearch(searchExpression,customer){
     if(!searchExpression || !customer) return false;

     return customer.CompanyName.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1 || 
     customer.CustomerID.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1 || 
     customer.ContactName.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;         
  } 
}
