import {CD} from 'CD'
export class CDPlayer {
  accept (med) {
    if (med instanceof CD) this.CDInside = med
    else throw String('Media is not type CD')
  }

  play () {
    if (typeof this.CDInside === 'undefined') {
      console.log('Error: insert a CD')
    } else {
      console.log(this.CDInside.readDisk())
    }
  }
}
