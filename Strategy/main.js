import MyArray from 'MyArray'
import { StandardFormat, MathFormat } from 'Format'

const m = new MyArray(10)
m.setValue(1, 6)
m.setValue(0, 8)
m.setValue(4, 1)
m.setValue(9, 7)

console.log(`This is the array in 'standard' format:`)
m.setDisplayFormat(new StandardFormat())
m.display()
console.log(`This is the array in 'math' format:`)
m.setDisplayFormat(new MathFormat())
m.display()
