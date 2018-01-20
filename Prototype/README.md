# Prototype
##### (GoF pag. 117)

## Descrizione
Specifica i tipi di oggetti da creare, utilizzando un’istanza prototipo, e crea nuove istanze tramite la copia di questo prototipo.


## Esempio
Si pensi alla creazione di uno schedulatore in grado di eseguire operazioni su oggetti che rappresentano istanti di tempo. Si ipotizzi che una delle operazioni da realizzare sia definire l’ora di termine di una attività, utilizzando come dati di input la sua ora di inizio e un numero intero corrispondente alla durata dell’attività. Questa operazione deve restituire un nuovo oggetto che rappresenti l’ora di termine, calcolata come la somma dell’ora di inizio e la durata dell’attività:

		15:20:10 (ora inizio) + 6 (durata) —> schedatore —> 21:20:10 (ora finale)

Si vuole progettare lo schedulatore in modo che sia in grado di ricevere come input (ora inizio) oggetti di diverse classi che implementino una particolare interfaccia. Si vuole che l’output dello schedatore sia un oggetto contenente il risultato della schedulazione, che appartenga alla stessa classe dell’oggetto ricevuto come input. Il problema è che al momento di progettare lo schedatore solo si ha conoscenza dell’interfacciam non delle specifiche classi su cui dovrà agire.

## Partecipanti
*	**Prototype**: classe astratta *ClonableTime*
	-	Dichiara e implementa l’interfaccia per clonarli da se.
	-	Implementa il metodo che verrà chiamato per clonare l’oggetto (*cloneItself*), il quale fa un richiamo al metodo protetto *clone*
* **Concrete Prototype**: classi *TimeImplementationC1* e *TimeImplementationC2*
	- Implementano le particolari versioni di oggetti da utilizzare e clonare (estendono *ClonableTime*).
* **Client**: classe *SchedulerC*
	- Richiama il metodo di clonazione degli oggetti *TimeImplementationC1* e *TimeImplementationC2*, per creare un nuovo oggetto.