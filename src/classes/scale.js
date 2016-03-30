import {last, reduce} from 'lodash'

import {W, H} from './interval'

export default class Scale {
  constructor(root, steps) {
    this.root = root
    this.steps = steps

    this.notes = reduce(steps, (arr, step) => {
      return concat(arr, last(arr.nextNote(step)))
    }, [root])
  }

  hasNote(note) {

  }

  notesFrom(note, n) {

  }
}

export const major = [W, W, H, W, W, W, H]
export const minor = [W, H, W, W, H, W, W]
// TODO: Add more modes.
