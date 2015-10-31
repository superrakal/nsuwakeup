/* jshint ignore:start */

/* jshint ignore:end */

define('frontend/adapters/application', ['exports', 'active-model-adapter'], function (exports, ActiveModelAdapter) {

  'use strict';

  exports['default'] = ActiveModelAdapter['default'].extend({
    namespace: 'api/v1'
  });

});
define('frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'frontend/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default'],
    rootElement: '#ember'
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  $(function () {
    var token;
    token = $('meta[name="csrf-token"]').attr('content');
    return $.ajaxPrefilter(function (options, originalOptions, xhr) {
      return xhr.setRequestHeader('X-CSRF-Token', token);
    });
  });

  exports['default'] = App;

});
define('frontend/components/syurup-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SyurupComponentComponent;

  SyurupComponentComponent = Ember['default'].Component.extend({
    _init: (function () {
      return this.set('preorder', this.get('model').get('firstObject'));
    }).on('didInsertElement'),
    isAdded: (function () {
      var i, isIn, j, preorder, ref, syurups;
      preorder = this.get('preorder');
      isIn = false;
      if (preorder) {
        syurups = preorder.get('syurups.currentState');
        if (syurups.length) {
          for (i = j = 0, ref = syurups.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            if (this.get('syurup.id') === syurups[i].id) {
              isIn = true;
            }
          }
        }
        return isIn;
      } else {
        return false;
      }
    }).property('preorder.syurups.length', 'preorder'),
    actions: {
      add: function add() {
        var preorder;
        preorder = this.get('preorder');
        return preorder.get('syurups').pushObject(this.get('syurup'));
      },
      remove: function remove() {
        var preorder;
        preorder = this.get('preorder');
        return preorder.get('syurups').removeObject(this.get('syurup'));
      }
    }
  });

  exports['default'] = SyurupComponentComponent;

});
define('frontend/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('frontend/controllers/coffee', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var CoffeeController;

  CoffeeController = Ember['default'].Controller.extend({
    actions: {
      choose: function choose(drink) {
        var preorder;
        preorder = this.model.get('firstObject');
        preorder.set('drink', drink);
        return this.transitionTo('syurup');
      }
    }
  });

  exports['default'] = CoffeeController;

});
define('frontend/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('frontend/controllers/root', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RootController;

  RootController = Ember['default'].Controller.extend({
    actions: {
      create_preorder: function create_preorder() {
        this.store.findAll('preorder').then((function (_this) {
          return function (preorders) {
            preorders.toArray().forEach(function (preorder) {
              return preorder.deleteRecord();
            });
            return _this.store.createRecord('preorder');
          };
        })(this));
        return this.transitionToRoute('coffee');
      }
    }
  });

  exports['default'] = RootController;

});
define('frontend/controllers/syurup', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SyurupController;

  SyurupController = Ember['default'].Controller.extend({
    actions: {
      confirm: function confirm() {
        var preorder;
        preorder = this.model.get('firstObject');
        return preorder.save();
      }
    }
  });

  exports['default'] = SyurupController;

});
define('frontend/initializers/active-model-adapter', ['exports', 'active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

  'use strict';

  exports['default'] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', ActiveModelAdapter['default']);
      application.register('serializer:-active-model', ActiveModelSerializer['default']);
    }
  };

});
define('frontend/initializers/export-application-global', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('frontend/instance-initializers/app-version', ['exports', 'frontend/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('frontend/models/drink', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Drink;

  Drink = DS['default'].Model.extend({
    price: DS['default'].attr('number'),
    volume: DS['default'].attr('number'),
    name: DS['default'].attr('string'),
    image: DS['default'].attr('string')
  });

  exports['default'] = Drink;

});
define('frontend/models/preorder', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Preorder;

  Preorder = DS['default'].Model.extend({
    drink: DS['default'].belongsTo('drink'),
    syurups: DS['default'].hasMany('syurup')
  });

  exports['default'] = Preorder;

});
define('frontend/models/syurup', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Syurup;

  Syurup = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    image: DS['default'].attr('string'),
    is_available: DS['default'].attr('boolean')
  });

  exports['default'] = Syurup;

});
define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router;

  Router = Ember['default'].Router.extend();

  Router.map(function () {
    this.route('root', {
      path: '/'
    });
    this.route('coffee');
    return this.route('syurup');
  });

  exports['default'] = Router;

});
define('frontend/routes/coffee', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var CoffeeRoute;

  CoffeeRoute = Ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      return this.store.find('drink');
    },
    model: function model() {
      return this.store.all('preorder');
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      return controller.set('drinks', this.store.all('drink'));
    }
  });

  exports['default'] = CoffeeRoute;

});
define('frontend/routes/confirm', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var ConfirmRoute;

	ConfirmRoute = Ember['default'].Route.extend();

	exports['default'] = ConfirmRoute;

});
define('frontend/routes/inform', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var InformRoute;

	InformRoute = Ember['default'].Route.extend();

	exports['default'] = InformRoute;

});
define('frontend/routes/root', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var RootRoute;

	RootRoute = Ember['default'].Route.extend();

	exports['default'] = RootRoute;

});
define('frontend/routes/syurup', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SyurupRoute;

  SyurupRoute = Ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      return this.store.find('syurup');
    },
    model: function model() {
      return this.store.all('preorder');
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      return controller.set('syurups', this.store.all('syurup'));
    }
  });

  exports['default'] = SyurupRoute;

});
define('frontend/serializers/preorder', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var PreorderSerializer;

  PreorderSerializer = DS['default'].ActiveModelSerializer.extend(DS['default'].EmbeddedRecordsMixin, {
    attrs: {
      syurups: {
        serialize: 'ids'
      }
    }
  });

  exports['default'] = PreorderSerializer;

});
define('frontend/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 754
          }
        },
        "moduleName": "frontend/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1,"role","navigation");
        dom.setAttribute(el1,"class","navbar navbar-default");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container-fluid");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"data-target","#top-menu");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"class","navbar-toggle collapsed");
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class","navbar-brand");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","small_logo");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"id","top-menu");
        dom.setAttribute(el3,"class","collapse navbar-collapse");
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","nav navbar-nav navbar-right");
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","dropdown");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"href","#");
        dom.setAttribute(el6,"class","dropdown-toggle");
        var el7 = dom.createTextNode("Мой аккаунт");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","caret");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6,"role","menu");
        dom.setAttribute(el6,"class","dropdown-menu");
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"href","#");
        var el9 = dom.createTextNode(" Выйти");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,744],[1,754]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/templates/coffee', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 75
            },
            "end": {
              "line": 1,
              "column": 582
            }
          },
          "moduleName": "frontend/templates/coffee.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-lg-3 col-md-4 col-sm-6 col-xs-12 item");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","panel panel-default text-center");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","panel-body");
          var el4 = dom.createElement("img");
          dom.setAttribute(el4,"class","img-responsive");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","additional");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","price pull-left");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" руб. (");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" мл.)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","action pull-right");
          var el6 = dom.createElement("button");
          dom.setAttribute(el6,"class","btn btn-success");
          var el7 = dom.createTextNode("Выбрать");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","panel-footer text-center");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0, 0]);
          var element1 = dom.childAt(element0, [0]);
          var element2 = dom.childAt(element1, [0]);
          var element3 = dom.childAt(element1, [1]);
          var element4 = dom.childAt(element3, [0]);
          var element5 = dom.childAt(element3, [1, 0]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element2, 'src');
          morphs[1] = dom.createMorphAt(element4,0,0);
          morphs[2] = dom.createMorphAt(element4,2,2);
          morphs[3] = dom.createElementMorph(element5);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          return morphs;
        },
        statements: [
          ["attribute","src",["get","drink.image",["loc",[null,[1,235],[1,246]]]]],
          ["content","drink.price",["loc",[null,[1,325],[1,340]]]],
          ["content","drink.volume",["loc",[null,[1,357],[1,373]]]],
          ["element","action",["choose",["get","drink",["loc",[null,[1,446],[1,451]]]]],[],["loc",[null,[1,428],[1,453]]]],
          ["content","drink.name",["loc",[null,[1,550],[1,564]]]]
        ],
        locals: ["drink"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 597
          }
        },
        "moduleName": "frontend/templates/coffee.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Выбор кофе");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","items");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","drinks",["loc",[null,[1,92],[1,98]]]]],[],0,null,["loc",[null,[1,75],[1,591]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('frontend/templates/components/syurup-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 226
            },
            "end": {
              "line": 1,
              "column": 262
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("В наличии");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 262
            },
            "end": {
              "line": 1,
              "column": 286
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Нет в наличии :(");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 330
            },
            "end": {
              "line": 1,
              "column": 411
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-danger");
          var el2 = dom.createTextNode("Убрать");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["element","action",["remove"],[],["loc",[null,[1,353],[1,372]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 411
            },
            "end": {
              "line": 1,
              "column": 485
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-success");
          var el2 = dom.createTextNode("Добавить");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["add"],[],["loc",[null,[1,427],[1,443]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 581
          }
        },
        "moduleName": "frontend/templates/components/syurup-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-lg-3 col-md-4 col-sm-6 col-xs-12 item");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel panel-default text-center");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-body");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"class","img-responsive");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","additional");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","price pull-left");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","action pull-right");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-footer text-center");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0, 0]);
        var element3 = dom.childAt(element2, [0]);
        var element4 = dom.childAt(element3, [0]);
        var element5 = dom.childAt(element3, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element4, 'src');
        morphs[1] = dom.createMorphAt(dom.childAt(element5, [0]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [1]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
        return morphs;
      },
      statements: [
        ["attribute","src",["get","syurup.image",["loc",[null,[1,135],[1,147]]]]],
        ["block","if",[["get","syurup.is_available",["loc",[null,[1,232],[1,251]]]]],[],0,1,["loc",[null,[1,226],[1,293]]]],
        ["block","if",[["get","isAdded",["loc",[null,[1,336],[1,343]]]]],[],2,3,["loc",[null,[1,330],[1,492]]]],
        ["content","syurup.name",["loc",[null,[1,548],[1,563]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('frontend/templates/confirm', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/confirm.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/templates/inform', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/inform.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/templates/root', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1484
          }
        },
        "moduleName": "frontend/templates/root.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","title text-center");
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Как оформить предзаказ?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","steps");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("1");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-coffee fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Выбрать кофе");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("2");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-eyedropper fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Выбрать сироп");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-file-text-o fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Оформить предзаказ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("4");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-thumbs-o-up fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Забрать заказ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","make_order text-center");
        var el3 = dom.createElement("button");
        dom.setAttribute(el3,"class","btn btn-lg btn-success");
        var el4 = dom.createTextNode("Оформить предзаказ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","reviews text-center");
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Оставьте отзыв!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group");
        var el5 = dom.createElement("textarea");
        dom.setAttribute(el5,"placeholder","Ваш отзыв...");
        dom.setAttribute(el5,"class","form-control");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","btn btn-success btn-lg");
        var el6 = dom.createTextNode("Отправить");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 2, 0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["element","action",["create_preorder"],[],["loc",[null,[1,1123],[1,1151]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/templates/syurup', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 81
            },
            "end": {
              "line": 1,
              "column": 154
            }
          },
          "moduleName": "frontend/templates/syurup.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["inline","syurup-component",[],["syurup",["subexpr","@mut",[["get","syurup",["loc",[null,[1,134],[1,140]]]]],[],[]],"model",["subexpr","@mut",[["get","model",["loc",[null,[1,147],[1,152]]]]],[],[]]],["loc",[null,[1,108],[1,154]]]]
        ],
        locals: ["syurup"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 285
          }
        },
        "moduleName": "frontend/templates/syurup.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Выбор сиропа(ов)");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","items");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","actions text-center");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","btn btn-lg btn-success");
        var el3 = dom.createTextNode("Оформить");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","syurups",["loc",[null,[1,99],[1,106]]]]],[],0,null,["loc",[null,[1,81],[1,163]]]],
        ["element","action",["confirm"],[],["loc",[null,[1,210],[1,230]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('frontend/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'frontend/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('frontend/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('frontend/tests/helpers/start-app', ['exports', 'ember', 'frontend/app', 'frontend/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('frontend/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('frontend/tests/integration/components/syurup-component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('syurup-component', 'Integration | Component | syurup component', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{syurup-component}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#syurup-component}}\n  template block text\n{{/syurup-component}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('frontend/tests/test-helper', ['frontend/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('frontend/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/controllers/coffee-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:coffee', {});

  ember_qunit.test('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });

});
define('frontend/tests/unit/controllers/root-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:root', {});

  ember_qunit.test('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });

});
define('frontend/tests/unit/controllers/syurup-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:syurup', {});

  ember_qunit.test('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });

});
define('frontend/tests/unit/models/drink-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('drink', 'Unit | Model | drink', {
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });

});
define('frontend/tests/unit/models/preorder-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('preorder', 'Unit | Model | preorder', {
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });

});
define('frontend/tests/unit/models/syurup-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('syurup', 'Unit | Model | syurup', {
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });

});
define('frontend/tests/unit/routes/coffee-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:coffee', 'Unit | Route | coffee', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});
define('frontend/tests/unit/routes/confirm-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:confirm', 'Unit | Route | confirm', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});
define('frontend/tests/unit/routes/inform-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:inform', 'Unit | Route | inform', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});
define('frontend/tests/unit/routes/preorder-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:preorder', 'Unit | Route | preorder', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});
define('frontend/tests/unit/routes/preorder.index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:preorder.index', 'Unit | Route | preorder.index', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});
define('frontend/tests/unit/routes/syurup-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:syurup', 'Unit | Route | syurup', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});
define('frontend/tests/unit/serializers/preorder-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('preorder', 'Unit | Serializer | preorder', {
    needs: ['serializer:preorder']
  });

  ember_qunit.test('it serializes records', function (assert) {
    var record, serializedRecord;
    record = this.subject();
    serializedRecord = record.serialize();
    return assert.ok(serializedRecord);
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('frontend/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"frontend","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"frontend","version":"0.0.0+3b605739"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","contentSecurityPolicy":{"default-src":"'none'","script-src":"'self' 'unsafe-eval'","font-src":"'self'","connect-src":"'self'","img-src":"'self'","style-src":"'self'","media-src":"'self'"},"exportApplicationGlobal":true}};
});

if (runningTests) {
  require("frontend/tests/test-helper");
} else {
  require("frontend/app")["default"].create({"name":"frontend","version":"0.0.0+3b605739"});
}

/* jshint ignore:end */
//# sourceMappingURL=frontend.map