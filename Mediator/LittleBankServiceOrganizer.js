import BankServiceOrganizer from 'BankServiceOrganizer'
import Queue from 'Queue'
import Teller from 'Teller'

export default class LittleBankServiceOrganizer extends BankServiceOrganizer {
  createBankEntities () {
    this.queue1 = new Queue(this)
    this.queue2 = new Queue(this)

    this.teller1 = new Teller()
    this.teller2 = new Teller()
  }

  get queue1 () {
    return this.queue1
  }

  get queue2 () {
    return this.queue2
  }

  get teller1 () {
    return this.teller1
  }

  get teller2 () {
    return this.teller2
  }

  entityChanged (entityChanged) {
    if (entityChanged === this.teller1) {
      if (this.queue1.size > 0) {
        this.teller1.takeClientFrom(this.queue1)
      } else if (this.queue2.size > 0) {
        this.teller1.takeClientFrom(this.queue2)
      }
    } else if (entityChanged === this.teller2) {
      if (this.queue2.size > 0) {
        this.teller2.takeClientFrom(this.queue2)
      } else if (this.queue1.size > 0) {
        this.teller2.takeClientFrom(this.queue1)
      }
    } else if (entityChanged === this.queue1) {
      if (this.teller1.isFree) {
        this.teller1.takeClientFrom(this.queue1)
      } else if (this.teller2.isFree) {
        this.teller2.takeClientFrom(this.queue1)
      }
    } else if (entityChanged === this.queue2) {
      if (this.teller2.isFree) {
        this.teller2.takeClientFrom(this.queue2)
      } else if (this.teller1.isFree) {
        this.teller1.takeClientFrom(this.queue2)
      }
    }
  }
}
