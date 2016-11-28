export default[
  {
    route : [ '', 'customers'],
    name : 'customers',
    moduleId : 'customers/customers',
    title : 'Customers',
    settings : {
      icon: 'fa-address-card'
    },
    href: '#customers',
    nav:true
  }, 
  {
    route : 'customerDetail/:customerId',
    name : 'customerDetails',
    moduleId : 'customers/customerDetails',
    title : 'Customer Details'
  }, 
  {
    route : 'orders',
    name : 'orders',
    moduleId : 'orders/orders',
    title : 'Orders',
    nav : true, 
    href:'#orders',
    settings: {icon: 'fa-cubes'}
  }, 
  {
    route : 'products',
    name : 'products',
    moduleId : 'products/products',
    title : 'Products',
    nav : true, 
    href: '#products',
    settings: {icon: 'fa-product-hunt'}
  }, 
  {
    route : 'categories',
    name : 'categories',
    moduleId : 'categories/categories',    
    title : 'Categories',
    href: '#categories',
    nav : true, 
    settings: {icon: 'fa-tags'}
  }
];
