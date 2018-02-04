export default class MyArray {
  constructor (size) {
    this.array = new Array(size).fill(0)
  }

  setValue (pos, value) {
    this.array[pos] = value
  }

  getValue (pos) {
    return this.array[pos]
  }

  getSize () {
    return this.array.length
  }

  setDisplayFormat (adf) {
    this.format = adf
  }

  display () {
    this.format.printData(this.array)
  }
}
