import BankEntity from 'BankEntity'

export default class Queue extends BankEntity {
  constructor (bsc) {
    super(bsc)
    this.size = 0
  }

  get size () {
    return this.size
  }

  enqueue () {
    this.size++
    this.changed()
  }

  dequeue () {
    if (this.size > 0) {
      this.size--
    }
  }
}
