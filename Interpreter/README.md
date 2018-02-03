# Interpreter
#### (GoF pag. 243)

## Descrizione
Dato un linguaggio, definisce una rappresentazione della sua grammatica insieme ad un interprete che utilizza questa rappresentazione per l'interpretazione delle espressioni in quel linguaggio.

## Esempio
Si desidera costruire un applicativo per la valutazione di espressioni logiche, in diversi contesti, dove un contesto rappresenta un insieme di valori assegnati alle variabili presenti nell'espressione. Un esempio di espressione logica è:
```
  (true AND p) OR (q AND NOT p)
```
Nell'espressione precedente __p__ e __q__ sono variabili logiche, __true__ è una costante e __AND__, __OR__ e __NOT__ sono gli operatori. Il risultato di questa espressione si presenta per ogni possibile combinazione di __p__ e __q__

La grammatica per la costruzione di espressioni logiche da gestire in questo applicativo è la seguente:

```
BooleanExpression ::= VariableExpression | Constant | OrExpression | AndExpression | NotExpression | '(' BooleanExpression ')'
AndExpression ::= BooleanExpression 'AND' BooleanExpression
OrExpression ::= BooleanExpression 'OR' BooleanExpression
NotExpression ::= 'NOT' BooleanExpression
Constant ::= 'true' | 'false'
VariableExpression ::= 'a' | 'b' | ... | 'x' | 'y' | 'z'
```

Si vuole stabilire un meccanismo per rappresentare e interpretare le espressioni logiche secondo la grammatica specificata

Il pattern 'Interpreter' utilizza una classe per rappresentare ogni regola grammaticale. Queste classi, che implementano la stessa interfaccia (AbstractExpression), possono essere espressioni finali (TerminalExpression), oppure espressioni composte da altr espressioni (NonTerminalExpression). I simboli del lato destro di ogni regola, invece, sono variabili di istanza delle classi.

Ogni espressione definita da questa grammatica è rappresentata da un albero di sintassi astratto. L'interpretazione di queste espressioni viene eseguita dall'operazione "interpret" implementata in tutte le classi, che risulta applicata sul contesto di applicazione dell'interprete (Context), dove sono presenti i dati di input.

## Partecipanti
* **AbstractExpression**: interfaccia _BooleanExpression_.
  - Dichiara una interfaccia contenente l'operazione d'interpretazione ("evaluate", in questo caso), che è comune a tutti i nodi nell'albero astratto di sintassi.
* **TerminalExpression**: classi _VariableExpression_ e _Constant_.
  - Implementano l'operazione di interpretazione, specificata nell' **AbstractExpression** e associata a espressioni finali della grammatica.
* **NonTerminalExpression**: classi _AndExpression_, _AndExpression_ e _NotExpression_.
  - Ogni classe rappresenta una regola della grammatica.
  - Gestione riferimenti di tipo **AbstractExpression** per ogni simbolo componente.
  - Implementano l'operazione di iterpretazione, specificata nell'**AbstractExpression** e associata a espressioni non finali della grammatica. Tipicamente questo consiste in un richiamo alle operazioni d'interpretazioni presenti nei propri componenti.
* **Context**: classe _Context_:
  - Contiene l'informazione globale sulla quale deve agire l'interprete.
* **Client**: applicazioe _main_.
  - Construisce l'albero astratto di sintassi, che rappresenta una particolare espressione nel linguaggio che la grammatica definisce.
  - Invoca l'operazione di interpretazione.
