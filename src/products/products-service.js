import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class productService {
  constructor(client){
    this.client = client;
  }

  getorders() {
      return this.client
            .fetch("orders")
            .then(response => response.json());
  }  

  get(Id){
      return this.client
            .fetch(`orders/${Id}`)
            .then(response => response.json());   
  }

  update(product){
      return this.client
              .fetch(`orders/${product.ProductID}`,{method: 'put', body: json(product)})
              .then(() => this.get(product.ProductID));   
  }

  save(product){
      return this.client
              .fetch(`orders/${product.ProductID}`,{method: 'post', body: json(product)})
              .then(() => this.get(product.ProductID));
  }

  delete(Id){
    return this.client
            .fetch(`orders/${Id}`,{method: 'delete'})
            .then(() => this.getorders() );
  }
}
