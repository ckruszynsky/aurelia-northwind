export class HelloWorld {
  constructor(){
    
  }

  activate(modelData) {
    this.model = modelData;
    console.log(modelData); // --> { demo: 'test' }
  }
  
  getViewStrategy(){
    alert("calling view strategy");
    if(this.model.demo == 'foo'){
          return 'alternative-hello-world.html';
    }else{
      return 'HelloWorld.html';
    }
  }
}
