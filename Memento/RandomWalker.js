export default class RandomWalker {
  constructor () {
    this.randomWalker = this
  }

  get currentMilestone () {
    return this.currentMilestone
  }

  get lastWalkedDistance () {
    return this.lastWalkedDistance
  }

  randomWalk () {
    this.lastWalkedDistance = parseInt(Math.random() * 100)
    this.currentMilestone = this.currentMilestone + this.lastWalkedDistance
  }

  createMemento () {
    const self = this
    return new (class WalkerMemento {
      constructor () {
        this.mem_currentMilestone = self.currentMilestone
        this.mem_lastWalkedDistance = self.lastWalkedDistance
      }

      restoreState () {
        self.currentMilestone = this.mem_currentMilestone
        self.lastWalkedDistance = this.mem_lastWalkedDistance
      }
    })()
  }
}
