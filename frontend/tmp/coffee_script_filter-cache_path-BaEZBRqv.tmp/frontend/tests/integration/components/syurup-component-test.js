import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
moduleForComponent('syurup-component', 'Integration | Component | syurup component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  this.render(hbs("{{syurup-component}}"));
  assert.equal(this.$().text().trim(), '');
  this.render(hbs("{{#syurup-component}}\n  template block text\n{{/syurup-component}}"));
  return assert.equal(this.$().text().trim(), 'template block text');
});
