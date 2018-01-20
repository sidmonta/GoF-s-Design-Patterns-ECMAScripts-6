import { Component } from 'Component'

export class CompoundPart extends Component {
  constructor (aName) {
    super(aName)
    this.children = []
  }

  describe () {
    console.log(`
      Component: ${this.same}
      Component by: {
        ${this.children.map(ch => ch.describe()).join()}
      }
    `)
  }

  add (c) {
    this.children.push(c)
  }

  remove (c) {
    this.children = this.children
      .filter(elem => elem.name !== c.name)
  }

  getChild (n) {
    return this.children[n]
  }
}
