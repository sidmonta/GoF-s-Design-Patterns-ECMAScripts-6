import LittleBank from 'LittleBank'

const bank = new LittleBank()

bank.showStatus()
console.log('A customer arrives to queue 1')
bank.customerArriveToQ1()
bank.showStatus()
console.log('A customer arrives to queue 1')
bank.customerArriveToQ1()
bank.showStatus()
console.log('A customer arrives to queue 1')
bank.customerArriveToQ1()
bank.showStatus()
console.log('A customer arrives to queue 2')
bank.customerArriveToQ2()
bank.showStatus()
console.log('End of service teller 1')
bank.endServiceTeller1()
bank.showStatus()
console.log('End of service teller 2')
bank.endServiceTeller2()
bank.showStatus()
console.log('End of service teller 2')
bank.endServiceTeller2()
bank.showStatus()
