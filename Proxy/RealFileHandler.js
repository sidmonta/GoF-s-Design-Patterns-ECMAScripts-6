import FileHandler from 'FileHandler'

export default class RealFileHandler extends FileHandler {
  constructor (fName) {
    super(fName)
    console.log('(creazione del vero file handler con il contenuto del file)')
    this.content = document.querySelector(fName).value
  }

  getContent () {
    return String(this.content)
  }

  getLine (requestedLine) {
    console.log('accesso dal vero handler')
    const rows = this.content.split('\n')
    return (this.numLines > requestedLine) ? '' : rows[requestedLine - 1]
  }
}
