import ClockState from 'ClockState'

class UpdatatingMinState extends ClockState {
  constructor (clock) {
    super(clock)
    console.log('**UPDATING MIN: Press CHANGE button to increase hour')
  }

  modeButton () {
    this.clock.setState(new NormalDisplayState(this.clock))
  }

  changeButton () {
    this.clock.min++
    if (this.clock.min === 60) {
      this.clock.min = 0
    }
    console.log('CHANGE pressed -')
    this.clock.showTime()
  }
}

class UpdatatingHrState extends ClockState {
  constructor (clock) {
    super(clock)
    console.log('**UPDATING HR: Press CHANGE button to increase hour')
  }

  modeButton () {
    this.clock.setState(new UpdatatingMinState(this.clock))
  }

  changeButton () {
    this.clock.hr++
    if (this.clock.hr === 24) {
      this.clock.hr = 0
    }
    console.log('CHANGE pressed -')
    this.clock.showTime()
  }
}

export default class NormalDisplayState extends ClockState {
  constructor (clock) {
    super(clock)
    console.log('** Clock is in normal display.')
  }

  modeButton () {
    this.clock.setState(new UpdatatingHrState(this.clock))
  }

  changeButton () {
    console.log('LIGHT ON: ')
    this.clock.showTime()
  }
}
