define('frontend/tests/unit/routes/syurup-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:syurup', 'Unit | Route | syurup', {});

  ember_qunit.test('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });

});