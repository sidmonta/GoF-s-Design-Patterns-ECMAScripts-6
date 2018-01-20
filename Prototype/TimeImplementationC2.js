import { ClonableTime } from 'ClonableTime'

export class TimeImplementationC2 extends ClonableTime {
  setTime (hr, min, sec) {
    this.secs = hr * 3600 + min * 60 + sec
  }

  getHours () {
    return Math.round(this.secs / 3600)
  }

  getMinutes () {
    return Math.round((this.secs - this.getHours()) / 60)
  }

  getSeconds () {
    return Math.round(this.secs % 60)
  }
}
