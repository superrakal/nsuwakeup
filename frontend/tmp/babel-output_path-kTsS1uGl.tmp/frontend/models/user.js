import DS from 'ember-data';
var User;

User = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  vk_photo: DS.attr('string'),
  vk_screen_name: DS.attr('string'),
  is_admin: DS.attr('boolean'),
  is_banned: DS.attr('boolean')
});

export default User;