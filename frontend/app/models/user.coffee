`import DS from 'ember-data'`

User = DS.Model.extend
  first_name:     DS.attr 'string'
  last_name:      DS.attr 'string'
  vk_photo:       DS.attr 'string'
  vk_screen_name: DS.attr 'string'
  is_admin:       DS.attr 'boolean'
`export default User`
