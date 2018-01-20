import {
  PrinterSpoolerStatic,
  PrinterSpoolerIstance
} from './PrinterSpooler'

// Prova static
PrinterSpoolerStatic.print('Hello World')

// Prova getIstance
let theUnique = PrinterSpoolerIstance.getIstance()
theUnique.print('Ciao')
let mayBeOther = PrinterSpoolerIstance.getIstance()
mayBeOther.print('Mondo')

console.log(Object.is(theUnique, mayBeOther))
