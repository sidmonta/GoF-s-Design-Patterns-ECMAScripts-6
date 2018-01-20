# Decorator
#### (GoF pag. 117)

## Descrizione
Aggiunge dinamicamente responsabilità addizionali ad un oggetto. In questo modo si possono estendere le funzionalità d’oggetto particolari senza coinvolgere complete classi.

## Esempio
Si pensi ad un modello di oggetti che rappresenta impiegati (Employee) di un’azienda; tra gli impiegati, ad esempio, esistono gli Ingegneri (Engineer) che implementano le operazioni definite per gli impiegati, secondo le proprie caratteristiche.

Il sistema comprende la possibilità di investire gli impiegati con delle responsabilità aggiuntive, ad esempio quando un impiegato diventa capoufficio (Administrative Manager), oppure quando viene assegnato alla direzione di un progetto (Project Manager), essendo entrambe responsabilità non escludenti tra di loro.

Questi cambiamenti di tipologia di alcuni impiegati coinvolgono modifiche delle responsabilità definite per gli oggetti, alterandone le esistenti o aggiungendone nuove. Per questa ragione, sarebbe di interesse definire un modo per aggiungere dinamicamente nuove responsabilità ad un oggetto specifico, eventualmente con l’ulteriore possibilità di toglierle.

## Partecipanti
* __Component__: classe _Employee_
	-	Specifica l’interfaccia degli oggetti che possono avere delle responsabilità aggiunte dinamicamente
* __ConcreteComponent__: classe _Engineer_
	-	Implementa l’oggetto in cui si possono aggiungere nuove responsabilità
* __Decorator__: classe _ResponsibleWorker_
	-	Possiede un riferimento all’oggetto _Component_ e specifica un’interfaccia concordante con l’interfaccia _Component_
* __ConcreteDecorator__: classe _AdministrativeManager_ e _ProjectManager_.
	-	Aggiunge nuove responsabilità al _Component_