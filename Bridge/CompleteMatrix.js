import { Matrix } from 'Matrix'
export class CompleteMatrix extends Matrix {
  constructor (rows, cols, collection) {
    super(rows, cols, collection)

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        super.createPosition(i, j)
      }
    }
  }

  put (row, col, value) {
    super.getPosition(row, col).value = value
  }

  get (row, col) {
    return super.getPosition(row, col).value
  }
}
