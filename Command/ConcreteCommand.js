import Command from 'Command'

export class TVPowerCommand extends Command {
  constructor (someTv) {
    super()
    this.theTv = someTv
  }

  execute () {
    this.theTv.power()
  }
}

export class TVVolumeUpCommand extends Command {
  constructor (someTv) {
    super()
    this.theTv = someTv
  }

  execute () {
    this.theTv.volumeUp()
  }
}

export class TVVolumeDownCommand extends Command {
  constructor (someTv) {
    super()
    this.theTv = someTv
  }

  execute () {
    this.theTv.volumeDown()
  }
}

export class TVSetChannelCommand extends Command {
  constructor (someTv) {
    super()
    this.theTv = someTv
  }

  execute () {
    let chNumber = this._acceptNumber()
    this.theTv.setChannel(chNumber)
  }

  _acceptNumber () {
    return parseInt(document.querySelector('#changeNum').value)
  }
}
