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
define('frontend/components/comments-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var CommentsComponentComponent;

  CommentsComponentComponent = Ember['default'].Component.extend({
    _init: (function () {
      return VK.Widgets.Comments("vk_comments", {
        limit: 15,
        width: $('.container').width() - 50,
        attach: "*"
      });
    }).on('didInsertElement')
  });

  exports['default'] = CommentsComponentComponent;

});
define('frontend/components/syurup-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SyurupComponentComponent;

  SyurupComponentComponent = Ember['default'].Component.extend({
    isAdded: (function () {
      var i, isIn, j, preorder, ref, syurups;
      preorder = this.get('preorder');
      isIn = false;
      if (preorder) {
        syurups = preorder.get('syurups.content.currentState');
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
        this.model.set('drink', drink);
        return this.model.save().then((function (_this) {
          return function () {
            return _this.transitionTo('syurup');
          };
        })(this));
      }
    }
  });

  exports['default'] = CoffeeController;

});
define('frontend/controllers/inform', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var InformController;

  InformController = Ember['default'].Controller.extend({
    isConfirmed: false,
    isConfirming: false,
    actions: {
      confirm: function confirm() {
        this.set('isConfirming', true);
        return this.model.save().then((function (_this) {
          return function () {
            return Ember['default'].$.ajax({
              type: 'GET',
              url: "/api/v1/preorders/new?id=" + _this.model.id,
              async: false,
              success: function success() {
                _this.set('isConfirmed', true);
                return _this.set('isConfirming', false);
              }
            });
          };
        })(this));
      }
    }
  });

  exports['default'] = InformController;

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
        return this.store.findAll('preorder').then((function (_this) {
          return function (preorders) {
            var preorder;
            preorders.toArray().forEach(function (preorder) {
              return preorder.deleteRecord();
            });
            preorder = _this.store.createRecord('preorder');
            return preorder.save().then(function () {
              cookie.set('preorder_id', preorder.get('id'));
              return _this.transitionToRoute('coffee');
            });
          };
        })(this));
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
        return this.model.save().then((function (_this) {
          return function () {
            return _this.transitionToRoute('inform');
          };
        })(this));
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
    comments: DS['default'].attr('string'),
    drink: DS['default'].belongsTo('drink', {
      async: true
    }),
    syurups: DS['default'].hasMany('syurup', {
      async: true
    })
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
    this.route('syurup');
    return this.route('inform');
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
      var id;
      id = cookie.get('preorder_id');
      return this.store.find('preorder', id);
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      return controller.set('drinks', this.store.all('drink'));
    }
  });

  exports['default'] = CoffeeRoute;

});
define('frontend/routes/inform', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var InformRoute;

  InformRoute = Ember['default'].Route.extend({
    model: function model() {
      var id;
      id = cookie.get('preorder_id');
      return this.store.find('preorder', id);
    }
  });

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
      var id;
      id = cookie.get('preorder_id');
      return this.store.find('preorder', id);
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
            "column": 10
          }
        },
        "moduleName": "frontend/templates/application.hbs"
      },
      arity: 0,
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
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
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
define('frontend/templates/components/comments-component', ['exports'], function (exports) {

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
            "column": 51
          }
        },
        "moduleName": "frontend/templates/components/comments-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","vk_comments");
        dom.setAttribute(el1,"style","margin: 0 auto");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
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
define('frontend/templates/inform', ['exports'], function (exports) {

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
              "column": 680
            },
            "end": {
              "line": 1,
              "column": 734
            }
          },
          "moduleName": "frontend/templates/inform.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
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
          ["content","syurup.name",["loc",[null,[1,713],[1,728]]]]
        ],
        locals: ["syurup"],
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
              "column": 1358
            },
            "end": {
              "line": 1,
              "column": 1674
            }
          },
          "moduleName": "frontend/templates/inform.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"role","alert");
          dom.setAttribute(el1,"class","alert alert-success alert-dismissible fade in");
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"aria-label","Close");
          dom.setAttribute(el2,"data-dismiss","alert");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","close");
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"aria-hidden","true");
          var el4 = dom.createTextNode(" ×");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Ваш заказ принят. Заберите его у точки выдачи вовремя!  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("Хорошего дня :)");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
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
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 1682
              },
              "end": {
                "line": 1,
                "column": 1752
              }
            },
            "moduleName": "frontend/templates/inform.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-circle-o-notch fa-spin fa-3x");
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
                "column": 1752
              },
              "end": {
                "line": 1,
                "column": 1850
              }
            },
            "moduleName": "frontend/templates/inform.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","btn btn-success btn-lg");
            var el2 = dom.createTextNode("Подтвердить предзаказ");
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
            ["element","action",["confirm"],[],["loc",[null,[1,1768],[1,1788]]]]
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
              "column": 1674
            },
            "end": {
              "line": 1,
              "column": 1857
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
          ["block","if",[["get","isConfirming",["loc",[null,[1,1688],[1,1700]]]]],[],0,1,["loc",[null,[1,1682],[1,1857]]]]
        ],
        locals: [],
        templates: [child0, child1]
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
            "column": 2336
          }
        },
        "moduleName": "frontend/templates/inform.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Подтверждение предзаказа");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("id Заказа");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("Кофе");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" (");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" мл.)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("Сироп(ы)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("Стоимость");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" руб.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12 comments text-center");
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Вы можете оставить комментарий к заказу.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("small");
        var el3 = dom.createTextNode("Если у Вас есть скидочная карта, то скидка предоставляется при личной демонстрации наличия карты.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12 confirm_preorder text-center");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12");
        var el2 = dom.createElement("blockquote");
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Огласим некоторые правила. Ваш предзаказ доступен к выдаче в течении двух часов с момента оформления и, соответственно, изготовления.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Если Вы не забрали свой заказ в указанный срок, то он автоматически анулируется, кофе выливается, а Вы добавляетесь в черный список нашего заведения.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("При оплате штрафа за ложный предзаказ Вы убираетесь из черного списка.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("footer");
        var el4 = dom.createTextNode("Команда WakeUp! Coffee");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [1, 0, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [0, 0, 1]),0,0);
        morphs[1] = dom.createMorphAt(element2,0,0);
        morphs[2] = dom.createMorphAt(element2,2,2);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [2, 0, 1]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [3, 0, 1]),0,0);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]),4,4);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
        return morphs;
      },
      statements: [
        ["content","model.id",["loc",[null,[1,255],[1,267]]]],
        ["content","model.drink.name",["loc",[null,[1,442],[1,462]]]],
        ["content","model.drink.volume",["loc",[null,[1,469],[1,491]]]],
        ["block","each",[["get","model.syurups",["loc",[null,[1,698],[1,711]]]]],[],0,null,["loc",[null,[1,680],[1,743]]]],
        ["content","model.drink.price",["loc",[null,[1,923],[1,944]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","model.comments",["loc",[null,[1,1208],[1,1222]]]]],[],[]],"placeholder","Оставьте Ваши пожелания и мы постараемся их воплотить в жизнь"],["loc",[null,[1,1191],[1,1300]]]],
        ["block","if",[["get","isConfirmed",["loc",[null,[1,1364],[1,1375]]]]],[],1,2,["loc",[null,[1,1358],[1,1864]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
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
            "column": 1346
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
        dom.setAttribute(el3,"class","mark-style");
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
        dom.setAttribute(el2,"class","comments text-center");
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","mark-style");
        var el4 = dom.createTextNode("Оставьте отзыв!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [2, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        return morphs;
      },
      statements: [
        ["element","action",["create_preorder"],[],["loc",[null,[1,1142],[1,1170]]]],
        ["content","comments-component",["loc",[null,[1,1312],[1,1334]]]]
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
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 184
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
          ["inline","syurup-component",[],["syurup",["subexpr","@mut",[["get","syurup",["loc",[null,[1,161],[1,167]]]]],[],[]],"preorder",["subexpr","@mut",[["get","model",["loc",[null,[1,177],[1,182]]]]],[],[]]],["loc",[null,[1,135],[1,184]]]]
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
            "column": 336
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
        dom.setAttribute(el1,"class","items col-md-12");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","text-center");
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","btn btn-lg btn-success");
        var el5 = dom.createTextNode("Оформить");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1, 0, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [0]),0,0);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","syurups",["loc",[null,[1,126],[1,133]]]]],[],0,null,["loc",[null,[1,108],[1,193]]]],
        ["element","action",["confirm"],[],["loc",[null,[1,249],[1,269]]]]
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
define('frontend/tests/integration/components/comments-component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('comments-component', 'Integration | Component | comments component', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{comments-component}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#comments-component}}\n  template block text\n{{/comments-component}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
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
define('frontend/tests/unit/controllers/inform-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:inform', {});

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
  return { 'default': {"modulePrefix":"frontend","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"frontend","version":"0.0.0+653d8f87"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","contentSecurityPolicy":{"default-src":"'none'","script-src":"'self' 'unsafe-eval'","font-src":"'self'","connect-src":"'self'","img-src":"'self'","style-src":"'self'","media-src":"'self'"},"exportApplicationGlobal":true}};
});

if (runningTests) {
  require("frontend/tests/test-helper");
} else {
  require("frontend/app")["default"].create({"name":"frontend","version":"0.0.0+653d8f87"});
}

/* jshint ignore:end */
//# sourceMappingURL=frontend.map