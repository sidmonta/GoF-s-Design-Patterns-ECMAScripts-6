import FileHandler from 'FileHandler'
import RealFileHandler from 'RealFileHandler'

export default class ProxyFileHandler extends FileHandler {
  constructor (fName) {
    super(fName)
    console.log('crazione con proxy')
  }

  getContent () {
    if (!this.realHandler) {
      this.realHandler = new RealFileHandler(this.fName)
    }
    return this.realHandler.getContent()
  }

  getLine (requestedLine) {
    if (requestedLine === this.numLines) {
      console.log('accedo dalla cache del proxy')
      return this.lastLine
    } else {
      if (this.realHandler == null) {
        this.realHandler = new RealFileHandler(this.fName)
        this.lastLine = this.realHandler.getLine()
        this.lineNumber = requestedLine
      }
    }
  }
}
