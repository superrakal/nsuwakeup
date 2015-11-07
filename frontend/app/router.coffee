`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ()->
  @route 'root',   path: '/'
  @route 'coffee'
  @route 'syurup'
  @route 'inform'
  @route 'queue'

`export default Router`
