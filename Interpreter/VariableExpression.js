import BooleanExpression from 'BooleanExpression'

export default class VariableExpression extends BooleanExpression {
  constructor (name) {
    super()
    this.varName = name
  }

  evaluate (context) {
    return context.lookup(this.varName)
  }

  getVarName () {
    return this.varName
  }
}
