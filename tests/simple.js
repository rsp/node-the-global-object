const tap = require('tap');

const g = require('..');

tap.test('simple tests', (t) => {
  t.plan(3);

  t.equal(typeof xxx, 'undefined', 'xxx should not be defined');

  g.xxx = {};

  t.notEqual(typeof xxx, 'undefined', 'xxx should be defined');
  t.equal(xxx, g.xxx, 'xxx should habe the right value');
});
