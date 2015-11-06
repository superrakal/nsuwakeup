import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend();

Router.map(function() {
  this.route('root', {
    path: '/'
  });
  this.route('coffee');
  this.route('syurup');
  this.route('inform');
  this.route('mypreorders');
  return this.route('queue');
});

export default Router;
