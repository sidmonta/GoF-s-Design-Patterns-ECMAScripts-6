import { EventSymbol } from 'EventSymbol'

const events = new Map()
export default class EventSymbolFactory {
  static newEventSymbol (event) {
    let evRef = events.get(event)
    if (evRef) {
      evRef = new EventSymbol(event)
      events.set(event, evRef)
    }

    return evRef
  }
}
