import Tape from 'Tape'
export class TapePlayer {
  accept (med) {
    if (med instanceof Tape) this.tapeInside = med
    else throw String('Media is not type Tape')
  }

  play () {
    if (typeof this.tapeInside === 'undefined') {
      console.log('Error: insert a Tape')
    } else {
      console.log(this.tapeInside.readTape())
    }
  }
}
