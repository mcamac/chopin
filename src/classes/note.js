// A - G, s/#, b
// 1, 2, 3
// A0, B0, C1

const fromKeyNum = keynum => ({
  key: (keynum + 9) % 12,
  octave: Math.floor((keynum + 9) / 12),
})

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

  get keynum() {
    return this.octave * 12 + this.key - 9
  }

  upInterval(interval) {
    return new Note(fromKeyNum(this.keynum + interval.steps))
  }
}
