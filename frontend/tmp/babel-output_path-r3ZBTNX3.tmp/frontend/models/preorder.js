import DS from 'ember-data';
var Preorder;

Preorder = DS.Model.extend({
  comments: DS.attr('string'),
  status: DS.attr('string'),
  drink: DS.belongsTo('drink', {
    async: true
  }),
  user: DS.belongsTo('user', {
    async: true
  }),
  syurups: DS.hasMany('syurup', {
    async: true
  })
});

export default Preorder;