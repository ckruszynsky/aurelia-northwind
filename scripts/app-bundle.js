define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('HelloWorld',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var HelloWorld = exports.HelloWorld = function () {
    function HelloWorld() {
      _classCallCheck(this, HelloWorld);
    }

    HelloWorld.prototype.activate = function activate(modelData) {
      this.model = modelData;
      console.log(modelData);
    };

    HelloWorld.prototype.getViewStrategy = function getViewStrategy() {
      alert("calling view strategy");
      if (this.model.demo == 'foo') {
        return 'alternative-hello-world.html';
      } else {
        return 'HelloWorld.html';
      }
    };

    return HelloWorld;
  }();
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot('shell/shell');
    });
  }
});
define('customers/customer-service',['exports', 'aurelia-framework', 'aurelia-http-client'], function (exports, _aureliaFramework, _aureliaHttpClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CustomerService = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CustomerService = exports.CustomerService = (_dec = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient), _dec(_class = function () {
    function CustomerService(httpClient) {
      _classCallCheck(this, CustomerService);

      this.httpClient = httpClient;
    }

    CustomerService.prototype.getCustomers = function getCustomers() {
      return this.httpClient.get("http://localhost:51340/customers?format=json");
    };

    CustomerService.prototype.getCustomer = function getCustomer(Id) {
      return this.httpClient.get("http://localhost:51340/customers/" + Id + "?format=json");
    };

    return CustomerService;
  }()) || _class);
});
define('customers/customerDetails',['exports', 'aurelia-framework', './customer-service'], function (exports, _aureliaFramework, _customerService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CustomerDetails = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CustomerDetails = exports.CustomerDetails = (_dec = (0, _aureliaFramework.inject)(_customerService.CustomerService), _dec(_class = function () {
    function CustomerDetails(customerService) {
      _classCallCheck(this, CustomerDetails);

      this.customer = {};

      this.customerService = customerService;
    }

    CustomerDetails.prototype.canActivate = function canActivate(params) {
      if (!params.customerId) {}
    };

    CustomerDetails.prototype.activate = function activate(params) {
      var _this = this;

      return Promise.all([this.customerService.getCustomer(params.customerId).then(function (message) {
        var resp = JSON.parse(message.response);
        _this.customer = resp.Customer;
      })]);
    };

    return CustomerDetails;
  }()) || _class);
});
define('customers/customers',['exports', 'aurelia-framework', './customer-service'], function (exports, _aureliaFramework, _customerService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Customers = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Customers = exports.Customers = (_dec = (0, _aureliaFramework.inject)(_customerService.CustomerService), _dec(_class = function () {
    function Customers(customerService) {
      _classCallCheck(this, Customers);

      this.customers = [];
      this.pages = [];
      this.pageSize = 10;
      this.currentPage = [];
      this.currentPageIndex = 0;

      this.customerService = customerService;
    }

    Customers.prototype.activate = function activate() {
      var _this = this;

      return Promise.all([this.customerService.getCustomers().then(function (message) {
        var resp = JSON.parse(message.response);
        _this.customers = resp.Customers;
        _this.setupPaging(_this.customers);
      })]);
    };

    Customers.prototype.setupPaging = function setupPaging(data) {
      this.pages = _.range(0, data.length, this.pageSize);
      this.goToPage(0);
    };

    Customers.prototype.goToPage = function goToPage(pageIndex) {
      this.currentPageIndex = pageIndex;
      var minIndex = this.pages[pageIndex];
      var maxIndex = minIndex + this.pageSize - 1;
      this.currentPage = this.customers.slice(minIndex, maxIndex);
    };

    Customers.prototype.goToPreviousPage = function goToPreviousPage() {
      this.currentPageIndex = this.currentPageIndex - 1;
      this.goToPage(this.currentPageIndex);
    };

    Customers.prototype.goToNextPage = function goToNextPage() {
      this.currentPageIndex = this.currentPageIndex + 1;
      this.goToPage(this.currentPageIndex);
    };

    Customers.prototype.goToFirst = function goToFirst() {
      this.currentPageIndex = 0;
      this.goToPage(this.currentPageIndex);
    };

    Customers.prototype.goToLast = function goToLast() {
      this.currentPageIndex = this.pages.length - 1;
      this.goToPage(this.currentPageIndex);
    };

    return Customers;
  }()) || _class);
});
define('categories/categories',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Categories = function Categories() {
    _classCallCheck(this, Categories);
  };

  exports.default = Categories;
});
define('orders/orders',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Orders = function Orders() {
    _classCallCheck(this, Orders);
  };

  exports.default = Orders;
});
define('products/products',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Products = function Products() {
    _classCallCheck(this, Products);
  };

  exports.default = Products;
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('shell/routes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    route: ['', 'customers'],
    name: 'customers',
    moduleId: 'customers/customers',
    title: 'Customers',
    settings: {
      icon: 'fa-address-card'
    },
    href: '#customers',
    nav: true
  }, {
    route: 'customerDetail/:customerId',
    name: 'customerDetails',
    moduleId: 'customers/customerDetails',
    title: 'Customer Details'
  }, {
    route: 'orders',
    name: 'orders',
    moduleId: 'orders/orders',
    title: 'Orders',
    nav: true,
    href: '#orders',
    settings: { icon: 'fa-cubes' }
  }, {
    route: 'products',
    name: 'products',
    moduleId: 'products/products',
    title: 'Products',
    nav: true,
    href: '#products',
    settings: { icon: 'fa-product-hunt' }
  }, {
    route: 'categories',
    name: 'categories',
    moduleId: 'categories/categories',
    title: 'Categories',
    href: '#categories',
    nav: true,
    settings: { icon: 'fa-tags' }
  }];
});
define('shell/shell',['exports', './routes'], function (exports, _routes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Shell = undefined;

  var _routes2 = _interopRequireDefault(_routes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Shell = exports.Shell = function () {
    function Shell() {
      _classCallCheck(this, Shell);
    }

    Shell.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(_routes2.default);
    };

    return Shell;
  }();
});
define('resources/elements/pager',['exports', 'aurelia-binding', 'aurelia-templating'], function (exports, _aureliaBinding, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Pager = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Pager = exports.Pager = (_dec = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), (_class = function () {
    function Pager() {
      _classCallCheck(this, Pager);

      _initDefineProp(this, 'model', _descriptor, this);

      _initDefineProp(this, 'pages', _descriptor2, this);

      _initDefineProp(this, 'pageSize', _descriptor3, this);

      _initDefineProp(this, 'refresh', _descriptor4, this);
    }

    Pager.prototype.bind = function bind(bindingContext) {
      this.model = this.model || bindingContext;
    };

    return Pager;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'model', [_dec, _aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pages', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 1;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 10;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'refresh', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class));
});
define('text!alternative-hello-world.html', ['module'], function(module) { module.exports = "<template>\n    Alternative Hello World\n</template>\n"; });
define('text!HelloWorld.html', ['module'], function(module) { module.exports = "<template>\n  Hello World\n</template>\n"; });
define('text!orders/orders.html', ['module'], function(module) { module.exports = "<template>\n</template>\n"; });
define('text!products/products.html', ['module'], function(module) { module.exports = "<template> \n</template>\n"; });
define('text!categories/categories.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Categories</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!customers/customerDetails.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <form>\n        <legend>Customer Information</legend>\n        <div class=\"form-group\">\n          <label for=\"CustomerId\">Customer Id:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.Id\" placeholder=\"Customer Id\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"CompanyName\">Company Name:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.CompanyName\" placeholder=\"Company Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"CompanyName\">Contact Name:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.ContactName\" placeholder=\"Contact Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Address\">Address:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.Address\" placeholder=\"Address\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"PostalCode\">Postal Code:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.PostalCode\" placeholder=\"Postal Code\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Country\">Country:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.Country\" placeholder=\"Country\">\n        </div>\n         <div class=\"form-group\">\n          <label for=\"Phone\">Phone:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.Phone\" placeholder=\"Phone\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Fax\">Fax:</label>\n          <input type=\"text\" class=\"form-control\" value.bind=\"customer.Fax\" placeholder=\"Fax\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\n          <a route-href=\"route: customers;\" class=\"btn btn-sm btn-primary\">Cancel</a>\n      </form>\n    </div>\n  </div>\n</template>\n"; });
define('text!customers/customers.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"page-header\">\n        <h1>Customers</h1>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>Company Name</th>\n          <th>Contact</th>\n          <th>Phone</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr repeat.for=\"customer of currentPage\">\n          <td>${customer.CompanyName}</td>\n          <td>${customer.ContactName}</td>\n          <td>${customer.Phone}</td>\n          <td>\n            <button class=\"btn btn-sm btn-danger\"><i class=\"fa fa-trash\"></i></button>\n            <a route-href=\"route: customerDetails; params.bind: {customerId: customer.Id}\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-pencil\"></i></button>\n            </td>\n          </tr>\n        </tbody>\n      </table>   \n      \n      <ul class=\"pagination\">\n        <li class.bind=\"currentPageIndex === 0 ? 'disabled' : ''\">\n          <a href=\"#\" click.delegate=\"goToFirst()\">\n            <i class=\"fa fa-fast-backward\"></i>\n          </a>\n            </li>\n            <li class.bind=\"currentPageIndex === 0 ? 'disabled' : ''\">\n              <a href=\"#\" click.delegate=\"goToPreviousPage()\">\n                <i class=\"fa fa-backward\"></i>\n              </a>\n            </li>\n            <li repeat.for=\"page of pages\" class.bind=\"$index === currentPageIndex ? 'active' : ''\">\n              <a href=\"#\" click.delegate=\"goToPage($index)\"> ${$index + 1}</a>\n            </li>\n            <li class.bind=\"currentPageIndex === pages.length-1 ? 'disabled' : ''\">\n              <a href=\"#\" click.delegate=\"goToNextPage()\">\n                <i class=\"fa fa-forward\"></i>\n              </a>\n            </li>\n            <li class.bind=\"currentPageIndex === pages.length-1 ? 'disabled' : ''\">\n              <a href=\"#\" click.delegate=\"goToLast()\">\n                <i class=\"fa fa-fast-forward\"></i>\n              </a>\n            </li>\n            </ul>\n  </div>\n</template>\n"; });
define('text!shell/header.html', ['module'], function(module) { module.exports = "<template>  \n  <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"http://northwindgrp.com/sites/northwindgrp.com/files/northwind-logo-reversed.png\" style=\"height:40px;\"/>\n      </a>\n    </div>\n  \n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"item of router.navigation\" class=\"${item.isActive ? 'active' : ''}\">\n          <a href.bind=\"item.href\">\n            <i class=\"fa ${item.settings.icon}\"></i> ${item.title}\n          </a>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-right\" role=\"search\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>      \n    </div><!-- /.navbar-collapse -->\n  </nav>  \n</template>\n"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template>\n  <compose view=\"./header.html\"></compose>\n  <div class=\"container\">\n    <router-view></router-view>\n  </div>\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map