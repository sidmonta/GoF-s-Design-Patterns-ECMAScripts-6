export default class EventSymbol {
  constructor (name = '') {
    this.n = name
  }

  get name () {
    return this.n
  }

  print (owner) {
    console.log(`Event: ${this.n} Owner: ${owner}`)
  }

  isEqualsTo (otherEvent) {
    return this.n === otherEvent.name
  }
}
