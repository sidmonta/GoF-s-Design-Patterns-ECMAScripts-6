export default class CreditRequestHandler {
  setSuperiorRequestHandler (theSuperior) {
    this.successor = theSuperior
  }

  creditRequest (amount) {
    this.forwardCreditRequest(amount)
  }

  forwardCreditRequest (amount) {
    if (this.successor) {
      this.successor.creditRequest(amount)
    } else {
      throw String('No handler found to forward the request')
    }
  }
}
