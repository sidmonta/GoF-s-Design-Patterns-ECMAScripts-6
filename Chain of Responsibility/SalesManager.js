import CreditRequestHandler from './CreditRequestHandler'

export default class SalesManager extends CreditRequestHandler {
  creditRequest (amount) {
    if (amount <= 1000) {
      if (Math.random() < 0.3) {
        console.log('Accettata dal Sales Manager')
      } else {
        console.log('Non accettata dal Sales Manager')
      }
    } else {
      this.forwardCreditRequest(amount)
    }
  }
}
