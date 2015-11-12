import Ember from 'ember';
import PrimusProxy from 'ember-websockets/helpers/primus-proxy';

var forEach = Array.prototype.forEach;
var filter = Array.prototype.filter;
var isArray = Ember.isArray;

export default Ember.Service.extend({
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
    this.sockets = Ember.A();
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

    proxy = PrimusProxy.create({
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
    this.set('sockets', Ember.A(filteredSockets));
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