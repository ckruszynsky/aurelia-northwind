import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class regionService {
  constructor(client){
    this.client = client;
  }

  getorders() {
      return this.client
            .fetch("regions")
            .then(response => response.json());
  }  

  get(Id){
      return this.client
            .fetch(`regions/${Id}`)
            .then(response => response.json());   
  }

  update(region){
      return this.client
              .fetch(`regions/${region.RegionID}`,{method: 'put', body: json(region)})
              .then(() => this.get(region.RegionID));   
  }

  save(region){
      return this.client
              .fetch(`regions/${region.RegionID}`,{method: 'post', body: json(region)})
              .then(() => this.get(region.RegionID));
  }

  delete(Id){
    return this.client
            .fetch(`regions/${Id}`,{method: 'delete'})
            .then(() => this.getorders() );
  }
}
