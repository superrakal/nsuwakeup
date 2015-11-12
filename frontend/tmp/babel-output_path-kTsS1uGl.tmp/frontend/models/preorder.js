import DS from 'ember-data';
var Preorder;

Preorder = DS.Model.extend({
  comments: DS.attr('string'),
  status: DS.attr('string'),
  created_at: DS.attr('string'),
  number: DS.attr('number'),
  drink: DS.belongsTo('drink', {
    async: true
  }),
  user: DS.belongsTo('user', {
    async: true
  }),
  syurups: DS.hasMany('syurup', {
    async: true
  }),
  formatted_created_at: (function () {
    var date, format;
    date = this.get('created_at');
    format = "Do MMMM YYYY, h:mm:ss";
    return moment(date).locale('ru').format(format);
  }).property('created_at')
});

export default Preorder;