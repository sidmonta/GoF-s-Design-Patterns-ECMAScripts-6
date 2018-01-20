import {CD} from 'CD'
import {CDRecorder} from 'CDRecorder'
import {CDPlayer} from 'CDPlayer'

export class CDDevicesFactory {
  createPlayer () {
    return new CDPlayer()
  }

  createRecorder () {
    return new CDRecorder()
  }

  createMedia () {
    return new CD()
  }
}
