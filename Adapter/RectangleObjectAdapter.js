import Rectangle from 'Rectangle'

export class RectangleObjectAdapter {
  constructor () {
    this.adaptee = new Rectangle()
  }

  define (x0, y0, x1, y1, color) {
    this.adaptee.setShape(x0, y0, (x1 - x0), (y1 - y0), color)
  }

  getSurface () {
    return this.adaptee.getArea()
  }

  getCoordinates () {
    return [
      this.adaptee.getOriginX(), this.adaptee.getOriginY(),
      this.adaptee.getOppositeCornerX(), this.adaptee.getOppositeCornerY()
    ]
  }

  set name (id) {
    this.name = id
  }

  get name () {
    return this.name
  }

  getColor () {
    return this.adaptee.getColor()
  }
}
