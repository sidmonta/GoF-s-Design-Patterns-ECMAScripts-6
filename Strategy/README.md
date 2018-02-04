# Strategy
#### (GoF pag. 315)

## Descrizione
Consente la definizione di una famiglia d'algoritmi, incapsula ognuno e gli fa intercambiabili fra di loro. Questo permette di modificare gli algoritmi in modo indipendente dai clienti che fanno uso di essi.

## Esempio
La progettazione di una applicazione che offre delle funzionalità matematiche, considera la gestione di una apposita classe (MyArray) per la rappresentazione di vettori di numeri. Tra i metodi di questa classe si è definito uno che esegue la propria stampa. Questo metodo potrebbe stampare il vettore nel seguente modo (chiamato, ad esempio MathFormat):
`{12, -7, 3, ...}` oppure di questo altro mod (chiamato, ad esempio StandardFormat):
`Arr[0]=12 Arr[1]=-7 Arr[2]=3 ...`.
È anche valido pensare che questi formati potrebbero posteriormente essere sostituiti da altri.

Il problema è trovare un modo di isolare l'algoritmo che formatta e stampa il contenuto dell'array, per farlo variare in modo indipendente dal resto dell'implementazione della classe.

Lo "Strategy" pattern suggerisce l'incapsulamento della logica di ogni particolare algoritmo, in apposite classi (ConcreteStrategy) che implementano l'interfaccia che consente agli oggetti MyArray (Context) di interagire con loro. Questa interfaccia deve fornire un accesso efficiente ai dati del Context, richiesti da ogni ConcreteStrategy, e viceversa.

## Partecipanti
* **Strategy**: interfaccia _ArrayDisplayFormat_.
  - Dichiara una interfaccia comune per tutti gli algoritmi supportati. Il **Context** utilizza questa interfaccia per invocare gli algoritmi definiti in ogni **ConcreteStrategy**
* **ConcreteStrategy**: class _StandardFormat_ e _MathFormat_.
  - Implementano gli algoritmi che usano l'interfaccia **Strategy**.
* **Context**: classe _MyArray_.
  - Viene configurato con un oggetto **ConcreteStrategy** e mantiene un riferimento verso esso.
  - Può specificare una interfaccia che consenta alle **Strategy** di accedere ai propri dati
