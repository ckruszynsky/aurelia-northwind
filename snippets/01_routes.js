export default [
      { route: ['', 'customers'], name: 'customers', moduleId: 'customers/index', title: 'Customers', settings: { icon: 'fa-address-card'}},
      { route: 'customerDetail/:customerId', name: 'customerDetails', moduleId: 'customers/details', title: 'Customer Details' },
      { route: 'orders', name: 'orders', moduleId: 'orders/index', title: 'Orders',nav: true , {icon: 'fa-cubes'}},
      { route: 'products', name: 'products', moduleId: 'products/index', title: 'Products', nav:true, {icon: 'fa-product-hunt'}},
      { route: 'categories', name: 'categories', moduleId: 'category/index', title: 'Categories', nav:true,{ icon:'fa-tags' } }
];
