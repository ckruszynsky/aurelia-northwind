import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class categoryService {
  constructor(client){
    this.client = client;
  }

  getorders() {
      return this.client
            .fetch("categories")
            .then(response => response.json());
  }  

  get(Id){
      return this.client
            .fetch(`categories/${Id}`)
            .then(response => response.json());   
  }

  update(category){
      return this.client
              .fetch(`categories/${category.CategoryID}`,{method: 'put', body: json(category)})
              .then(() => this.get(category.CategoryID));   
  }

  save(category){
      return this.client
              .fetch(`categories/${category.CategoryID}`,{method: 'post', body: json(category)})
              .then(() => this.get(category.CategoryID));
  }

  delete(Id){
    return this.client
            .fetch(`categories/${Id}`,{method: 'delete'})
            .then(() => this.getorders() );
  }
}
