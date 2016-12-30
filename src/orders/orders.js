import {inject, computedFrom} from 'aurelia-framework';
import {OrderService} from './orders-service';

@inject(OrderService)
export default class Orders {
  orderService = null;
  orders = [];
  searchTerm = "";
  title = "Orders";
  
  constructor(orderService){
    this.orderService = orderService;
  }

  activate(params){
    if(params.customerId){        
      this.customerId = params.customerId;
      this.title = `${params.customerName} Orders`;
    }
    
    return Promise.all([this.loadOrders()]);
  }

  loadOrders(){
    if(this.customerId){
        return this.orderService
          .getCustomerOrders(this.customerId)
          .then(orders => this.orders = orders);
    }else{      
      return this.orderService
        .getOrders()
        .then(orders => this.orders = orders); 
    }
  }
  

  deleteOrder(order){
    return this.orderService
      .delete(order.OrderID)
      .then(resp => this.loadOrders());
  }

  clearSearch(){
    this.searchTerm = "";
    if(this.unfilteredOrders){
      this.orders = this.unfilteredOrders;
    }
  }

  search(){
    this.unfilteredOrders = this.orders;
    this.orders = this.orders.filter((order) => {
        let matches = this.orderSearch(this.searchTerm,order);
        return matches;
    });
  }

  orderSearch(searchExpression,order){
    if(!searchExpression || !order) return false;

    return order.CompanyName.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1  ||
    order.Employee.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1 || 
    order.Shipper.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;
  }
}
