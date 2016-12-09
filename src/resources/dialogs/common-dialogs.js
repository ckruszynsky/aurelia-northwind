import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {MessageBox} from './message-box';

@inject(DialogService)
export class CommonDialogs {
  constructor(dialogService){
    this.dialogService = dialogService;
  }

  showMessage(message,title="Message", options=['OK']){
    return this.dialogService.open({
      viewModel : MessageBox,
      model: { message, title, options}
    });
  }  
}
