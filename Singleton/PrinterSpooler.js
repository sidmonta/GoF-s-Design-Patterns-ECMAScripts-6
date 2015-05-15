
/**
 * Singleton come classe statica.
 * È il modello più semplice, ma che in realtà non è un vero e proprio
 * singleton, perché soltanto si lavora con una classe statica, non un 
 * oggetto.
 * Questa classe statica ha metodi statici che offrono i servizi richiesti. 
 */
	class PrinterSpooler {

		static print(msg)	{
			console.log(msg);
		}
	}

	//Prova
	PrinterSpooler.print('Hello World');

/**
 * Singleton creato da un metodo statico.
 * Il singleton è implementato come una classe che ha un metodo statico 
 * (getInstance) che deve essere chiamato per restituire l'istanza del Singleton.
 * L'oggetto singleton verrà istanziato solo la prima volta che il metodo sia 
 * invocato, in modo che eventuali informazioni necessarie per creare il 
 * singleton possano essere fornite in tempo di esecuzione. Le volte successive
 * sarà restituito un riferimento allo stesso oggetto.
 */
 	class PrinterSpooler	{

 		static getIstance()	{
 			if (typeof this.istance === 'undefined')
 				this.istance = new PrinterSpooler();
 			return this.istance;
 		}

 		print(msg)	{
 			console.log(msg);
 		}
 	}

	let theUnique = PrinterSpooler.getIstance();
	theUnique.print("Ciao");
	let mayBeOther = PrinterSpooler.getIstance();
	mayBeOther.print("Mondo");
 		
 	console.log(Object.is(theUnique, mayBeOther));