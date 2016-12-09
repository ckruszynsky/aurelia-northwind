import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class shipperService {
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

  update(shipper){
      return this.client
              .fetch(`shippers/${shipper.ShipperID}`,{method: 'put', body: json(shipper)})
              .then(() => this.get(shipper.ShipperID));   
  }

  save(shipper){
      return this.client
              .fetch(`shippers/${shipper.ShipperID}`,{method: 'post', body: json(shipper)})
              .then(() => this.get(shipper.ShipperID));
  }

  delete(Id){
    return this.client
            .fetch(`shippers/${Id}`,{method: 'delete'})
            .then(() => this.getorders() );
  }
}
