import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('root', {
    path: '/'
  });
  this.route('coffee');
  this.route('syurup');
  this.route('inform');
  return this.route('queue');
});

export default Router;
