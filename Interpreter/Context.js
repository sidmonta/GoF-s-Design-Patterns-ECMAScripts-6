export default class Context {
  constructor () {
    this.vars = new Map()
  }

  assign (variable, value) {
    this.vars.set(variable.getVarName(), Boolean(value))
  }

  lookup (varName) {
    return Boolean(this.vars.get(varName))
  }
}
