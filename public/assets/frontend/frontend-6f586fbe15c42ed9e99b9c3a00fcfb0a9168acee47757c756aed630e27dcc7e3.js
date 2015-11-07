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
define('frontend/components/menu-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MenuComponentComponent;

  MenuComponentComponent = Ember['default'].Component.extend({
    _initialize: (function () {
      return this.$('.ui.dropdown').dropdown();
    }).on('didInsertElement'),
    actions: {
      sign_out: function sign_out() {
        return Ember['default'].$.ajax({
          type: 'DELETE',
          url: "/users/sign_out",
          async: false,
          success: (function (_this) {
            return function () {
              return location.replace('/');
            };
          })(this)
        });
      }
    }
  });

  exports['default'] = MenuComponentComponent;

});
define('frontend/components/steps-component', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var StepsComponentComponent;

	StepsComponentComponent = Ember['default'].Component.extend();

	exports['default'] = StepsComponentComponent;

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
define('frontend/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var ApplicationController;

	ApplicationController = Ember['default'].Controller.extend();

	exports['default'] = ApplicationController;

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
    socketIOService: Ember['default'].inject.service('socket-io'),
    init: function init() {
      this._super.apply(this, arguments);
      return this.socket = this.get('socketIOService').socketFor('http://nsuwakeup.ru:1488/');
    },
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
                _this.set('isConfirming', false);
                return _this.socket.emit('preorder added');
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
define('frontend/controllers/queue', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var QueueController;

  QueueController = Ember['default'].Controller.extend({
    socketIOService: Ember['default'].inject.service('socket-io'),
    init: function init() {
      this._super.apply(this, arguments);
      ion.sound({
        sounds: [{
          name: 'bell_ring'
        }],
        path: '/sounds/',
        preload: true
      });
      this.socket = this.get('socketIOService').socketFor('http://nsuwakeup.ru:1488/');
      return this.socket.on('update preorders list', (function (_this) {
        return function () {
          ion.sound.play("bell_ring");
          return _this.send("socket_event");
        };
      })(this));
    },
    actions: {
      done: function done(preorder) {
        preorder.set('status', 'Выдан');
        return preorder.save().then(function () {
          return location.reload();
        });
      }
    }
  });

  exports['default'] = QueueController;

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
define('frontend/initializers/session', ['exports', 'simple-auth/session'], function (exports, Session) {

  'use strict';

  var CurrentUserInitializer, initialize;

  initialize = function (container, application) {
    window.App = application;
    return Session['default'].reopen({
      currentUser: (function () {
        var id;
        id = null;
        Ember.$.ajax({
          type: 'GET',
          url: "/welcome/current_user_id",
          async: false,
          success: (function (_this) {
            return function (data) {
              return id = data.current_user_id;
            };
          })(this)
        });
        return container.lookup('store:main').find('user', id);
      }).property()
    });
  };

  CurrentUserInitializer = {
    name: 'currentUser',
    before: 'simple-auth',
    initialize: initialize
  };

  exports['default'] = CurrentUserInitializer;

  exports.initialize = initialize;

});
define('frontend/initializers/simple-auth', ['exports', 'simple-auth/configuration', 'simple-auth/setup', 'frontend/config/environment'], function (exports, Configuration, setup, ENV) {

  'use strict';

  exports['default'] = {
    name: 'simple-auth',
    initialize: function initialize(container, application) {
      Configuration['default'].load(container, ENV['default']['simple-auth'] || {});
      setup['default'](container, application);
    }
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
    status: DS['default'].attr('string'),
    created_at: DS['default'].attr('string'),
    number: DS['default'].attr('number'),
    drink: DS['default'].belongsTo('drink', {
      async: true
    }),
    user: DS['default'].belongsTo('user', {
      async: true
    }),
    syurups: DS['default'].hasMany('syurup', {
      async: true
    }),
    formatted_created_at: (function () {
      var date, format;
      date = this.get('created_at');
      format = "Do MMMM YYYY, h:mm:ss";
      return moment(date).locale('ru').format(format);
    }).property('created_at')
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
define('frontend/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var User;

  User = DS['default'].Model.extend({
    first_name: DS['default'].attr('string'),
    last_name: DS['default'].attr('string'),
    vk_photo: DS['default'].attr('string'),
    vk_screen_name: DS['default'].attr('string'),
    is_admin: DS['default'].attr('boolean')
  });

  exports['default'] = User;

});
define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router;

  Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('root', {
      path: '/'
    });
    this.route('coffee');
    this.route('syurup');
    this.route('inform');
    return this.route('queue');
  });

  exports['default'] = Router;

});
define('frontend/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationRoute;

  ApplicationRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.get('session.currentUser');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = ApplicationRoute;

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
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = InformRoute;

});
define('frontend/routes/queue', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var QueueRoute;

  QueueRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.store.find('preorder');
    },
    setupController: function setupController(controller, model) {
      controller.set('preorders', model);
      return controller.set('currentUser', this.get('session.currentUser'));
    },
    actions: {
      socket_event: function socket_event() {
        return this.refresh();
      }
    }
  });

  exports['default'] = QueueRoute;

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
define('frontend/services/primus', ['exports', 'ember', 'ember-websockets/helpers/primus-proxy'], function (exports, Ember, PrimusProxy) {

  'use strict';

  var forEach = Array.prototype.forEach;
  var filter = Array.prototype.filter;
  var isArray = Ember['default'].isArray;

  exports['default'] = Ember['default'].Service.extend({
    /*
    * Each element in the array is of the form:
    *
    * {
    *    url: 'string'
    *    socket: Primus Proxy object
    * }
    */
    sockets: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.sockets = Ember['default'].A();
    },

    /*
    * socketFor returns a primus client proxy object. On this object there is a property `socket`
    * which contains the actual primus client object. This primus client object is cached based off of the url meaning
    * multiple requests for the same socket will return the same object.
    */
    socketFor: function socketFor(url) {
      var protocols = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      var proxy = this.findSocketInCache(this.get('sockets'), url);

      if (proxy && this.primusIsNotClosed(proxy.socket)) {
        return proxy.socket;
      }

      if (!isArray(protocols)) {
        protocols = [protocols];
      }

      proxy = PrimusProxy['default'].create({
        content: this,
        protocols: protocols,
        socket: Primus.connect(url, {
          reconnect: {
            max: Infinity,
            min: 500,
            retries: 10
          }
        })
      });

      // If there is an existing socket in place we simply update the primus client object and not
      // the whole proxy as we dont want to destroy the previous listeners.
      var existingSocket = this.findSocketInCache(this.get('sockets'), url);
      if (existingSocket) {
        existingSocket.socket.socket = proxy.socket;
        return existingSocket.socket;
      } else {
        this.get('sockets').pushObject({
          'url': url,
          socket: proxy
        });
      }

      return proxy;
    },

    /*
    * closeSocketFor closes the socket for a given url.
    */
    closeSocketFor: function closeSocketFor(url) {
      var _this = this;

      var filteredSockets = [];

      forEach.call(this.get('sockets'), function (item) {
        if (item.url === _this.normalizeURL(url)) {
          item.socket.close();
        } else {
          filteredSockets.push(item);
        }
      });
      this.set('sockets', Ember['default'].A(filteredSockets));
    },

    /*
    * The native websocket object will transform urls without a pathname to have just a /.
    * As an example: ws://localhost:8080 would actually be ws://localhost:8080/ but ws://example.com/foo would not
    * change. This function does this transformation to stay inline with the native websocket implementation.
    */
    normalizeURL: function normalizeURL(url) {
      var parsedUrl = new URI(url);

      if (parsedUrl.path() === '/' && url.slice(-1) !== '/') {
        return url + '/';
      }

      return url;
    },

    primusIsNotClosed: function primusIsNotClosed(websocket) {
      return true;
      //return websocket.socket.readyState !== window.WebSocket.CLOSED;
    },

    /*
    * Returns the socket object from the cache if one matches the url else undefined
    */
    findSocketInCache: function findSocketInCache(socketsCache, url) {
      var _this2 = this;

      var cachedResults = filter.call(socketsCache, function (websocket) {
        return websocket['url'] === _this2.normalizeURL(url);
      });

      if (cachedResults.length > 0) {
        return cachedResults[0];
      }
    }
  });

});
define('frontend/services/socket-io', ['exports', 'ember', 'ember-websockets/helpers/socketio-proxy'], function (exports, Ember, SocketIOProxy) {

  'use strict';

  var filter = Array.prototype.filter;
  var forEach = Array.prototype.forEach;

  exports['default'] = Ember['default'].Service.extend({
    /*
    * Each element in the array is of the form:
    *
    * {
    *    url: 'string'
    *    socket: SocketIO Proxy object
    * }
    */
    sockets: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.sockets = Ember['default'].A();
    },

    /*
    * socketFor returns a socketio proxy object. On this object there is a property `socket`
    * which contains the actual socketio object. This socketio object is cached based off of the
    * url meaning multiple requests for the same socket will return the same object.
    */
    socketFor: function socketFor(url) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var proxy = this.findSocketInCache(this.get('sockets'), url);

      if (proxy && this.socketIsNotClosed(proxy.socket)) {
        return proxy.socket;
      }

      proxy = SocketIOProxy['default'].create({
        content: this,
        socket: io(this.normalizeURL(url), options)
      });

      proxy.socket.connect();

      this.get('sockets').pushObject({
        url: this.normalizeURL(url),
        socket: proxy
      });

      return proxy;
    },

    /*
    * The native websocket object will transform urls without a pathname to have just a /.
    * As an example: ws://localhost:8080 would actually be ws://localhost:8080/ but ws://example.com/foo would not
    * change. This function does this transformation to stay inline with the native websocket implementation.
    *
    */
    normalizeURL: function normalizeURL(url) {
      var parsedUrl = new URI(url);

      if (parsedUrl.path() === '/' && url.slice(-1) !== '/') {
        return url + '/';
      }

      return url;
    },

    socketIsNotClosed: function socketIsNotClosed(socket) {
      return socket.socket.io.readyState !== 'closed';
    },

    /*
    * closeSocketFor closes the socket for a given url.
    */
    closeSocketFor: function closeSocketFor(url) {
      var _this = this;

      var filteredSockets = [];

      forEach.call(this.get('sockets'), function (item) {
        if (item.url === _this.normalizeURL(url)) {
          item.socket.close();
          item.socket.socket.removeAllListeners();
        } else {
          filteredSockets.push(item);
        }
      });

      this.set('sockets', Ember['default'].A(filteredSockets));
    },

    /*
    * Returns the socket object from the cache if one matches the url else undefined
    */
    findSocketInCache: function findSocketInCache(socketsCache, url) {
      var _this2 = this;

      var cachedResults = filter.call(socketsCache, function (websocket) {
        return websocket['url'] === _this2.normalizeURL(url);
      });

      if (cachedResults.length > 0) {
        return cachedResults[0];
      }
    }
  });

});
define('frontend/services/websockets', ['exports', 'ember', 'ember-websockets/helpers/websocket-proxy'], function (exports, Ember, WebsocketProxy) {

  'use strict';

  var forEach = Array.prototype.forEach;
  var filter = Array.prototype.filter;
  var isArray = Ember['default'].isArray;

  exports['default'] = Ember['default'].Service.extend({
    /*
    * Each element in the array is of the form:
    *
    * {
    *    url: 'string'
    *    socket: WebSocket Proxy object
    * }
    */
    sockets: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.sockets = Ember['default'].A();
    },

    /*
    * socketFor returns a websocket proxy object. On this object there is a property `socket`
    * which contains the actual websocket object. This websocket object is cached based off of the url meaning
    * multiple requests for the same socket will return the same object.
    */
    socketFor: function socketFor(url) {
      var protocols = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      var proxy = this.findSocketInCache(this.get('sockets'), url);

      if (proxy && this.websocketIsNotClosed(proxy.socket)) {
        return proxy.socket;
      }

      // Websockets allows either a string or array of strings to be passed as the second argument.
      // This normalizes both cases into one where they are all arrays of strings and if you just pass
      // a single string it becomes an array of one.
      if (!isArray(protocols)) {
        protocols = [protocols];
      }

      proxy = WebsocketProxy['default'].create({
        content: this,
        protocols: protocols,
        socket: new WebSocket(this.normalizeURL(url), protocols)
      });

      // If there is an existing socket in place we simply update the websocket object and not
      // the whole proxy as we dont want to destroy the previous listeners.
      var existingSocket = this.findSocketInCache(this.get('sockets'), url);
      if (existingSocket) {
        existingSocket.socket.socket = proxy.socket;
        return existingSocket.socket;
      } else {
        this.get('sockets').pushObject({
          url: proxy.socket.url,
          socket: proxy
        });
      }

      return proxy;
    },

    /*
    * closeSocketFor closes the socket for a given url.
    */
    closeSocketFor: function closeSocketFor(url) {
      var _this = this;

      var filteredSockets = [];

      forEach.call(this.get('sockets'), function (item) {
        if (item.url === _this.normalizeURL(url)) {
          item.socket.close();
        } else {
          filteredSockets.push(item);
        }
      });

      this.set('sockets', Ember['default'].A(filteredSockets));
    },

    /*
    * The native websocket object will transform urls without a pathname to have just a /.
    * As an example: ws://localhost:8080 would actually be ws://localhost:8080/ but ws://example.com/foo would not
    * change. This function does this transformation to stay inline with the native websocket implementation.
    */
    normalizeURL: function normalizeURL(url) {
      var parsedUrl = new URI(url);

      if (parsedUrl.path() === '/' && url.slice(-1) !== '/') {
        return url + '/';
      }

      return url;
    },

    websocketIsNotClosed: function websocketIsNotClosed(websocket) {
      return websocket.socket.readyState !== window.WebSocket.CLOSED;
    },

    /*
    * Returns the socket object from the cache if one matches the url else undefined
    */
    findSocketInCache: function findSocketInCache(socketsCache, url) {
      var _this2 = this;

      var cachedResults = filter.call(socketsCache, function (websocket) {
        return websocket['url'] === _this2.normalizeURL(url);
      });

      if (cachedResults.length > 0) {
        return cachedResults[0];
      }
    }
  });

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
            "column": 40
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","menu-component",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,23],[1,28]]]]],[],[]]],["loc",[null,[1,0],[1,30]]]],
        ["content","outlet",["loc",[null,[1,30],[1,40]]]]
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
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 574
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
          dom.setAttribute(el1,"class","ui card");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","image");
          var el3 = dom.createElement("img");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","content");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3,"class","header");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","meta");
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","date");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" мл.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","description");
          var el4 = dom.createTextNode("Цена ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("  руб.");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","extra content text-center");
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"class","ui button mint");
          var el4 = dom.createTextNode("Выбрать");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [0, 0]);
          var element2 = dom.childAt(element0, [1]);
          var element3 = dom.childAt(element0, [2, 0]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [0]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1, 0]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element2, [2]),1,1);
          morphs[4] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [
          ["attribute","src",["get","drink.image",["loc",[null,[1,225],[1,236]]]]],
          ["content","drink.name",["loc",[null,[1,284],[1,298]]]],
          ["content","drink.volume",["loc",[null,[1,339],[1,355]]]],
          ["content","drink.price",["loc",[null,[1,412],[1,427]]]],
          ["element","action",["choose",["get","drink",["loc",[null,[1,515],[1,520]]]]],[],["loc",[null,[1,497],[1,522]]]]
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
            "column": 605
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
        dom.setAttribute(el1,"class","ui container");
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","title text-center");
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4,"class","ui header");
        var el5 = dom.createTextNode("Выбор кофе");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ui three stackable cards");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0, 1]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","drinks",["loc",[null,[1,155],[1,161]]]]],[],0,null,["loc",[null,[1,147],[1,583]]]]
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
define('frontend/templates/components/menu-component', ['exports'], function (exports) {

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
            "column": 408
          }
        },
        "moduleName": "frontend/templates/components/menu-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui large menu");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","/");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","small_logo");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","right menu");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ui dropdown item");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"class","ui avatar image");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","dropdown icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","menu");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","/queue");
        dom.setAttribute(el5,"class","item");
        var el6 = dom.createTextNode("Очередь предзаказов");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","item");
        var el6 = dom.createTextNode("Выйти");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 0]);
        var element1 = dom.childAt(element0, [0]);
        var element2 = dom.childAt(element0, [1]);
        var element3 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element1, 'src');
        morphs[1] = dom.createMorphAt(element2,0,0);
        morphs[2] = dom.createMorphAt(element2,2,2);
        morphs[3] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [
        ["attribute","src",["get","model.vk_photo",["loc",[null,[1,138],[1,152]]]]],
        ["content","model.first_name",["loc",[null,[1,185],[1,205]]]],
        ["content","model.last_name",["loc",[null,[1,211],[1,230]]]],
        ["element","action",["sign_out"],[],["loc",[null,[1,340],[1,361]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/templates/components/steps-component', ['exports'], function (exports) {

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
            "column": 458
          }
        },
        "moduleName": "frontend/templates/components/steps-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui last container");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","ui three steps");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","step");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","fa fa-coffee icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","content");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","title");
        var el6 = dom.createTextNode("Выберите кофе");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","step");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","fa fa-eyedropper icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","content");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","title");
        var el6 = dom.createTextNode("Добавьте сироп(ы)");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","step");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","fa fa-file-text-o icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","content");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","title");
        var el6 = dom.createTextNode("Подтвердите предзаказ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
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
  }()));

});
define('frontend/templates/components/syurup-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 27
              },
              "end": {
                "line": 1,
                "column": 107
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
            dom.setAttribute(el1,"class","ui button red");
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
            ["element","action",["remove"],[],["loc",[null,[1,50],[1,69]]]]
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
                "column": 107
              },
              "end": {
                "line": 1,
                "column": 180
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
            dom.setAttribute(el1,"class","ui button mint");
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
            ["element","action",["add"],[],["loc",[null,[1,123],[1,139]]]]
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
              "column": 187
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
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
          ["block","if",[["get","isAdded",["loc",[null,[1,33],[1,40]]]]],[],0,1,["loc",[null,[1,27],[1,187]]]]
        ],
        locals: [],
        templates: [child0, child1]
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
              "column": 187
            },
            "end": {
              "line": 1,
              "column": 252
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
          dom.setAttribute(el1,"class","ui button mint disabled");
          var el2 = dom.createTextNode("Добавить");
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
            "column": 259
          }
        },
        "moduleName": "frontend/templates/components/syurup-component.hbs"
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
        ["block","if",[["get","syurup.is_available",["loc",[null,[1,6],[1,25]]]]],[],0,1,["loc",[null,[1,0],[1,259]]]]
      ],
      locals: [],
      templates: [child0, child1]
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
              "column": 382
            },
            "end": {
              "line": 1,
              "column": 450
            }
          },
          "moduleName": "frontend/templates/inform.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("span");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("; ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
          return morphs;
        },
        statements: [
          ["content","syurup.name",["loc",[null,[1,421],[1,436]]]]
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
              "column": 885
            },
            "end": {
              "line": 1,
              "column": 1044
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
          dom.setAttribute(el1,"class","ui success message");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","header");
          var el3 = dom.createTextNode("Ваш заказ принят. Заберите его у точки выдачи вовремя!");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
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
                "column": 1052
              },
              "end": {
                "line": 1,
                "column": 1134
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
            dom.setAttribute(el1,"class","ui mint loading button huge");
            var el2 = dom.createTextNode("Оформляем");
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
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 1134
              },
              "end": {
                "line": 1,
                "column": 1328
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
            dom.setAttribute(el1,"tabindex","0");
            dom.setAttribute(el1,"class","ui animated fade button mint huge");
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","visible content");
            var el3 = dom.createTextNode("Подтвердить предзаказ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","hidden content");
            var el3 = dom.createTextNode("Заказать!");
            dom.appendChild(el2, el3);
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
            ["element","action",["confirm"],[],["loc",[null,[1,1147],[1,1167]]]]
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
              "column": 1044
            },
            "end": {
              "line": 1,
              "column": 1335
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
          ["block","if",[["get","isConfirming",["loc",[null,[1,1058],[1,1070]]]]],[],0,1,["loc",[null,[1,1052],[1,1335]]]]
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
            "column": 1878
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
        dom.setAttribute(el1,"class","ui container text-center");
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","title text-center");
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4,"class","ui huge");
        var el5 = dom.createTextNode("Подтверждение предзаказа");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"class","ui tablet stackable table");
        var el3 = dom.createElement("thead");
        var el4 = dom.createElement("tr");
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("id заказа");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Кофе");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Сироп(ы)");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Стоимость");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createElement("tr");
        var el5 = dom.createElement("td");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" (");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" мл.)");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" руб.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2,"class","ui huge");
        var el3 = dom.createTextNode("Вы можете оставить комментарий к заказу.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Если у Вас есть скидочная карта, то скидка предоставляется при личной демонстрации наличия карты.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","ui form");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","field");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12");
        var el3 = dom.createElement("blockquote");
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Огласим некоторые правила. Ваш предзаказ доступен к выдаче в течении двух часов с момента оформления и, соответственно, изготовления.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Если Вы не забрали свой заказ в указанный срок, то он автоматически анулируется, кофе выливается, а Вы добавляетесь в черный список нашего заведения.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("При оплате штрафа за ложный предзаказ Вы убираетесь из черного списка.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4,"class","ui horizontal divider header");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-coffee icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("WakeUp! Coffee");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1, 1, 0]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [0]),0,0);
        morphs[1] = dom.createMorphAt(element3,0,0);
        morphs[2] = dom.createMorphAt(element3,2,2);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [2]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [4, 0]),0,0);
        morphs[6] = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
        return morphs;
      },
      statements: [
        ["content","model.number",["loc",[null,[1,289],[1,305]]]],
        ["content","model.drink.name",["loc",[null,[1,314],[1,334]]]],
        ["content","model.drink.volume",["loc",[null,[1,341],[1,363]]]],
        ["block","each",[["get","model.syurups",["loc",[null,[1,400],[1,413]]]]],[],0,null,["loc",[null,[1,382],[1,459]]]],
        ["content","model.drink.price",["loc",[null,[1,468],[1,489]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","model.comments",["loc",[null,[1,751],[1,765]]]]],[],[]],"placeholder","Оставьте Ваши пожелания и мы постараемся их воплотить в жизнь","disabled",["subexpr","@mut",[["get","isConfirmed",["loc",[null,[1,851],[1,862]]]]],[],[]]],["loc",[null,[1,734],[1,864]]]],
        ["block","if",[["get","isConfirmed",["loc",[null,[1,891],[1,902]]]]],[],1,2,["loc",[null,[1,885],[1,1342]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('frontend/templates/mypreorders', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 986
              },
              "end": {
                "line": 1,
                "column": 1078
              }
            },
            "moduleName": "frontend/templates/mypreorders.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","label label-success");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
            return morphs;
          },
          statements: [
            ["content","syurup.name",["loc",[null,[1,1056],[1,1071]]]]
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
              "column": 106
            },
            "end": {
              "line": 1,
              "column": 1359
            }
          },
          "moduleName": "frontend/templates/mypreorders.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","preorder");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","title");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","pull-left");
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("Статус предзаказа: ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","pull-right");
          var el4 = dom.createElement("p");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","clearfix");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-md-12");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("id Заказа");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("Кофе");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" (");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" мл.)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("Сироп(ы)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("Стоимость");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" руб.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","clearfix");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [0]);
          var element2 = dom.childAt(element0, [1]);
          var element3 = dom.childAt(element2, [1, 0, 1]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [0, 0]),1,1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [0, 0, 1]),0,0);
          morphs[3] = dom.createMorphAt(element3,0,0);
          morphs[4] = dom.createMorphAt(element3,2,2);
          morphs[5] = dom.createMorphAt(dom.childAt(element2, [2, 0, 1]),0,0);
          morphs[6] = dom.createMorphAt(dom.childAt(element2, [3, 0, 1]),0,0);
          return morphs;
        },
        statements: [
          ["content","preorder.status",["loc",[null,[1,234],[1,253]]]],
          ["content","preorder.formatted_created_at",["loc",[null,[1,290],[1,323]]]],
          ["content","preorder.id",["loc",[null,[1,552],[1,567]]]],
          ["content","preorder.drink.name",["loc",[null,[1,742],[1,765]]]],
          ["content","preorder.drink.volume",["loc",[null,[1,772],[1,797]]]],
          ["block","each",[["get","preorder.syurups",["loc",[null,[1,1004],[1,1020]]]]],[],0,null,["loc",[null,[1,986],[1,1087]]]],
          ["content","preorder.drink.price",["loc",[null,[1,1267],[1,1291]]]]
        ],
        locals: ["preorder"],
        templates: [child0]
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
            "column": 1380
          }
        },
        "moduleName": "frontend/templates/mypreorders.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Мои предзаказы");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","preorders");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model.preorders",["loc",[null,[1,126],[1,141]]]]],[],0,null,["loc",[null,[1,106],[1,1368]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('frontend/templates/queue', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 314
              },
              "end": {
                "line": 1,
                "column": 455
              }
            },
            "moduleName": "frontend/templates/queue.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","ui circular mint icon button");
            var el2 = dom.createElement("i");
            dom.setAttribute(el2,"class","fa fa-check icon");
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
            ["element","action",["done",["get","preorder",["loc",[null,[1,366],[1,374]]]]],[],["loc",[null,[1,350],[1,376]]]]
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
                "column": 849
              },
              "end": {
                "line": 1,
                "column": 920
              }
            },
            "moduleName": "frontend/templates/queue.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("span");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("; ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
            return morphs;
          },
          statements: [
            ["content","syurup.name",["loc",[null,[1,891],[1,906]]]]
          ],
          locals: ["syurup"],
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
                "column": 935
              },
              "end": {
                "line": 1,
                "column": 1042
              }
            },
            "moduleName": "frontend/templates/queue.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","additional");
            var el2 = dom.createTextNode("Комментарии:  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
            return morphs;
          },
          statements: [
            ["content","preorder.comments",["loc",[null,[1,1015],[1,1036]]]]
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
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 1272
            }
          },
          "moduleName": "frontend/templates/queue.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","ui feed");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","event");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","label");
          var el4 = dom.createElement("img");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","content");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","date");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","summary");
          var el5 = dom.createElement("a");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          var el6 = dom.createTextNode(" заказал:");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","additional");
          var el6 = dom.createElement("span");
          dom.setAttribute(el6,"class","text-mint");
          var el7 = dom.createTextNode("Кофе:  ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" (");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" мл.);  ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("span");
          dom.setAttribute(el6,"class","text-mint");
          var el7 = dom.createTextNode("Сироп(ы):  ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","additional");
          var el6 = dom.createElement("h4");
          dom.setAttribute(el6,"class","ui huge");
          var el7 = dom.createTextNode("Номер заказа: #");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","additional");
          var el6 = dom.createElement("h3");
          dom.setAttribute(el6,"class","ui huge");
          var el7 = dom.createTextNode("Стоимость: ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode(" руб.");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0, 0]);
          var element2 = dom.childAt(element1, [0, 0]);
          var element3 = dom.childAt(element1, [1]);
          var element4 = dom.childAt(element3, [0]);
          var element5 = dom.childAt(element3, [1]);
          var element6 = dom.childAt(element5, [0]);
          var element7 = dom.childAt(element5, [2]);
          var morphs = new Array(12);
          morphs[0] = dom.createAttrMorph(element2, 'src');
          morphs[1] = dom.createMorphAt(element4,0,0);
          morphs[2] = dom.createMorphAt(element4,1,1);
          morphs[3] = dom.createAttrMorph(element6, 'href');
          morphs[4] = dom.createMorphAt(element6,0,0);
          morphs[5] = dom.createMorphAt(element6,2,2);
          morphs[6] = dom.createMorphAt(element7,1,1);
          morphs[7] = dom.createMorphAt(element7,3,3);
          morphs[8] = dom.createMorphAt(element7,6,6);
          morphs[9] = dom.createMorphAt(element5,3,3);
          morphs[10] = dom.createMorphAt(dom.childAt(element5, [4, 0]),1,1);
          morphs[11] = dom.createMorphAt(dom.childAt(element5, [5, 0]),1,1);
          return morphs;
        },
        statements: [
          ["attribute","src",["get","preorder.user.vk_photo",["loc",[null,[1,211],[1,233]]]]],
          ["content","preorder.formatted_created_at",["loc",[null,[1,281],[1,314]]]],
          ["block","if",[["get","currentUser.is_admin",["loc",[null,[1,320],[1,340]]]]],[],0,null,["loc",[null,[1,314],[1,462]]]],
          ["attribute","href",["concat",["https://vk.com/",["get","preorder.user.vk_screen_name",["loc",[null,[1,515],[1,543]]]]]]],
          ["content","preorder.user.content.first_name",["loc",[null,[1,547],[1,583]]]],
          ["content","preorder.user.last_name",["loc",[null,[1,589],[1,616]]]],
          ["content","preorder.drink.name",["loc",[null,[1,719],[1,742]]]],
          ["content","preorder.drink.volume",["loc",[null,[1,749],[1,774]]]],
          ["block","each",[["get","preorder.syurups",["loc",[null,[1,867],[1,883]]]]],[],1,null,["loc",[null,[1,849],[1,929]]]],
          ["block","if",[["get","preorder.comments.length",["loc",[null,[1,941],[1,965]]]]],[],2,null,["loc",[null,[1,935],[1,1049]]]],
          ["content","preorder.number",["loc",[null,[1,1113],[1,1132]]]],
          ["content","preorder.drink.price",["loc",[null,[1,1203],[1,1227]]]]
        ],
        locals: ["preorder"],
        templates: [child0, child1, child2]
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
            "column": 1303
          }
        },
        "moduleName": "frontend/templates/queue.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui container");
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","feeds");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","title text-center");
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("Очередь предзаказов");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0, 0]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","preorders",["loc",[null,[1,116],[1,125]]]]],[],0,null,["loc",[null,[1,108],[1,1281]]]]
      ],
      locals: [],
      templates: [child0]
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
            "column": 426
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
        dom.setAttribute(el1,"class","ui container text-center");
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","ui header");
        var el4 = dom.createTextNode("Как оформить предзаказ?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"tabindex","0");
        dom.setAttribute(el3,"class","ui animated fade button mint huge");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","visible content");
        var el5 = dom.createTextNode("Оформить предзаказ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","hidden content");
        var el5 = dom.createTextNode("Выбор кофе");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","ui header");
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
        var element1 = dom.childAt(element0, [1, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [0]),1,1);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [2]),1,1);
        return morphs;
      },
      statements: [
        ["content","steps-component",["loc",[null,[1,97],[1,116]]]],
        ["element","action",["create_preorder"],[],["loc",[null,[1,140],[1,168]]]],
        ["content","comments-component",["loc",[null,[1,388],[1,410]]]]
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
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 335
              },
              "end": {
                "line": 1,
                "column": 371
              }
            },
            "moduleName": "frontend/templates/syurup.hbs"
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
                "column": 371
              },
              "end": {
                "line": 1,
                "column": 395
              }
            },
            "moduleName": "frontend/templates/syurup.hbs"
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
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 153
            },
            "end": {
              "line": 1,
              "column": 514
            }
          },
          "moduleName": "frontend/templates/syurup.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","ui card");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","image");
          var el3 = dom.createElement("img");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","content");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3,"class","header");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","description");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","extra content text-center");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [0, 0]);
          var element2 = dom.childAt(element0, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [0]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [2]),0,0);
          return morphs;
        },
        statements: [
          ["attribute","src",["get","syurup.image",["loc",[null,[1,231],[1,243]]]]],
          ["content","syurup.name",["loc",[null,[1,291],[1,306]]]],
          ["block","if",[["get","syurup.is_available",["loc",[null,[1,341],[1,360]]]]],[],0,1,["loc",[null,[1,335],[1,402]]]],
          ["inline","syurup-component",[],["syurup",["subexpr","@mut",[["get","syurup",["loc",[null,[1,479],[1,485]]]]],[],[]],"preorder",["subexpr","@mut",[["get","model",["loc",[null,[1,495],[1,500]]]]],[],[]]],["loc",[null,[1,453],[1,502]]]]
        ],
        locals: ["syurup"],
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
            "column": 772
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
        dom.setAttribute(el1,"class","ui container");
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","title text-center");
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4,"class","ui header");
        var el5 = dom.createTextNode("Выбор сиропа(ов)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ui three stackable cards");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"tabindex","0");
        dom.setAttribute(el3,"class","ui animated fade button mint huge");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","visible content");
        var el5 = dom.createTextNode("Подтвердить предзаказ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","hidden content");
        var el5 = dom.createTextNode("Подтвердить");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var element4 = dom.childAt(element3, [1, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [0, 1]),0,0);
        morphs[1] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [
        ["block","each",[["get","syurups",["loc",[null,[1,171],[1,178]]]]],[],0,null,["loc",[null,[1,153],[1,523]]]],
        ["element","action",["confirm"],[],["loc",[null,[1,573],[1,593]]]]
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
define('frontend/tests/integration/components/menu-component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('menu-component', 'Integration | Component | menu component', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{menu-component}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#menu-component}}\n  template block text\n{{/menu-component}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('frontend/tests/integration/components/steps-component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('steps-component', 'Integration | Component | steps component', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{steps-component}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#steps-component}}\n  template block text\n{{/steps-component}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('frontend/tests/integration/components/steps-components-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('steps-components', 'Integration | Component | steps components', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{steps-components}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#steps-components}}\n  template block text\n{{/steps-components}}"));
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
define('frontend/tests/unit/controllers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {});

  ember_qunit.test('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
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
define('frontend/tests/unit/controllers/item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:item', {});

  ember_qunit.test('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });

});
define('frontend/tests/unit/controllers/queue-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:queue', {});

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
define('frontend/tests/unit/controllers/syurup-item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:syurup-item', {});

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
define('frontend/tests/unit/initializers/session-test', ['ember', 'frontend/initializers/session', 'qunit'], function (Ember, session, qunit) {

  'use strict';

  var application, registry;

  application = null;

  registry = null;

  qunit.module('Unit | Initializer | session', {
    beforeEach: function beforeEach() {
      return Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        registry = application.registry;
        return application.deferReadiness();
      });
    }
  });

  qunit.test('it works', function (assert) {
    session.initialize(registry, application);
    return assert.ok(true);
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
define('frontend/tests/unit/models/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('user', 'Unit | Model | user', {
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });

});
define('frontend/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
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
define('frontend/tests/unit/routes/my-preorders-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:my-preorders', 'Unit | Route | my preorders', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});
define('frontend/tests/unit/routes/mypreorders-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:mypreorders', 'Unit | Route | mypreorders', {});

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
define('frontend/tests/unit/routes/queue-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:queue', 'Unit | Route | queue', {});

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
  return { 'default': {"modulePrefix":"frontend","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"frontend","version":"0.0.0+d168271b"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","contentSecurityPolicy":{"default-src":"'none'","script-src":"'self' 'unsafe-eval'","font-src":"'self'","connect-src":"'self'","img-src":"'self'","style-src":"'self'","media-src":"'self'"},"exportApplicationGlobal":true}};
});

if (runningTests) {
  require("frontend/tests/test-helper");
} else {
  require("frontend/app")["default"].create({"name":"frontend","version":"0.0.0+d168271b"});
}

/* jshint ignore:end */
//# sourceMappingURL=frontend.map
