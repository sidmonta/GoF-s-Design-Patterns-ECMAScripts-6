import BankEntity from 'BankEntity'

export default class Teller extends BankEntity {
  constructor (bsc) {
    super(bsc)
    this.isFree = true
  }

  get isFree () {
    return this.isFree
  }

  initService (q) {
    if (this.isFree) {
      q.dequeue()
      this.isFree = false
    }
  }

  endService () {
    this.isFree = true
    this.changed()
  }
}
