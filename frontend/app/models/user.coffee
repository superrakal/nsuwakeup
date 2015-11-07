`import DS from 'ember-data'`

User = DS.Model.extend
  first_name:     DS.attr 'string'
  last_name:      DS.attr 'string'
  vk_photo:       DS.attr 'string'
  vk_screen_name: DS.attr 'string'
  is_admin:       DS.attr 'boolean'

  preorders: DS.hasMany 'preorder', async: true

  preorders_count: (->
    if (@get 'preorders.content').length > 9
      '9+'
    else
      (@get 'preorders.content').length
  ).property('preorders.length')

`export default User`
