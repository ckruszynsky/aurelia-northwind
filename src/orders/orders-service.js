import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class OrderService {
  constructor(client){
    this.client = client;
  }

  getOrders() {
      return this.client
            .fetch("orders")
            .then(response => response.json());
  }  

  getCustomerOrders(customerId){
    return this.client
          .fetch(`customers/${customerId}/orders`)
          .then(response => response.json());
  }

  get(Id){
      return this.client
            .fetch(`orders/${Id}`)
            .then(response => response.json());   
  }

  update(order){
      return this.client
              .fetch(`orders/${order.OrderID}`,{method: 'put', body: json(order)})
              .then(() => this.get(order.OrderID));   
  }

  save(order){
      return this.client
              .fetch(`orders/${order.OrderID}`,{method: 'post', body: json(order)})
              .then(() => this.get(order.OrderID));
  }

  delete(Id){
    return this.client
            .fetch(`orders/${Id}`,{method: 'delete'});
  }
}
