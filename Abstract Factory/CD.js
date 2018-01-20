export class CD {
  writeOnDisk (sound = '') {
    this.track = sound
  }

  readDisk () {
    return this.track
  }
}
