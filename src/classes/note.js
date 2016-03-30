// A - G, s/#, b
// 1, 2, 3
// A0, B0, C1
const KEYS = [
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
]

const ACCIDENTALS = {
  sharp: ['B#', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  flat: ['C', 'Db', 'D', 'Eb', 'Fb', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb'],
}

export default class Note {
  constructor(key, octave) {
    if (typeof octave !== 'undefined') {
      this.key = key
      this.octave = octave
    } else {
      this.key = key.key
      this.octave = key.octave
    }
  }

  // Computed properties
  get keynum() {
    return this.octave * 12 + this.key - 9
  }

  display(accidental) {
    if (accidental) {
      return ACCIDENTALS[accidental][this.key] + this.octave
    }
    return KEYS[this.key] + this.octave
  }

  // Interval math
  up(interval) {
    return Note.fromKeyNum(this.keynum + interval.steps)
  }

  down(interval) {
    return Note.fromKeyNum(this.keynum - interval.steps)
  }

  chord(str) {

  }
}

// Convert piano key # (1 - 88) to hash with key/octave
Note.fromKeyNum = keynum => new Note({
  key: (keynum + 9) % 12,
  octave: Math.floor((keynum + 9) / 12),
})
