import ClonableTime from 'ClonableTime'

export default class TimeImplementationC1 extends ClonableTime {
  setTime (hr, min, sec) {
    this.hr = hr
    this.min = min
    this.sec = sec
  }

  getHours () {
    return this.hr
  }

  getMinutes () {
    return this.min
  }

  getSeconds () {
    return this.sec
  }
}
