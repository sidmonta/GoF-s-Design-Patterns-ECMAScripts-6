export default class WatcherVisitor {
  visit (param) {
    let type = param.constructor.name

    this[`visit${type}`](param)
  }

  visitArray (param) {
    for (let value of param) {
      if (typeof value.accept === 'function') {
        value.accept(this)
      } else {
        this.visit(value)
      }
    }
  }

  visitVisitableString (param) {
    console.log(`"${param.string}"`)
  }

  visitVisitableFloat (param) {
    console.log(`${param.float}f`)
  }
}
