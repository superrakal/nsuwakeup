import DS from 'ember-data';
var User;

User = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  vk_photo: DS.attr('string'),
  vk_screen_name: DS.attr('string'),
  preorders: DS.hasMany('preorder', {
    async: true
  }),
  preorders_count: (function () {
    if (this.get('preorders.content').length > 9) {
      return '9+';
    } else {
      return this.get('preorders.content').length;
    }
  }).property('preorders.length')
});

export default User;