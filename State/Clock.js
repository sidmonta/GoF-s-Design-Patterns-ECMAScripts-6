import NormalDisplayState from 'ConcreteState'

export default class Clock {
  constructor () {
    let d = new Date()
    this.min = d.getMinutes()
    this.hr = d.getHours()

    this.clockState = new NormalDisplayState(this)
  }

  setState (st) {
    this.clockState = st
  }

  modeButton () {
    this.clockState.modeButton()
  }

  changeButton () {
    this.clockState.changeButton()
  }

  showTime () {
    console.log(`Current time is ${this.hr}:${this.min}`)
  }
}
