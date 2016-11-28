import {inject} from 'aurelia-framework';
import {CustomerService} from './customer-service';


@inject(CustomerService)
export class Customers {
  customers = [];
  pages = [];  
  pageSize = 10;  
  currentPage = [];
  currentPageIndex = 0;
  
  constructor(customerService) {
    this.customerService = customerService;
  }

  activate() {
    return Promise.all([
      this.customerService .getCustomers().then(message => {
          var resp = JSON.parse(message.response);
          this.customers = resp.Customers;  
          this.setupPaging(this.customers);
         //n, (pageSize * n + 1)  -1
        })
    ]);    
  }

  setupPaging(data){
     this.pages = _.range(0,data.length, this.pageSize);
     this.goToPage(0);
  }

  goToPage(pageIndex){
    this.currentPageIndex = pageIndex;
    let minIndex = this.pages[pageIndex];
    let maxIndex = minIndex + this.pageSize - 1;
    this.currentPage = this.customers.slice(minIndex,maxIndex);
  }
  goToPreviousPage() {
    this.currentPageIndex = this.currentPageIndex - 1;
    this.goToPage(this.currentPageIndex);
  }

  goToNextPage() {
    this.currentPageIndex = this.currentPageIndex + 1;
    this.goToPage(this.currentPageIndex);
  }

  goToFirst(){
    this.currentPageIndex = 0;
    this.goToPage(this.currentPageIndex);
  }

  goToLast(){
   this.currentPageIndex = this.pages.length -1;
   this.goToPage(this.currentPageIndex);
  }
}
