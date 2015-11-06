define('frontend/tests/unit/routes/confirm-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:confirm', 'Unit | Route | confirm', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});