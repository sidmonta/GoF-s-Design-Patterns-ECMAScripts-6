export default class SchedulerC {
  static calculateEnd (start, hours) {
    let hr = start.getHours() + hours
    hr = (hr < 24) ? hr : hr - 24

    let endTime = start.cloneItself()
    endTime.setTime(hr, start.getMinutes(), start.getSeconds())

    return endTime
  }
}
