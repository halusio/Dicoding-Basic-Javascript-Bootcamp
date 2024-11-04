import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import sum from './index.js';

test('menghitung jumlah dua angka positif', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 5), 15);
});

test('menghitung jumlah dengan angka negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test('menghitung jumlah dengan input bukan angka', () => {
  assert.strictEqual(sum('1', 2), 0);
  assert.strictEqual(sum(1, '2'), 0);
  assert.strictEqual(sum('1', '2'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
});

test('menghitung jumlah dengan nol', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});
