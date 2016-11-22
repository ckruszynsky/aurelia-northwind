export default [
      { route: ['', 'customers'], name: 'customers', moduleId: 'customers/customers', title: 'Customers', settings: { icon: 'fa-address-card'}},
      { route: 'customerDetail/:customerId', name: 'customerDetails', moduleId: 'customers/customerDetails', title: 'Customer Details' },
      { route: 'orders', name: 'orders', moduleId: 'orders/orders', title: 'Orders',nav: true , {icon: 'fa-cubes'}},
      { route: 'products', name: 'products', moduleId: 'products/products', title: 'Products', nav:true, {icon: 'fa-product-hunt'}},
      { route: 'categories', name: 'categories', moduleId: 'categories/categories', title: 'Categories', nav:true,{ icon:'fa-tags' } }
];
