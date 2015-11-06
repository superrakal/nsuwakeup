define('frontend/models/preorder', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Preorder;

  Preorder = DS['default'].Model.extend({
    comments: DS['default'].attr('string'),
    status: DS['default'].attr('string'),
    created_at: DS['default'].attr('string'),
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