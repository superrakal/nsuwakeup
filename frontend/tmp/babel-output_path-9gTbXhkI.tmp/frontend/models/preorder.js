import DS from 'ember-data';
var Preorder;

Preorder = DS.Model.extend({
  comments: DS.attr('string'),
  drink: DS.belongsTo('drink', {
    async: true
  }),
  syurups: DS.hasMany('syurup', {
    async: true
  })
});

export default Preorder;