import routes from './routes';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Shell {
  
  constructor(httpClient){
      httpClient.rejectErrorResponses = true;
      httpClient.configure(config => {
          config.withBaseUrl("http://localhost:7790/api/")
           
      });
      this.httpClient = httpClient;
  }

  configureRouter(config,router){
    this.router = router;
    config.map(routes);
  }
}
