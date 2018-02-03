import BooleanExpression from 'BooleanExpression'

export default class AndExpression extends BooleanExpression {
  constructor (opt1, opt2) {
    super()
    this.operand1 = opt1
    this.operand2 = opt2
  }

  evaluate (context) {
    return this.operand1.evaluate(context) && this.operand2.evaluate(context)
  }
}
