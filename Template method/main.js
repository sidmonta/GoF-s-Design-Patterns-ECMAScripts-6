import VeryRestrictedItem from 'VeryRestrictedItem'
import GeneralItem from 'GeneralItem'

console.log('A very restricted item example')
const vri = new VeryRestrictedItem('VRI1', 'Golden stone', 5)
vri.setStock(20)

console.log(`
Current stock ${vri.toString()}
I will try to take 6 units:
`)
if (vri.remove(6)) {
  console.log('Items removed')
} else {
  console.log('Items cannot be removed.')
}
console.log(`
${vri.toString()}
I will try to take 3 units:
`)
if (vri.remove(3)) {
  console.log('Items removed')
} else {
  console.log('Items cannot be removed.')
}
console.log(vri.toString())

console.log('A general item example')
const gi = new GeneralItem('GEN1', 'Common stone')
gi.setStock(20, 10, 0)
console.log(`
Current stock ${gi.toString()}
I will try to take 6 units:
`)
if (gi.remove(6)) {
  console.log('Items removed')
} else {
  console.log('Items cannot be removed.')
}
console.log(`
${gi.toString()}
I will try to take 3 units:
`)
if (gi.remove(6)) {
  console.log('Items removed')
} else {
  console.log('Items cannot be removed.')
}
console.log(gi.toString())
