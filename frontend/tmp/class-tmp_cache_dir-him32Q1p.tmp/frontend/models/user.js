define('frontend/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var User;

  User = DS['default'].Model.extend({
    first_name: DS['default'].attr('string'),
    last_name: DS['default'].attr('string'),
    vk_photo: DS['default'].attr('string'),
    vk_screen_name: DS['default'].attr('string'),
    preorders: DS['default'].hasMany('preorder', {
      async: true
    }),
    preorders_count: (function () {
      if (this.get('preorders.content').length > 9) {
        return '9+';
      } else {
        return this.get('preorders.content').length;
      }
    }).property('preorders.length')
  });

  exports['default'] = User;

});