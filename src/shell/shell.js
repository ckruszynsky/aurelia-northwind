export class Shell {
  constructor(){

  }

  configureRouter(config,router){
    this.router = router;
    config.map([
      { route: ['', 'customers'], name: 'customers', moduleId: 'customers/index', title: 'Customers'},
      { route: 'customerDetail/:customerId', name: 'customerDetails', moduleId: 'customers/details', title: 'Customer Details' },
      { route: 'orders', name: 'orders', moduleId: 'orders/index', title: 'Orders',nav: true },
      { route: 'products', name: 'products', moduleId: 'products/index', title: 'Products', nav:true},
      { route: 'categories', name: 'categories', moduleId: 'category/index', title: 'Categories', nav:true }
    ]);
  }
}
