import test from 'ava'

import {Note} from '../src'

test('constructor', t => {
  let n = new Note(0, 1)
  t.true(n.keynum === 3)

  n = new Note({key: 0, octave: 1})
  t.true(n.keynum === 3)
})

test('upInterval', t => {
  const n = new Note({key: 0, octave: 4})
  const i1 = {steps: 5}
  const u1 = n.upInterval(i1)
  t.true(u1.key === 5 && u1.octave === 4)

  const i2 = {steps: 12}
  const u2 = n.upInterval(i2)
  t.true(u2.key === 0 && u2.octave === 5)
})
