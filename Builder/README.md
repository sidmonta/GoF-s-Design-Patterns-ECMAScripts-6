# Builder
#### (GoF pag. 97)

## Descrizione
Separa la costruzione di un oggetto complesso della sua rappresentazione, in modo che lo stesso processo di costruzione consenta la creazione di diverse rappresentazioni.

## Esempio
Per costruire modelli concettuali di dati, nell’ambito della progettazione di database, lo schema ER è ampiamente utilizzato, anche se non esiste accordo su di un’unica rappresentazione grafica di essi. Per esempio, per costruire un modello informativo nel quale si vuole indicare che “uno studente appartiene ad una singola università, e un’università può non avere studenti, oppure avere un numero illimitato di questi”, una delle notazioni diffuse consente di rappresentare questo fatto nel seguente modo:

			[Studente] —(1,1)— <Studia> —(0,N)— [Università]

Invece un’altra notazione lo rappresenta così:

			[Studente] —(N,1)—> [Università]

Il primo schema, ad effetti di quest’esempio, verrà chiamato “modello non orientato”, intanto che il secondo “modello orientato”.
Entrambi modelli sono praticamente equipollenti nei confronti di un progetto di sviluppo, essendo possibile notare che l’unica differenza è l’omissione, nella seconda rappresentazione, del nome della relazione esistente tra le due entità, e il numero che indica la partecipazione minima d’ogni entità nella relazione.

Uno strumento di supporto alla costruzione di modelli, potrebbe non solo avere la possibilità di gestire entrambe le tipologie di diagrammi, ma anche essere in grado di produrre i modelli in sopporti (classi di oggetti) di diversa natura. Ad esempio, in un caso potrebbe essere richiesta la costruzione di un modello come un oggetto grafico, intanto che in un altro, la produzione di file di testo o di un documento XML che lo rappresenti. Nel caso di quest’ultimo esempio si è deciso di avere un modello non orientato rappresentato come un’istanza di una classe ERMode, e di un modello orientato rappresentato da una stringa.

Si osservi che siccome c’è una rappresentazione comune di base per entrambi i modelli, il processo di costruzione in ogni caso sarà diverso soltanto dal tipo di “mattone” utilizzato nella costruzione, piuttosto che nella logica del processo stesso. Per tanto, il problema consiste nella definizione di un sistema che consenta di ottenere prodotti diversi, senza raddoppiare la logica dl processo utilizzato.

## Partecipanti
*	__Builder__: classe _ModelBuilder_.
	-	Dichiara un’interfaccia per le operazioni che creano le parti dell’oggetto __Product__
	-	Implementa il comportamento di default per ogni operazione.
* __Concrete Builder__: classi _OrientedERBuilder_ e _NoOrientedERBuilder_
	-	Forniscono le operazioni concrete dell’interfaccia corrispondente al __Builder__
	-	Costruiscono e assemblano parti del __Product__
	-	Forniscono un metodo per restituire il __Product__
* __Director__: classe _ERHardCodedDirector_.
	-	Costruisce il __Product__ invocando i metodi dell’interfaccia del Builder.
* __Product__: classi _String_ e _ERModel_
	-	Rappresenta l’oggetto complesso in costruzione. I __Concrete Builder__ costruiscono la rappresentazione interna del __Product__
	- Include classi che definiscono le parte del __Product__