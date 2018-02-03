# Mediator
#### (GoF pag. 273)

## Descrizione
Definisce un oggetto che incapsula il modo di interagire di un gruppo di oggetti, consentendo il disaccoppiamento tra questi, in forma tale di poter variare facilmente le interazioni fra di loro.

## Esempio
Un simulatore di un sistema bancario consente di creare diverse configurazioni di cassieri (teller) e clienti in coda (queue). Ad esempio, una delle configurazioni possibili si struttura in base a due cassieriche servono soltanto i propri clienti in coda.

Un'altra configurazione , invece può ammettere il servizio di un cassieri ai clienti della coda dell'altro server, se la propria è vuota.

Questo simulatore potrebbe gestire, anche, altri modi d'interazione tra questi partecipanti.
Una progettazione semplicistica delle classi del simulatore porterebbe a stabilire dei lagami tra le configurazioni possibili e l'implementazione dei componenti. Per esempio, per la gestione della seconda modalità di funzionamento, appena illustrata, il servizio del Teller, al suo interno potrebbe avere codice del tipo:

```js
if (mode === SERVE_ONLY_OWN_QUEUE) {
  if (!ownQueue.isEmpty()) {
    OwnQueue.initService()
  }
} else if (ownQueue.isEmpty() && !otherServerQueue.isEmpty()) {
  otherServerQueue.initService()
}
...
```

Questo codice rende più difficile riutilizzare le classi per creare nuove configurazioni del sistema, dato che le interazioni possibili devono essere previste in tempo di sviluppo di ogni singolo componente. In questo senso sarebbe utile una progettazione conducente ad un modello di interazione più flessibile tra le diverse classi.

Questo pattern propone la creazione di incapsulare il comportamento collettivo delle diversi classi componenti il sistema (colleagues), tramite una classe separata denominata _Mediator_. Il Mediator diventa l'agente d'intermediazione tra i diversi oggetti, i quali soltanto devono interfacciarsi con esso, riducendo il numero di interconnessioni

## Partecipanti
* **Mediator**: interfaccia _BankServiceOrganizer_
  - Specifica una interfaccia per la comunicazione da parte dei **Colleagues**
* **ConcreteMediator**: classe _LittleBankServiceOrganizer_
  - Implementa il comportamento cooperativo tramite la coordinazione dei **Colleagues**
  - Possiede riferimenti verso i **Colleagues**
* **Colleague**: classe _BankEntity_
  - Possiede un riferimento al **Mediator**.
  - Implementa un metodo di notifica di eventi al **Mediator**
* **ConcreteColleague**: classi _Teller_ e _Queue_.
  - Comunica gli eventi al **Mediator** invece di comunicarli ad altri **Colleagues**
