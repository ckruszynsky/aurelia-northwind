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
define('shell/shell',["exports"], function (exports) {
  "use strict";

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
    };

    return Shell;
  }();
});
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

  var Customers = exports.Customers = function () {
    function Customers() {
      _classCallCheck(this, Customers);

      this.customers = [];
    }

    Customers.prototype.activate = function activate() {};

    return Customers;
  }();
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
define('reportbuilder/helloWorld',["exports"], function (exports) {
   "use strict";

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
         console.log(modelData);
      };

      return HelloWorld;
   }();
});
define('reportbuilder/hello-world',["exports"], function (exports) {
   "use strict";

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
         console.log(modelData);
      };

      return HelloWorld;
   }();
});
define('shell/HelloWorld',["exports"], function (exports) {
  "use strict";

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
      console.log(modelData);
    };

    return HelloWorld;
  }();
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
      if (this.model.demo == 'test') {
        return 'alternative-hello-world.html';
      } else {
        return 'HelloWorld.html';
      }
    };

    return HelloWorld;
  }();
});
define('text!categories/categories.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Categories</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!orders/orders.html', ['module'], function(module) { module.exports = "<template>\n</template>\n"; });
define('text!products/products.html', ['module'], function(module) { module.exports = "<template> \n</template>\n"; });
define('text!customers/customer-details.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <div class=\"header\">\n      <h2>Customer Details</h2>\n    </div>    \n  </div>\n</template>\n"; });
define('text!customers/customers.html', ['module'], function(module) { module.exports = "<template>\n   \n</template>\n"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template>\n  <h1>Shell</h1>\n   <compose view-model=\"HelloWorld\"\n        model.bind=\"{demo: 'test'}\">\n     </compose>\n  <div class=\"page-host\">\n  </div>\n</template>\n"; });
define('text!shell/sidebar.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"main-nav\">\n    <ul class=\"nav nav-list\">\n      <li repeat.for=\"item of router.navigation\" class=\"${item.isActive ? 'active' : ''}\"> <!--One li per item in router.navigation; apply the active class if items.isActive-->\n        <a href.bind=\"item.href\"> <!--Bind the href to item.href-->\n          <i class=\"fa ${item.settings.icon}\"></i> <!--Add the icon class based on settings.-->\n        </a>\n      </li>\n    </ul>\n  </div>\n</template>\n"; });
define('text!customers/customerDetails.html', ['module'], function(module) { module.exports = "<template>  \n</template>\n"; });
define('text!reportbuilder/composeExample.html', ['module'], function(module) { module.exports = "<template>\n      <h1>Hello World</h1>\n      <compose view-model=\"HelloWorld\"\n        model.bind=\"{demo: test}\"\n        view=\"alternative-hello-world.html\">\n     </compose>\n      \n</template>\n"; });
define('text!reportbuilder/helloWorld.html', ['module'], function(module) { module.exports = "\n"; });
define('text!HelloWorld.html', ['module'], function(module) { module.exports = "<template>\n  Hello World\n</template>\n"; });
define('text!shell/alternative-hello-world.html', ['module'], function(module) { module.exports = ""; });
define('text!alternative-hello-world.html', ['module'], function(module) { module.exports = "<template>\n    Alternative Hello World\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map