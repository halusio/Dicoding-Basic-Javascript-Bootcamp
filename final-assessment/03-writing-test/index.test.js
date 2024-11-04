import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js';

test('menghitung jumlah dua angka', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(-1, -1), -2);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(1.5, 2.5), 4);
});
