# Singleton
##### (GoF pag. 151)

## Descrizione
Separa un’astrazione dalla sua implementazione, in modo che entrambe possano variare indipendentemente

## Esempio
Nello sviluppo di una libera di classi per supporto allo sviluppo di applicazioni matematiche, si ha definito la possibilità di gestire due tipologie di matrici numeriche, come raffinamento dell’astrazione Matrix, che fornisce le operazioni generali di gestione di dati matriciale:

- La matrice completa, nella quale tutte le celle sono rappresentate come oggetti all’interno di esse (CompleteMatrix)
- La matrice _sparse_, che soltanto ha nei suoi interni oggetti contenenti i valori diversi di zero (SparseMatrix)

Indipendentemente dal tipo dei raffinamenti di matrice da utilizzare, le celle della matrice (che saranno rappresentate da oggetti aventi come attributi le proprie coordinate e il valore da tenere) dovranno essere immagazzinati in qualche tipologia di collezione d’oggetti. Si consideri che gli sviluppatori della libreria considerano due tipi di collezioni per implementare il supporto delle celle, tra le diverse tipologie di collezioni fornite da Javascript: Array e Set

Il problema consiste nella definizione di un modo di rappresentare e gestire efficientemente entrambe le gerarchie, in modo tale che una possa variare senza avere impatto sull’altra.

Il “Bridge” pattern suggerisce la separazione dell’astrazione (gerarchia di Matrix) dall’implementazione (gerarchia di Collection), in gerarchie diverse, legando oggetti della seconda a quelli della prima, tramite una relazione di composizione. In questo modo ogni oggetto della gerarchia di Matrix sarà configurato con un particolare oggetto Collection da utilizzare.

## Partecipanti
* __Abstraction__: classe _Matrix_
	-	Specifica l’interfaccia dell’astrazione
	-	Gestisce un riferimento ad un oggetto __Implementor__
* __RefinedAbstraction__: classi _CompleteMatrix_ e _SparseMatrix_.
	-	Implementano i metodi dell’__Abstraction__
*	__Implementor__: classe _Collection_
	- Specifica l’interfaccia definita per le classi di implementazione.
* __ConcreteImplementator__ classi *Array* e _Set_
	- Implementano l’interfaccia __Implementator__
