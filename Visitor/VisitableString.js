export default class VisitableString {
  constructor (str) {
    this.value = str
  }

  get string () {
    return this.value
  }

  accept (visitor) {
    visitor.visit(this)
  }
}
