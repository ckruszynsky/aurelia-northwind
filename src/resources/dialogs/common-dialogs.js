import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {MessageBox} from './message-box';
import {Confirmation} from './confirmation'

@inject(DialogService)
export class CommonDialogs {
  constructor(dialogService){
    this.dialogService = dialogService;
  }

  showCustom(viewModel, model,options){
    return this.dialogService.open({
      viewModel : viewModel,
      model: model
    });
  }
  showMessage(message,title="Message", options=['OK']){
    return this.dialogService.open({
      viewModel : MessageBox,
      model: { message, title, options}
    });
  }  

  confirmation(message,title="Confirmation",options=['Yes','No']){
    return this.dialogService.open({
      viewModel: Confirmation,
      model: {message,title,options}
    });
  }
}
