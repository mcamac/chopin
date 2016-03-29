import {H, W} from './steps'

class Mode {
  constructor(steps) {
    this.steps = steps
  }
}

export const major = [W, W, H, W, W, W, H]
export const minor = [W, H, W, W, H, W, W]
