import Ember from 'ember';
var QueueController;

QueueController = Ember.Controller.extend({
  socketIOService: Ember.inject.service('socket-io'),
  init: function() {
    this._super.apply(this, arguments);
    ion.sound({
      sounds: [
        {
          name: 'bell_ring'
        }
      ],
      path: '/sounds/',
      preload: true
    });
    this.socket = this.get('socketIOService').socketFor('http://nsuwakeup.ru:1488/');
    return this.socket.on('update preorders list', (function(_this) {
      return function() {
        ion.sound.play("bell_ring");
        return _this.send("socket_event");
      };
    })(this));
  },
  actions: {
    done: function(preorder) {
      preorder.set('status', 'Выдан');
      return preorder.save().then(function() {
        return location.reload();
      });
    }
  }
});

export default QueueController;
