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
