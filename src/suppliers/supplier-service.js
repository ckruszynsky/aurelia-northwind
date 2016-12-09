import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class supplierService {
  constructor(client){
    this.client = client;
  }

  getorders() {
      return this.client
            .fetch("shippers")
            .then(response => response.json());
  }  

  get(Id){
      return this.client
            .fetch(`shippers/${Id}`)
            .then(response => response.json());   
  }

  update(supplier){
      return this.client
              .fetch(`shippers/${supplier.SupplierID}`,{method: 'put', body: json(supplier)})
              .then(() => this.get(supplier.SupplierID));   
  }

  save(supplier){
      return this.client
              .fetch(`shippers/${supplier.SupplierID}`,{method: 'post', body: json(supplier)})
              .then(() => this.get(supplier.SupplierID));
  }

  delete(Id){
    return this.client
            .fetch(`shippers/${Id}`,{method: 'delete'})
            .then(() => this.getorders() );
  }
}
