export default class BankEntity {
  constructor (bsc) {
    this.bOrganizer = bsc
  }

  changed () {
    this.bOrganizer.entityChanged(this)
  }
}
