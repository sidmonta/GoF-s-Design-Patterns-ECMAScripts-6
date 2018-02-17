export default class VisitableFloat {
  constructor (f) {
    this.value = parseFloat(f)
  }

  get float () {
    return this.value
  }

  accept (visitor) {
    visitor.visit(this)
  }
}
