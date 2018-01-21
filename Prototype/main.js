import SchedulerC from 'SchedulerC'
import TimeImplementationC1 from 'TimeImplementationC1'
import TimeImplementationC2 from 'TimeImplementationC2'

console.log('Using TimeImplementationC1:')
var t1 = new TimeImplementationC1()
t1.setTime(15, 20, 10)
var tEnd1 = SchedulerC.calculateEnd(t1, 6)
console.log(`End: ${tEnd1.getHours()} : ${tEnd1.getMinutes()} : ${tEnd1.getSeconds()}`)

console.log('Using TimeImplementationC1:')
var t2 = new TimeImplementationC2()
t2.setTime(15, 20, 10)
var tEnd2 = SchedulerC.calculateEnd(t2, 6)
console.log(`End: ${tEnd2.getHours()} : ${tEnd2.getMinutes()} : ${tEnd2.getSeconds()}`)
