import Observer from 'Observer'

export default class Watcher extends Observer {
  constructor () {
    super()
    this.changes = 0
  }

  update (subject, ...args) {
    if (subject.change) {
      console.log(`Watcher: I see that the Subject holds now a ${subject.value}.`)
      this.changes++
    }
    subject.resetChange()
  }

  get changes () {
    return this.changes
  }
}
