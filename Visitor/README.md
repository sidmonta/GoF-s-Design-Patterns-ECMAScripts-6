# Visitor
#### (GoF pag. 331)

## Descrizione
Rappresenta una operazione da essere eseguita in una collezione di elementi di una struttura. L'operazione può essere modificata senza alterare le classi degli elementi dove opera.

## Esempio
Si consideri una struttura che contiene un insieme eterogeneo di oggetti, su i quali bisogna applicare la stessa operazione, che però è implementata in modo diverso da ogni classe di oggetto. Questa operazione potrebbe semplicemente stampare qualche dato dell'oggetto, formattato in un modo particolare. Per esempio la collezione potrebbe essere un Vector che ha dentro di se oggetti String, Integer, Double o altri Vector. Si noti che se l'oggetto da stampare è un Vector, questo dovrà essere scandito per stampare gli oggetti trovati ai suoi interni. Si consideri anche che l'operazione ad applicare non è in principio implementata negli oggetti appartenenti alla collezione, e che questa operazione potrebbe essere ulteriormente ridefinita.

Un approccio possibile sarebbe creare un oggetto con un metodo adeguato per scandire collezioni o stampare i dati dell'oggetto:

```javascript
function printCollection (collection) {
  collection.forEach(o => {
    if (o instanceof Object) {
      printCollection(o)
    } else if (o instanceof String) {
      console.log(`"${o}"`)
    } else if (o instanceof Number) {
      console.log(`${o}f`)
    } else {
      console.log(o)
    }
  })
}
```
Questo approccio va bene se si vuole lavorare con pochi dati, ma intanto questi aumentano il codice diventa una lunga collezione di ```if...else```.

Il problema è trovare un modo di applicare questa operazione a tutti gli oggetti, senza includerla nel codice delle classi degli oggetti.

La soluzione consiste nella creazione di un oggetto (ConcreteVisitor), che è in grado di percorrere la collezione, e di applicare un metodo proprio su ogni oggetto (Element) visitato nella collezione (avendo un riferimento a questi ultimi come paramentro). Per agire in questo modo bisogna fare in modo che ogni oggetto della collezione aderisca ad un'interfaccia (Visitable), che consente al ConcreteVisitor di essere "accettato" da parte di ogni Element. Poi il Visitor, analizzando il tipo di oggetto ricevuto, fa l'invocazione alla particolare operazione che in ogni caso si deve eseguire.

## Partecipanti
* **Visitor**: interfaccia _Visitor_.
  - Specifica le operazioni di vista per ogni classe di **ConcreteElement**
* **ConcreteVisitor**:
  - Specifica le operazioni di vista per ogni classe di **ConcreteElement**. La firma di ogni operazione identifica la classe che spedisce la richiesta di visita al **ConcreteVisitor**, e in questo modo il visitor determina la concreta classe da visitare.
  Finalmente il **ConcreteVisitor** accede agli elementi direttamente tramite la sua interfaccia.
* **Element**: interfaccia _Visitable_
  - Dichiara l'operazione _accept_ che riceve un riferimento a un **Visitor** come argomento.
* **ConcreteElement**: classi _VisitableString_ e _VisitableFloat_.
  - Implementa l'interfaccia **Element**
* **ObjectStructure**: classe _Vector_
  - Offre la possibilità di accettare la visita dei suoi componenti.
