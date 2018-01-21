import ConsoleReader from 'ConsoleReader'

const consoleReader = new ConsoleReader()

let text = ''
console.log('Inserisci una stringa: ')
text = consoleReader.readString()
console.log(`Hai scritto ${text}`)

console.log('Inserisci un numero intero: ')
text = consoleReader.readInteger()
console.log(`Hai scritto ${text}`)

console.log('Inserisci una numero: ')
text = consoleReader.readFload()
console.log(`Hai scritto ${text}`)
