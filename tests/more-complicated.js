const tap = require('tap');

self = { xxx: 1 };
self.self = self;

const g = require('..');

tap.test('more complicated tests', (t) => {
  t.plan(3);

  t.equal(typeof xxx, 'undefined', 'xxx should not be defined');

  g.xxx = {};

  t.notEqual(typeof xxx, 'undefined', 'xxx should be defined');
  t.equal(xxx, g.xxx, 'xxx should habe the right value');
});
