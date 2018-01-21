/**
 * Classe che implementa un Concrete Product.
 * label e html sono due proprietà della classe, mentre setPlaceConnected è un
 * metodo.
 */
export default class Connector {
  set label (l) {
    this.l = l
  }

  get label () {
    return this.l
  }

  setPlaceConnected (origin, destination) {
    this.place1 = origin
    this.place2 = destination
  }

  get html () {
    let elem = document.createElement('div')
    elem.setAttribute('class', 'connector')
    elem.appendChild(document.createTextNode(this.l + ': From '))
    elem.appendChild(this.place1.html)
    elem.appendChild(document.createTextNode(' to '))
    elem.appendChild(this.place2.html)

    return elem
  }
}
