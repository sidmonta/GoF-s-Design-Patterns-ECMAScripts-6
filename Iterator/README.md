# Iterator
#### (GoF pag. 257)

## Descrizione
Fornisce un modo di accendere sequenzialmente agli oggetti presenti in una collezione, senza esporre la rappresentazione interna di questa.

## Esempio
Il percorso di un viaggiatore è rappresentato come una collezione ordinata di oggetti, dove ogni oggetto rappresenta un luogo visitato. La collezione può essere implementata in base a _array_, una _linked list_ o qualunque altra struttura.
Una applicazione sarebbe interessata in poter accedere agli elementi di questa collezione in una sequenza particolare, ma senza dover interagire direttamente con il tipo di struttura interna.

Il pattern "Iterator" suggerisce l'implementazione di un oggetto che consenta l'accesso e percorso della collezione, e che fornisca una interfaccia standard verso che è interessato a percorrerla e ad accede agli elementi

## Partecipanti
* **Iterator**: interfaccia _ListIterator_.
  - Specifica l'interfaccia per accedere e percorrere la collezione.
* **ConcreteIterator**: oggetto che implementa l'interfaccia _ListIterator_.
  - Implementa la citata interfaccia.
  - Tiene traccia della posizione corrente all'interno della collezione.
* **Aggregate**: interfaccia _List_.
  - specifica una interfaccia per la creazione di oggetti Iterator.
* **ConcreteAggregate**: classe _LinkedList_.
  - Crea e restituisce una istanza di iterator.
