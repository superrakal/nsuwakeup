import DS from 'ember-data';
var Drink;

Drink = DS.Model.extend({
  price: DS.attr('number'),
  volume: DS.attr('number'),
  name: DS.attr('string'),
  image: DS.attr('string')
});

export default Drink;