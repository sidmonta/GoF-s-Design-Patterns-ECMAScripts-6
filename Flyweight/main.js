import EventSymbol from 'EventSymbol'
import EventSymbolFactory from 'EventSymbolFactory'

console.log('Test creazione e comparazione di oggetti eventi non codivisi')
let tStart = new Date()
let eventList = new Array(1000000).fill(false).map(event => {
  let rnd = Math.random()

  let nameEvent = (rnd < 0.3) ? 'EVENTO 1' : (rnd < 0.6) ? 'EVENTO 2' : 'EVENTO 3'

  return new EventSymbol(nameEvent)
})
let tFinish = new Date()
let preTime = tFinish.getTime() - tStart.getTime()

let evn1count = 0
let evn2count = 0
let evn3count = 0

let compEvent1 = new EventSymbol('EVENTO 1')
let compEvent2 = new EventSymbol('EVENTO 2')

tStart = new Date()
eventList.forEach(event => {
  if (event.isEqualsTo(compEvent1)) {
    evn1count = evn1count + 1
  } else if (event.isEqualsTo(compEvent2)) {
    evn2count = evn2count + 1
  } else {
    evn3count = evn3count + 1
  }
})
tFinish = new Date()
let compTime = tFinish.getTime() - tStart.getTime()

console.log(`
  E1: ${evn1count}; E2: ${evn2count}; E3: ${evn3count};
  Tempo di riempimento: ${preTime}
  Tempo di computazione: ${compTime}
  --
  Tempo totale: ${(compTime + preTime)}
`)
// --------------------------------------------------
console.log('Test creazione e comparazione di oggetti eventi condivisi')
tStart = new Date()
eventList = new Array(1000000).fill(false).map(event => {
  let rnd = Math.random()

  let nameEvent = (rnd < 0.3) ? 'EVENTO 1' : (rnd < 0.6) ? 'EVENTO 2' : 'EVENTO 3'

  return EventSymbolFactory.newEventSymbol(nameEvent)
})
tFinish = new Date()
preTime = tFinish.getTime() - tStart.getTime()

evn1count = 0
evn2count = 0
evn3count = 0

compEvent1 = EventSymbolFactory.newEventSymbol('EVENTO 1')
compEvent2 = EventSymbolFactory.newEventSymbol('EVENTO 2')

tStart = new Date()
eventList.forEach(event => {
  if (event === compEvent1) {
    evn1count = evn1count + 1
  } else if (event === compEvent2) {
    evn2count = evn2count + 1
  } else {
    evn3count = evn3count + 1
  }
})
tFinish = new Date()
compTime = tFinish.getTime() - tStart.getTime()

console.log(`
  E1: ${evn1count}; E2: ${evn2count}; E3: ${evn3count};
  Tempo di riempimento: ${preTime}
  Tempo di computazione: ${compTime}
  --
  Tempo totale: ${(compTime + preTime)}
`)
