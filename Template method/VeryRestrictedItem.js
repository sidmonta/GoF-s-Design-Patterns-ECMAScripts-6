import ItemStock from 'ItemStock'

export default class VeryRestrictedItem extends ItemStock {
  constructor (cod, nam, mlSize) {
    super()
    this.code = cod
    this.name = nam
    this.maxLotSize = mlSize
    this.currentQuantity = 0
  }

  setStock (quantity) {
    this.currentQuantity = quantity
  }

  toString () {
    return `${this.code} ${this.name} ${this.currentQuantity} (Max. Lot Size: ${this.maxLotSize})`
  }

  getCurrentStock () {
    return this.currentQuantity
  }

  decreaseStock (quantity) {
    this.currentQuantity -= quantity
  }

  validateQuantity (quantity) {
    return (quantity >= 0 && quantity <= Math.min(this.currentQuantity, this.maxLotSize))
  }
}
