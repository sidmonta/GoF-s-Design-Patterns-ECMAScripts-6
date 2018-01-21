import CreditRequestHandler from './CreditRequestHandler'

export default class ClientAccountManager extends CreditRequestHandler {
  creditRequest (amount) {
    if (amount <= 2000) {
      if (Math.random() < 0.2) {
        console.log('Accettata dal Sales Manager')
      } else {
        console.log('Non accettata dal Sales Manager')
      }
    } else {
      this.forwardCreditRequest(amount)
    }
  }
}
