import BooleanExpression from 'BooleanExpression'

export default class NotExpression extends BooleanExpression {
  constructor (opt) {
    super()
    this.operand = opt
  }

  evaluate (context) {
    return !this.operand.evaluate(context)
  }
}
