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