import {H, W} from './step'

class Mode {
  constructor(steps) {
    this.steps = steps
  }
}

export const major = [W, W, H, W, W, W, H]
export const minor = [W, H, W, W, H, W, W]
// TODO: Add more modes.
