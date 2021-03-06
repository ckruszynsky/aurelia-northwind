import {inject} from 'aurelia-framework';
import {ValidationControllerFactory, validateTrigger} from 'aurelia-validation';
import {BootstrapFormRenderer} from 'resources/renderer/bootstrap-form-renderer';
import {CustomerValidationRules} from './customer-validation-rules';
import {CustomerService} from './customer-service';
import {CommonDialogs} from '../resources/dialogs/common-dialogs';

@inject(CustomerService,ValidationControllerFactory,CustomerValidationRules,CommonDialogs)
export class CustomerDetails {
  customer = {};
  controller = null;



  constructor(customerService,controllerFactory,customerValidationRules,dialog) {
    this.validationRules = customerValidationRules;
    this.customerService = customerService;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.validateTrigger  = validateTrigger.blur;
    this.dialog = dialog;
    this.controller.addRenderer(new BootstrapFormRenderer());
  }

  bind(){
    this.validationRules.getRules(this.customer);
  }

  activate(params) {
    if(params.customerId !== "new"){
        return Promise.all([ 
          this.customerService.get(params.customerId).then(data => this.customer = data)      
      ]).bind(this);      
    }else{
      return Promise.all([
          this.customerService.createNew().then(data=> this.customer = data)
      ]);
    }

  }

  canDeactivate(){
  }

  cancel() {
    this.controller.reset();
  }
  
  save(){

      this.controller.validate().then(errors=> {
          if(errors.length == 0){
            this.customerService
              .update(this.customer)
              .then(resp => {
                this.customer = resp
                this.dialog.showMessage('Customer Saved Successfully!', "Customer Save Successful");
              });
          }
      });
  }
}


