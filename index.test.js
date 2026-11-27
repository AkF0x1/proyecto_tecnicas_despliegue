const test = require('node:test');
const assert = require('node:assert');
const { sumar } = require('./index.js');

test('suma dos números correctamente', () => {
  assert.strictEqual(sumar(2, 3), 5);
});