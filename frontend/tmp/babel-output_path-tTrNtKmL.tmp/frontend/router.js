import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend();

Router.map(function () {
  this.route('root', {
    path: '/'
  });
  this.route('coffee');
  this.route('syurup');
  return this.route('inform');
});

export default Router;