# Flyweight
#### (GoF pag. 195)

## Descrizione
Definisce un meccanismo per compartire oggetti, in modo di fare un uso più efficiente delle risorse, particolarmente, l’utilizzo di memoria.

## Esempio
Un sistema di controllo deve gestire in tempo reale una coda di eventi (Event) che permanentemente vengono generati. Gli eventi, rappresentati come oggetti, devono essere analizzati da un controllore, che deve reagire opportunamente.

La gestone degli eventi appena descritta, crea nella memoria diversi oggetti identici che poi vengono confrontati tra di loro per determinare la uguaglianza.
In sistemi come quello descritto, normalmente la tipologia degli eventi è limitata a un insieme relativamente ridotto il cui stato in parte non varia da una istanza all'altra. Date queste caratteristiche, questo approccio comporta inefficienza dal punto di vista della gestione della memoria, e anche nelle comparazioni di tipo di eventi, se si confronta con l'approccio fornito dal "Flyweight" pattern.

Questo pattern suggerisce la crazione dei "flyweight" che sono degli oggetti condivisi che possono essere utilizzati in diversi contesti contemporaneament, dovuto al fatto che in questi contesti condividono lo stato interno, e quello che non è interno si può esternalizzare. In altre parole, questo pattern affronta la creazione di un gruppo di singoli oggetti diversi per rappresentare le tipologie di eventi, i cui riferimenti vengono riutilizzatiper rappresentare ogni istanza di evento presente nel sistema.
Questo approccio apporta due vantaggi all'efficienza del sistema presentato nell'esempio: riduce l'utilizzo della memoria, e rende più veloci le comparazioni di tipo, poiché vengono confrontati i riferimenti, non gli oggetti stessi.

## Partecipanti
* __Flyweight__: (non usato in questo esempio)
  - Specifica l'interfaccia tramite la quale i flyweight ricevono e agiscono sullo stato estrinseco.
* __ConcreteFlyweight__: classe EventSymbol.
  - Implementa l'interfaccia dei flyweight e immagazzina lo stato interno dei flyweight. Lo stato interno deve essere intrinseco, vale a dire, indipendente del contesto del __ConcreteFlyweight__
* __UnsharedConcreteFlyweight__: (non usato in questo esempio)
  - Rappresentano i tipi di flyweight non condivisi
* __FlyweightFactory__: classe EventSymbolFactory.
  - Crea e gestisce gli oggetti flyweight.
  - Assicura la condivisione dei flyweight. Quando un cliente richiede un flyweight, la FlyweightFactory fornisce un riferimento a una istanza esistente o ne crea una, se non ne esiste nessuna.
* __Client__: applicativo main
  - Possiede i riferimenti verso i flyweight.
  - Calcola o immagazzina lo stato estrinseco dei flyweight
