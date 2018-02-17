import Observable from 'Observable'

export default class ObservableSubject extends Observable {
  constructor () {
    super()
    this.value = 0
    this.change = false
  }

  receiveValue (number) {
    if (Math.random() < 0.5) {
      console.log(`Subject: I like it, I've changed my internal value`)
      this.value = number
      this.setChange()
    } else {
      console.log(`Subject: I have a number ${this.value} now, and I not interested in the number ${number}.`)
    }
    this.notify()
  }

  setChange () {
    this.change = true
  }

  resetChange () {
    this.change = false
  }

  get change () {
    return this.change
  }

  get value () {
    return this.value
  }
}
