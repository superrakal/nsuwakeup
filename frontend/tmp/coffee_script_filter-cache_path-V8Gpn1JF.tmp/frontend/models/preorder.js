import DS from 'ember-data';
var Preorder;

Preorder = DS.Model.extend({
  drink: DS.belongsTo('drink'),
  syurups: DS.hasMany('syurup')
});

export default Preorder;
