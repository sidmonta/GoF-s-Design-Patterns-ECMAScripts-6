import Observer from 'Observer'

export default class Psychologist extends Observer {
  constructor () {
    super()
    this.countLower = 0
    this.countHigher = 0
  }

  update (observable, ...args) {
    if (observable.change) {
      if (observable.value <= 5) {
        this.countLower++
      } else {
        this.countHigher++
      }
    }
    observable.resetChange()
  }

  option () {
    if (this.countLower + this.countHigher === 0) {
      return `The Subject doesn't like changes`
    } else {
      if (this.countLower > this.countHigher) {
        return `The Subject likes little numbers`
      } else if (this.countLower > this.countHigher) {
        return `The Subject likes big numbers`
      } else {
        return `The Subject likes little numbers and big numbers`
      }
    }
  }
}
