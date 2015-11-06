`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend()

Router.map ()->
  @route 'root',   path: '/'
  @route 'coffee'
  @route 'syurup'
  @route 'inform'
  @route 'mypreorders'
  @route 'queue'

`export default Router`
