# State
#### (GoF pag. 305)

## Descrizione
Consente ad un oggetto di modificare il suo comportamento quando il suo stato interno cambia

## Esempio
Si pensi ad un orologio che possiede due pulsanti: MODE e CHANGE. Il primo pulsante serve per settare il modo di perazione di tre modi possibili: "visualizzazione normale", "modifica delle ore" o "modifica del minuti". Il secondo pulsante, invece, serve per accendere la luce del display, se è in modalità di visualizzazione normale, oppure per incrementare in una unità le ore o i minuti, se è in modalità di modifica di ore o di minuti.

In questo esempio, un approccio semplicistico conduce all'implementazione del codice di ogni operazione come una serie di decisioni:
```js
function buttonCHANGEPressed () {
  switch (clockState) {
    case NORMAL_DISPLAY:
      displayTimeWithLight()
      break
    case UPDATING_HOURS:
      hours++
      break
    case UPDATING_MINUTES:
      minutes++
      break
    ...
}
```

Il problema di questo tipo di codice è che si rende più difficile la manutenzione, perché la creazione di nuovi stati comporta la modifica di tutte le operazioni dove essi sono testati. Da un'altra parte non si tiene una visione dello stato, in modo di capire come agisce l'oggetto (l'orologio in questo caso), a seconda del proprio stato, perché questo comportamento è spezzato dentro l'insieme di operazioni disponibili.

Si vuole definire un meccanismo efficiente per gestire i diversi comportamenti che devono avere le operazioni di un oggetto, secondo gli stati in cui si trovi.

Il pattern "State" suggerisce di incapsulare, all'interno di una classe, il modo particolare in cui le operazioni di un oggetto (Context) vengono svolte quando lo si trova in quello stato. Ogni classe (ConcreteState) rappresenta un singolo stato possibile del Context e implementa una interfaccia comune (State) contenente le operazioni che il Context delega allo stato. L'oggetto Context deve tenere un riferimento al ConcreteState che rappresenta lo stato corrente.

## Partecipanti
* **Context**: classe _Clock_
  - Speficia una interfaccia di interesse per i clienti.
  - Mantiene una istanza di **ConcreteState** che rappresenta lo stato corrente.
* **State**: classe astratta _ClockState_.
  - Specifica l'interfaccia delle classi che incapsula il comportamento associato a un particolare stato del **Context**
* **ConcreteState**: classi _NormalDisplayState_, _UpdatingHtState_, _UpdatingMinState_.
  - Ogni classe implementa il comportamento associato ad uno stato del **Context**
