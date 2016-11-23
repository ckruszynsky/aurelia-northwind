export class HelloWorld {
  constructor(){
    
  }

  activate(modelData) {
    this.model = modelData;
    console.log(modelData); // --> { demo: 'test' }
  }
  
  getViewStrategy(){
    if(this.model.demo == 'test'){
          return 'alternative-hello-world.html';
    }else{
      return 'HelloWorld.html';
    }
  }
}
