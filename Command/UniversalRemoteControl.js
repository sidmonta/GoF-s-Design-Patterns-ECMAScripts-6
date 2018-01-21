export default class UnversalRemoteControl {
  constructor (pw, au, ad, nu) {
    this.buttonPower = pw
    this.buttonArrowUp = au
    this.buttonArrowDown = ad
    this.keypadToEnterNumber = nu
  }

  pressButtonPower () {
    this.buttonPower.execute()
  }

  pressButtonArrowUp () {
    this.buttonArrowUp.execute()
  }

  pressButtonArrowDown () {
    this.buttonArrowDown.execute()
  }

  pressKeypadToEnterNumber () {
    this.keypadToEnterNumber.execute()
  }

  pressBack () {
    this.keypadToEnterNumber.undo()
  }
}
