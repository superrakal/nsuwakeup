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