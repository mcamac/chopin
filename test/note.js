import test from 'ava'

import {Note} from '../src'

test('constructor', t => {
  let n = new Note(0, 1)
  t.true(n.keynum === 3)

  n = new Note({key: 0, octave: 1})
  t.true(n.keynum === 3)
})

test('display', t => {
  let n = new Note(0, 1)
  t.true(n.display() === 'C1')

  n = new Note(4, 5)
  t.true(n.display() === 'E5')
  t.true(n.display('flat') === 'E5')

  n = new Note(6, 5)
  t.true(n.display() === 'F#5')

  n = new Note(6, 5)
  t.true(n.display('flat') === 'Gb5')
})

test('up', t => {
  const n = new Note({key: 0, octave: 4})
  const i1 = {steps: 5}
  const u1 = n.up(i1)
  t.true(u1.key === 5 && u1.octave === 4)

  const i2 = {steps: 12}
  const u2 = n.up(i2)
  t.true(u2.key === 0 && u2.octave === 5)
})

test('down', t => {
  const n = new Note({key: 0, octave: 4})
  const i1 = {steps: 5}
  const u1 = n.down(i1)
  t.true(u1.key === 7 && u1.octave === 3)

  const i2 = {steps: 12}
  const u2 = n.down(i2)
  t.true(u2.key === 0 && u2.octave === 3)
})
