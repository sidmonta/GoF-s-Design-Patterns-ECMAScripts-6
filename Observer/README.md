# Observer
#### (GoF pag. 293)

## Descrizione
Consente la definizione di associazioni di dipendenza di molti oggetti verso di uno, in modo che se quest'ultimo cambia stato, tutti gli altri sono notificati e aggiornati automaticamente.

## Esempio
Ad un oggetto (Subject) vengono comunicati diversi numeri. Questo oggetto decide in modo casuale di cambiare il suo stato interno, memoriazzando il numero ad esso proposto. Altri due oggetti incaricati del monitoraggio dell'oggetto descritto (un Watcher e un Psychologist), devono avere notizio di ogni suo singolo cambio di stato, per eseguire i propri processi di analisi.

Il problema è trovare un modo nel quale gli eventi dell'oggetto di riferimento, siano comunicati a tuti gli altri interessati.

Il pattern "Observer" assegna all'oggetto monitorato (Subject) il ruolo di registrare ai suoi interni un riferimento agli altri oggetti che devono essere avvisati (ConcreteObservers) dagli eventi del Subject, e notificarli tramite l'invocazione a un loro metodo, presente nella interfaccia che devono implementare (Observer)

Questo pattern è stato proposto originalmente dai GoF per la manutenzione replicata dello stato del ConcreteSubject nei ConcreteObserver, motivo per il quale sono previsti una copia dello stato del primo nel secondo, e l'esistenza di un riferimento del ConcreteSubject nel ConcreteObserver.

Nonostante quello espresso nel paragrafo precedente, si deve tenere in conto che questo modello può servire anche a comunicare eventi, in situazioni nelle quali non sia di interesse gestire una copia dello stato nel Subject.
Da un'altra parte si noti che non è necessario che ogni ConcreteObserver abbia un riferimento al Subject di interesse, oppure, che i riferimenti siano verso un unico Subject.

## Partecipanti
* **Subject**: classe _Observable_
  - Ha conoscenza dei propri **Observer**, i quali possono esserci in numero illimitato
  - Fornisce operazioni per l'addizione e cancellazione di oggetti **Observer**.
  - Fornisce operazioni per la notifica degli **Objserver**.
* **Observer**: interfaccia _Observer_.
  - Specifica una interfaccia per la notifica di eventi agli oggetti interessati in un **Subject**
* **ConcreteSubject**: classe _ObservedSubject_.
  - Possiede uno stato dell'interesse dei **ConcreteSubject**
  - Invoca le operazioni di notifica ereditate dal **Subject**, quando devono essere informati i **ConcreteObserver**
* **ConcreteObserver**: classi _Watcher_ e _Psychologist_
  - Implementa l'operazione di aggiornamento dell'Observer.
