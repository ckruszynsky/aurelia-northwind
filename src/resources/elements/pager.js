import {bindingMode} from 'aurelia-binding';
import {bindable} from 'aurelia-templating';

export class Pager {
  @bindable({defaultBindingMode: bindingMode.twoWay})
  @bindable model;
  @bindable pages = 1;
  @bindable pageSize =10;
  @bindable refresh;  
 
  bind(bindingContext){
    this.model = this.model || bindingContext;
  }
}
