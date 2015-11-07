import Ember from 'ember';
var ApplicationRoute;

ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.get('session.currentUser');
  },
  setupController: function(controller, model) {
    return controller.set('model', model);
  }
});

export default ApplicationRoute;
