define('frontend/tests/unit/routes/queue-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:queue', 'Unit | Route | queue', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});