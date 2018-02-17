export default class ItemStock {
  remove (quantity) {
    if (!this.validateQuantity(quantity)) { return false }
    if (this.getCurrentStock() >= quantity) {
      this.decreaseStock(quantity)
      return true
    }
    return false
  }

  validateQuantity (quantity) {}
  getCurrentStock () {}
  decreaseStock (quantity) {}
}
