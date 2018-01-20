export class Rectangle {
  setShape (x, y, a, l, c) {
    this.y0 = y
    this.x0 = x
    this.height = a
    this.width = l
    this.color = c
  }

  getArea () {
    return this.x0 * this.y0
  }

  getOriginX () {
    return this.x0
  }

  getOriginY () {
    return this.y0
  }

  getOppositeCornerX () {
    return this.x0 + this.height
  }

  getOppositeCornerY () {
    return this.y0 + this.width
  }

  getColor () {
    return this.color
  }
}
