export default class Observable {
  constructor () {
    this.observers = []
  }

  attach (observer) {
    this.observers.push(observer)
  }

  detach (observer) {
    let index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }

  notify () {
    this.observers.forEach(observable => {
      observable.update(this)
    })
  }
}
