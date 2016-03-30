import test from 'ava'

import {Scale, Note} from '../src'

test('scale', () => {
  const c = new Note(0, 4)
  const s = new Scale(c, Scale.t.major)
})
