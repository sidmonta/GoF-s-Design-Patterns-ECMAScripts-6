export default class FileHandler {
  constructor (fName = '') {
    this.fName = fName
  }

  get filename () {
    return this.fName
  }

  getContent () {}

  getLine (requestLine) {}
}
