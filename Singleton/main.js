import {PrinterSpoolerStatic, PrinterSpoolerIstance} from './PrinterSpooler';

//Prova static
PrinterSpoolerStatic.print('Hello World');

//Prova getIstance
let theUnique = PrinterSpooler.getIstance();
theUnique.print("Ciao");
let mayBeOther = PrinterSpooler.getIstance();
mayBeOther.print("Mondo");
		
console.log(Object.is(theUnique, mayBeOther));