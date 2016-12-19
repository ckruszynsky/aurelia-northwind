import {inject, DOM, bindable, LogManager} from 'aurelia-framework';
import Spinner from "Spinner"
const logger = LogManager.getLogger('button-spinner');

@inject(DOM.Element)
export class PromiseButton {
  @bindable Value = "Sample";
  _disabled = false;  
  spinnerOpts = {};

  get isDisabled() {
    return this._disabled;
  }
  constructor(element) {
    this.element = element; 
  }

  bind(bindingContext) {
    logger.debug('binding Promise button');
  }

  attached(){
    this.elementRect = this.element.getBoundingClientRect();
    this.origWidth = this.elementRect.width;
    this.origHeight = this.elementRect.height;
        
    this.spinnerOpts = {
      length: Math.round(this.elementRect.height /3),
      radius: Math.round(this.elementRect.height / 3),
      width:  Math.round(this.elementRect.height / 10),
      scale: 1,
      top:this.elementRect.top,
      left:3,
      color: 'white'
    };
  }
  click($event) {
    this._disabled = true;
    let tempWidth = this.origWidth;
    let tempHeight =  (this.origHeight + 30); 
    var oldValue = this.Value;

    $event.target.style.width = tempWidth + "px";
    $event.target.style.height = tempHeight + "px";

    this.Value = "";
    var spinner = new Spinner(this.spinnerOpts).spin($event.target);
  
    var promise = new Promise((resolve,reject) => {
       setTimeout(resolve,1000);
    }).bind(this);

    promise.then(function(){
       this.Value = oldValue;
       spinner.stop();
       this._disabled = false;
       $event.target.style.width = this.origWidth;
       $event.target.style.height = this.origHeight;
    });

  } 
}
