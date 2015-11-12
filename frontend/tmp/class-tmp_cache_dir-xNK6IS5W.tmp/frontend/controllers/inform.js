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
    isAvailableTodayButNotNow: (function () {
      var now, startTime;
      startTime = moment().hour(8).minutes(30);
      now = moment();
      return now < startTime && now > moment().hour(0).minutes(0);
    }).property(),
    isNotAvailableToday: (function () {
      var endTime, now, range, startTime;
      startTime = moment().hour(8).minutes(30);
      endTime = moment().hour(18).minutes(45);
      range = moment().range(startTime, endTime);
      now = moment();
      return !range.contains(now);
    }).property(),
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