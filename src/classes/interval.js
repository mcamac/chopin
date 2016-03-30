export default class Interval {
  constructor(input) {
    if (typeof input === 'number') {
      this.steps = input
    } else if (typeof input === 'string') {
      // Parse string
    } else {
      // Raise error.
    }
  }
}

export const W = new Interval(2)
export const H = new Interval(1)
export const m3 = new Interval(3)
export const M3 = new Interval(4)
export const P4 = new Interval(5)
export const P5 = new Interval(7)
export const m6 = new Interval(8)
export const M6 = new Interval(9)
export const m7 = new Interval(10)
export const M7 = new Interval(11)