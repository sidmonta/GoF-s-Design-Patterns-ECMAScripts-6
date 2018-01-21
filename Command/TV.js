export default class TV {
  constructor () {
    this.power = false
    this.volume = 0
    this.channel = 2
  }

  power () {
    if (!this.power) {
      this.power = true
      console.log('La TV è ON')
    } else {
      this.power = false
      console.log('La TV è OFF')
    }
  }

  volumeUp () {
    if (this.power) {
      if (this.volume < 10) {
        this.volume++
        console.log(`Il livello del volume è a ${this.volume}`)
      } else {
        console.log('Accendi la televisione prima')
      }
    }
  }

  volumeDown () {
    if (this.power) {
      if (this.volume > 0) {
        this.volume--
        console.log(`Il livello del volume è a ${this.volume}`)
      } else {
        console.log('Accendi la televisione prima')
      }
    }
  }

  setChannel (ch) {
    if (this.power) {
      if (ch >= 2 && ch < 140) {
        this.channel = ch
        console.log(`Il canale corrente è ${this.channel}`)
      }
    } else {
      console.log('Accendi la televisione prima')
    }
  }
}
