define('frontend/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var User;

  User = DS['default'].Model.extend({
    first_name: DS['default'].attr('string'),
    last_name: DS['default'].attr('string'),
    vk_photo: DS['default'].attr('string'),
    vk_screen_name: DS['default'].attr('string'),
    is_admin: DS['default'].attr('boolean'),
    is_banned: DS['default'].attr('boolean')
  });

  exports['default'] = User;

});