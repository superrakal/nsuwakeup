import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend();

Router.map(function () {
  this.route('root', {
    path: '/'
  });
  this.route('coffee');
  return this.route('syurup');
});

export default Router;