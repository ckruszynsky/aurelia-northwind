import {inject,DOM,bindingMode,bindable,LogManager} from 'aurelia-framework';

const logger = LogManager.getLogger('pager');

@inject(DOM.Element)
export class Pager {
  @bindable currentPage = [];
  @bindable pageSize = 10;
  @bindable({defaultBindingMode: bindingMode.twoWay}) model =[];
  pages = [];
  currentPageIndex = 0;
  
  constructor(element){
    this.element = element;  
  }

  activated(){
    logger.debug('Pager Activated');
  }
  
  bind(bindingContext){
    this.model = this.model || bindingContext;
    this.configurePaging(this.model);
  }

  configurePaging(data){
    this.pages = _.range(0, data.length, this.pageSize);
    this.goToPage(0);
  }

  modelChanged(newVal,oldVal){
    this.pages = _.range(0, this.model.length, this.pageSize);
    this.goToPage(this.currentPageIndex);
  }

  
   goToPage(pageIndex) {
    this.currentPageIndex = pageIndex;
    let minIndex = this.pages[pageIndex];
    let maxIndex = minIndex + this.pageSize - 1;
    this.currentPage = this.model.slice(minIndex, maxIndex);
  }

  goToPreviousPage() {
    if (this.currentPageIndex !== 0) {
      this.currentPageIndex = this.currentPageIndex - 1;
      this.goToPage(this.currentPageIndex);
    }
  }

  goToNextPage() {
    if (this.currentPageIndex !== this.pages.length - 1) {
      this.currentPageIndex = this.currentPageIndex + 1;
      this.goToPage(this.currentPageIndex);
    }

  }

  goToFirst() {
    this.currentPageIndex = 0;
    this.goToPage(this.currentPageIndex);
  }

  goToLast() {
    this.currentPageIndex = this.pages.length - 1;
    this.goToPage(this.currentPageIndex);
  }
  
 
}
