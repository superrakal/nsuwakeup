import Ember from 'ember';
var MypreordersRoute;

MypreordersRoute = Ember.Route.extend({
  model: function model() {
    return this.get('session.currentUser');
  },
  setupController: function setupController(controller, model) {
    return controller.set('model', model);
  }
});

export default MypreordersRoute;