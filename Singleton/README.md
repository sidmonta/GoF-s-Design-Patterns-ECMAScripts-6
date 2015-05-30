# Abstract Factory
##### (GoF pag. 127)

## Descrizione
Specifica i tipi di oggetti da creare, utilizzando un’istanza prototipata, e crea nuove istanze tramite la copia di questo prototipo.

## Esempio
L’applicativo deve istanziare un oggetto che gestisce una stampante.
Questo oggetto deve essere unico, vale a dire, deve esserci soltanto una sola istanza di esso, altrimenti potrebbero risultare dei problemi nella gestione della risorsa.

Il problema è la definizione di una classe che gestisca la creazione di un’unica istanza all’interno del programma.

## Partecipanti
* __Singleton__: classe _PrinterSpooler_
	-	Definisce un metodo ‘getIstance’ che restituisce un riferimento alla unica istanza di se stessa
	-	E’ responsabile della creazione della propria istanza unica.