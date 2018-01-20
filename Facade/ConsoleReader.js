import readline from 'readline'

export default class ConsoleReader {
  constructor (secMod) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    this.rl.pause()
  }

  async _read () {
    this.rl.resume()

    let result = ''
    try {
      result = await new Promise((resolve, reject) => {
        this.rl.on('line', line => {
          resolve(line)
        })
      })
    } catch (e) {
      this.rl.pause()
      throw String('Fallita la lettura')
    }

    this.rl.pause()
    return result
  }

  readString () {
    return this._read()
  }

  async readInteger () {
    let res = this._read()
    return parseInt(res)
  }

  async readFloat () {
    let res = this._read()
    return parseFloat(res)
  }
}
