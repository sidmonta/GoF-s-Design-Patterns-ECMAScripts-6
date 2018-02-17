import ItemStock from 'ItemStock'

export default class GeneralItem extends ItemStock {
  constructor (cod, nam) {
    super()
    this.code = cod
    this.name = nam
    this.onHand = 0
    this.inTransit = 0
    this.backorders = 0
  }

  setStock (oh, it, bo) {
    this.onHand = oh
    this.inTransit = it
    this.backorders = bo
  }

  toString () {
    return `${this.code} ${this.name}. Inv. On Hand: ${this.onHand} In Transit: ${this.inTransit} Backorders: ${this.backorders}`
  }

  validateQuantity (quantity) {
    return quantity >= 0
  }

  getCurrentStock () {
    return this.onHand + this.inTransit - this.backorders
  }

  decreaseStock (quantity) {
    this.onHand = this.onHand - quantity
    if (this.onHand < 0) {
      this.backorders = this.backorders + Math.abs(this.onHand)
      this.onHand = 0
    }
  }
}
