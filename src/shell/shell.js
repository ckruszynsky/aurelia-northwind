import routes from './routes';


export class Shell {

  constructor(){
  }

  configureRouter(config,router){
    this.router = router;
    config.map(routes);
  }
}
