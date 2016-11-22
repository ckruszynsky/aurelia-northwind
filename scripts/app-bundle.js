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

  var CustomerDetails = function CustomerDetails() {
    _classCallCheck(this, CustomerDetails);
  };

  exports.default = CustomerDetails;
});
define('customers/customers-service',[], function () {});
define('customers/customers',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Customers = exports.Customers = function Customers() {
    _classCallCheck(this, Customers);

    this.title = "Customers";
  };
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
      config.map([{ route: ['', 'customers'], name: 'customers', moduleId: 'customers/customers', title: 'Customers' }, { route: 'customerDetail/:customerId', name: 'customerDetails', moduleId: 'customers/customerDetails', title: 'Customer Details' }, { route: 'orders', name: 'orders', moduleId: 'orders/orders', title: 'Orders', nav: true }, { route: 'products', name: 'products', moduleId: 'products/products', title: 'Products', nav: true }, { route: 'categories', name: 'categories', moduleId: 'categories/categories', title: 'Categories', nav: true }]);
    };

    return Shell;
  }();
});
define('text!customers/customer-details.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Customer Details</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!customers/customers.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Customers</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!orders/orders.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Orders</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!categories/categories.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Categories</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!products/products.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Products</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template>\n  <compose view=\"./sidebar.html\"></compose>\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map