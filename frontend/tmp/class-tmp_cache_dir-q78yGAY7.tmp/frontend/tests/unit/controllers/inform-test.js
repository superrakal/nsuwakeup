define('frontend/tests/unit/controllers/inform-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:inform', {});

  ember_qunit.test('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });

});