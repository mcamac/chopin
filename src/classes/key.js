import {concat, reverse} from 'lodash'

const SHARP_KEYS = [
  'G', 'D', 'A', 'E', 'B', 'F#', 'C#'
]

const FLAT_KEYS = [
  'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'
]

const KEYS = concat(reverse(FLAT_KEYS), ['C'], SHARP_KEYS)

const SHARP_ORDER = [
  'F#', 'C#', 'G#', 'D#', 'A#', 'E#', 'B#'
]

const FLAT_ORDER = [
  'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb'
]

export default class Key {
  constructor(key) {
    const keyPos = KEYS.indexOf(key) - 7
    this.sharps = keyPos > 0 ? SHARP_ORDER.slice(0, keyPos) : []
    this.flats = keyPos < 0 ? FLAT_ORDER.slice(0, -keyPos) : []
  }
}
