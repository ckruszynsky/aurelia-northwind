import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class territoryService {
  constructor(client){
    this.client = client;
  }

  getorders() {
      return this.client
            .fetch("territories")
            .then(response => response.json());
  }  

  get(Id){
      return this.client
            .fetch(`territories/${Id}`)
            .then(response => response.json());   
  }

  update(territory){
      return this.client
              .fetch(`territories/${territory.TerritoryID}`,{method: 'put', body: json(territory)})
              .then(() => this.get(territory.TerritoryID));   
  }

  save(territory){
      return this.client
              .fetch(`territories/${territory.TerritoryID}`,{method: 'post', body: json(territory)})
              .then(() => this.get(territory.TerritoryID));
  }

  delete(Id){
    return this.client
            .fetch(`territories/${Id}`,{method: 'delete'})
            .then(() => this.getorders() );
  }
}
