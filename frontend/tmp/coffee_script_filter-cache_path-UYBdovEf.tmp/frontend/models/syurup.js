import DS from 'ember-data';
var Syurup;

Syurup = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  is_available: DS.attr('boolean')
});

export default Syurup;
