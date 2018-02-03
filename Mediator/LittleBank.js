import LittleBankServiceOrganizer from 'LittleBankServiceOrganizer'

export default class LittleBank {
  constructor () {
    const lbso = new LittleBankServiceOrganizer()
    lbso.createBankEntities()
    this.queue1 = lbso.queue1
    this.queue2 = lbso.queue2
    this.teller1 = lbso.teller1
    this.teller2 = lbso.teller2
  }

  costumerArriveToQ1 () {
    this.queue1.enqueue()
  }

  costumerArriveToQ2 () {
    this.queue2.enqueue()
  }

  endServiceTeller1 () {
    this.teller1.endService()
  }

  endServiceTeller2 () {
    this.teller2.endService()
  }

  showStatus () {
    console.log(`
      ----------------------------------
      Teller 1 status: ${(this.teller1.isFree ? 'FREE' : 'BUSY')}
      Teller 2 status: ${(this.teller2.isFree ? 'FREE' : 'BUSY')}

      Queue 1 size: ${this.queue1.size}
      Queue 2 size: ${this.queue2.size}
    `)
  }
}
