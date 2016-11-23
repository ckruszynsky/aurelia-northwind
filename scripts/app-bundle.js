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
define('customers/customer-details',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CustomerDetails = exports.CustomerDetails = function CustomerDetails() {
    _classCallCheck(this, CustomerDetails);
  };
});
define('customers/customer-service',['exports', 'aurelia-framework', 'aurelia-http-client'], function (exports, _aureliaFramework, _aureliaHttpClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CustomerService = (_dec = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient), _dec(_class = function () {
    function CustomerService(httpClient) {
      _classCallCheck(this, CustomerService);

      this.httpClient = httpClient;
    }

    CustomerService.prototype.getCustomers = function getCustomers() {
      return this.httpClient.get("http://localhost:51340/customers?format=json");
    };

    return CustomerService;
  }()) || _class);
  exports.default = CustomerService;
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
define('shell/shell',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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
      config.map([{ route: ['', 'customers'], name: 'customers', moduleId: 'customers/customers', title: 'Customers' }, { route: 'customerDetails/:id', name: 'customerDetails', moduleId: 'customers/customerDetails', title: 'Customer Details' }, { route: 'orders', name: 'orders', moduleId: 'orders/orders', title: 'Orders', nav: true }, { route: 'products', name: 'products', moduleId: 'products/products', title: 'Products', nav: true }, { route: 'categories', name: 'categories', moduleId: 'categories/categories', title: 'Categories', nav: true }]);
    };

    return Shell;
  }();
});
define('customers/customers',['exports', 'aurelia-framework', './customer-service'], function (exports, _aureliaFramework, _customerService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Customers = undefined;

  var _customerService2 = _interopRequireDefault(_customerService);

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

  var _dec, _class;

  var Customers = exports.Customers = (_dec = (0, _aureliaFramework.inject)(_customerService2.default), _dec(_class = function () {
    function Customers(customerService) {
      _classCallCheck(this, Customers);

      this.customers = [];

      this.title = "Customers";
      this.customerService = customerService;
    }

    Customers.prototype.activate = function activate() {
      var _this = this;

      return Promise.all([this.customerService.getCustomers().then(function (message) {
        return _this.customers = JSON.parse(message.response).Customers;
      })]);
    };

    Customers.prototype.getAvatar = function getAvatar() {
      var random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      return "//unsplash.it/50/50?image=" + random;
    };

    return Customers;
  }()) || _class);
});
define('customers/customerDetails',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CustomerDetails = exports.CustomerDetails = function CustomerDetails() {
    _classCallCheck(this, CustomerDetails);
  };
});
define('text!categories/categories.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Categories</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!orders/orders.html', ['module'], function(module) { module.exports = "<template>\n</template>\n"; });
define('text!products/products.html', ['module'], function(module) { module.exports = "<template> \n</template>\n"; });
define('text!customers/customer-details.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Customer Details</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!customers/customers.html', ['module'], function(module) { module.exports = "<template>\n   \n</template>\n"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!shell/sidebar.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"main-nav\">\n    <ul class=\"nav nav-list\">\n      <li repeat.for=\"item of router.navigation\" class=\"${item.isActive ? 'active' : ''}\"> <!--One li per item in router.navigation; apply the active class if items.isActive-->\n        <a href.bind=\"item.href\"> <!--Bind the href to item.href-->\n          <i class=\"fa ${item.settings.icon}\"></i> <!--Add the icon class based on settings.-->\n        </a>\n      </li>\n    </ul>\n  </div>\n</template>\n"; });
define('text!customers/customerDetails.html', ['module'], function(module) { module.exports = "<template>  \n</template>\n"; });
define('text!reportbuilder/composeExample.html', ['module'], function(module) { module.exports = "<template>\n      <h1>Hello World</h1>\n      <compose view-model=\"hello-world\"></compose>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map