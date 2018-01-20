import {CD} from 'CD'

export class CDRecorder {
  accept (med) {
    if (med instanceof CD) this.CDInside = med
    else throw String('Media is not type CD')
  }

  record (sound) {
    if (typeof this.CDInside === 'undefined') {
      console.log('Error: insert a CD')
    } else {
      this.CDInside.writeOnDisk(sound)
    }
  }
}
