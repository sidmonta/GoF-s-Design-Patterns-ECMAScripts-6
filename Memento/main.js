import RandomWalker from 'RandomWalker'

const whereIs = rw => {
  console.log(`
    You are now stopped at km ${rw.currentMilestone}.
    This place is ${rw.lastWalkedDistance} kms far from your last stop
  `)
}

const luke = new RandomWalker()
let tripStop = luke.createMemento()

for (let i = 1; i <= 4; i++) {
  console.log('Starting trip...')
  luke.randomWalk()
  whereIs(luke)
  console.log('Do you like this place?')
  if (Math.random() < 0.4) {
    console.log('-No!')
    tripStop.restoreState()
    whereIs(luke)
  } else {
    console.log('-Yes!')
    tripStop = luke.createMemento()
  }
}
