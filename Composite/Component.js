import SinglePart from 'SinglePart'

export class Component {
  constructor (aName) {
    this.name = aName
  }

  describe () {}

  add (c) {
    if (this instanceof SinglePart) {
      throw String('Metodo non supportato per un oggetto SinglePart')
    }
  }

  remove (c) {
    if (this instanceof SinglePart) {
      throw String('Metodo non supportato per un oggetto SinglePart')
    }
  }
}
