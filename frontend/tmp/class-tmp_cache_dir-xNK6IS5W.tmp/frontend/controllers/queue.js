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
      },
      ban: function ban(preorder) {
        preorder.set('status', 'Не выдан');
        return preorder.save().then(function () {
          var user;
          user = preorder.get('user').content;
          user.set('is_banned', true);
          return user.save().then(function () {
            return location.reload();
          });
        });
      }
    }
  });

  exports['default'] = QueueController;

});