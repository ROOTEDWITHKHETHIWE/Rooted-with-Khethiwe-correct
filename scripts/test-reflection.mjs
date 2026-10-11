import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assess, areas } from '../app/reflection/model.ts';
import { jpegPagesToPdf } from '../app/reflection/pdf.ts';

test('unexplored answers never manufacture a strength', () => {
  const r = assess(Array.from({length:12}, () => ['unsure']));
  assert.deepEqual(r.practised, []);
  assert.deepEqual(r.interests, []);
});
test('experience and interest remain distinct', () => {
  const answers = Array.from({length:12}, () => ['unsure']);
  answers[0] = ['teaching']; answers[1] = ['teaching'];
  answers[8] = ['creating']; answers[9] = ['creating'];
  const r = assess(answers);
  assert.equal(r.practised[0].id, 'teaching');
  assert.equal(r.interests[0].id, 'creating');
  assert.ok(!r.practised.some(x => x.id === 'creating'));
});
test('ties preserve every equally supported area', () => {
  const r = assess(Array.from({length:12}, () => ['teaching','caring']));
  assert.deepEqual(new Set(r.practised.map(x=>x.id)), new Set(['teaching','caring']));
});
test('duplicate and unknown selections do not inflate results', () => {
  assert.deepEqual(assess([['teaching','teaching','unknown']]), assess([['teaching']]));
  assert.equal(areas.length, 6);
});
test('PDF has valid byte offsets, page count and image streams', () => {
  const jpeg = new Uint8Array([255,216,255,217]);
  const bytes = jpegPagesToPdf([jpeg,jpeg], 1240, 1754);
  const s = new TextDecoder().decode(bytes);
  assert.ok(s.startsWith('%PDF-1.4'));
  assert.match(s, /\/Count 2/);
  assert.match(s, /\/Filter \/DCTDecode/);
  const offset = Number(s.match(/startxref\n(\d+)/)[1]);
  assert.equal(new TextDecoder().decode(bytes.slice(offset,offset+4)), 'xref');
  const rows = s.slice(offset).split('\n').slice(3,11);
  rows.forEach((row,index) => {
    const start = Number(row.slice(0,10));
    assert.ok(new TextDecoder().decode(bytes.slice(start,start+20)).startsWith(`${index+1} 0 obj`));
  });
});
