export class StandardFormat {
  printData (array) {
    console.log(array.map((e, i) => `Arr[${i}]=${e}`).join(' '))
  }
}

export class MathFormat {
  printData (array) {
    console.log('{' + array.join(', ') + '}')
  }
}
