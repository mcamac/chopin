import test from 'ava'
import {isEqual} from 'lodash'

import {Key} from '../src'

test(t => {
  const f = new Key('F')
  t.true(isEqual(f.flats, ['Bb']))
  t.true(isEqual(f.sharps, []))

  const e = new Key('E')
  t.true(isEqual(e.flats, []))
  t.true(isEqual(e.sharps, ['F#', 'C#', 'G#', 'D#']))
})
