import {Staff} from './classes'

export default class Measure extends Staff {
  constructor(number) {
    this.number = number
  }
  
  first() {
    if (this.number == 1) {true}
  }
  
  last() {
  }
}