`import DS from 'ember-data'`

Preorder = DS.Model.extend
  comments:   DS.attr 'string'
  status:     DS.attr 'string'
  created_at: DS.attr 'string'
  drink:      DS.belongsTo 'drink', async: true
  user:       DS.belongsTo 'user', async: true
  syurups:    DS.hasMany 'syurup',  async: true

  formatted_created_at: (->
    date = @get 'created_at'
    format = "Do MMMM YYYY, h:mm:ss"
    moment(date).locale('ru').format format
  ).property('created_at')


`export default Preorder`
