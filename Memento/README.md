# Memento
#### (GoF pag. 273)

## Descrizione
Senza violare l'incapsulazione di un oggetto, cattura e porta fuori di sé il suo stato interno, in modo che questo stato possa essere posteriormente ristabilito.

## Esempio
Un viaggiatore, in ogni tappa del suo viaggio, decide casualmente il prossimo destino. Quando il viaggiatore arriva al destino determinato, decide se il luogo è del suo gusto o meno. Nel primo caso, determina per un nuovo destino, nel secondo, invece, ritorna al luogo da dove era partito.

Si noti che l'algoritmo di viaggio non consente di determinare le condizioni di partenza (per esempio, la distanza effettiva percorsa a quel punto, e la lunghezza dell'ultimo tratto camminato) in base alle condizioni di arrivo, dato che il viaggio è deciso casualmente.

Un semplice modo per gestire il ritorno alle condizioni di partenza segue l'approccio di esternalizzare i valori delle variabili che rappresentano lo stato, vale a dire, copiare in variabili esterne per eventualemente poter ripristinare il loro valore. Questa però può essere una soluzione poco adeguata dal punto di vista della programmazione orientata ad oggetti, poiché si vulnera l'incapsulamento dell'oggetto, rendendo visibili i suoi dettagli implementativi.

Il problema è trovare un meccanismo per una esternalizzazione dello stato, in modo di poter supportare operazioni di ripristino, senza esporre i dettagli di implementazione.

Il "Memento" è un pattern in grado di soddisfare i requisiti esposti nella sezione precedente. Lo stato dell'oggetto che si vuole salvare (Originator) è immagazzinato in un oggetto (Memento) che è portato fuori, e ritenuto esternamente da un altro oggetto (Caretaker). Quando si vuole restituire uno stato immagazzinato dell'Originator, è invocato un suo metodo di ripristino che agisce in base a un Memento che contiene quel particolare stato.

## Partecipanti
* **Memento**: interfaccia _Memento_.
  - Specifica l'interfaccia che i **ConcrateMemento** espongono al **Caretaker**. Questa interfaccia impedisce l'accesso alle proprie variabili, e fornisce soltanto l'operazione di restituzione dello stato
* **ConcreteMemento**: inner class _WalkerMemento_, appartenente alla classe _RandomWalker_.
  - Implementa l'interfaccia **Memento**
  - Immagazzina lo stato interno di un oggetto **Originator**
* **Originator**: classe _RandomWalker_.
  - Crea una instanza di **Memento** come _inner class_, contenente la fotografia del proprio stato corrente (o di porzione di esso).
  - Utilizza il **Memento** oer restituire il proprio stato interno.
* **CareTaker**: applicazione _main_.
  - Conserva il **Memento**.
  - Mai esamina il contenuto del **Memento**
