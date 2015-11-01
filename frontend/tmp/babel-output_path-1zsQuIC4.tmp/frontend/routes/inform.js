import Ember from 'ember';
var InformRoute;

InformRoute = Ember.Route.extend({
  model: function model() {
    var id;
    id = cookie.get('preorder_id');
    return this.store.find('preorder', id);
  }
});

export default InformRoute;