import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('steps-component', 'Integration | Component | steps component', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);
  this.render(hbs("{{steps-component}}"));
  assert.equal(this.$().text().trim(), '');
  this.render(hbs("{{#steps-component}}\n  template block text\n{{/steps-component}}"));
  return assert.equal(this.$().text().trim(), 'template block text');
});