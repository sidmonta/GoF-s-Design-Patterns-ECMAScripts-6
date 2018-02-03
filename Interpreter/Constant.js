import BooleanExpression from 'BooleanExpression'

export default class Constant extends BooleanExpression {
  constructor (val) {
    super()
    this.value = val
  }

  evaluate (context) {
    return this.value
  }
}
