# Composite
#### (GoF pag 163)

## Descrizione
Consente la costruzione di gerarchie di oggetti composti. Gli oggetti composti possono essere conformati da oggetti singoli, oppure da altri oggetti composti. Questo pattern è utile nei casi in cui si vuole:
* Rappresentare gerarchie di oggetti tutto-parte
* Essere in grado di ignorare le differenze tra oggetti singoli e oggetti composti

## Esempio
Nel magazzino di una ditta fornitrice di computer ci sono diversi prodotti, quali computer pronti per la consegna, e pezzi  di ricambio (o pezzi destinati alla costruzione di nuovi computer). Dal punto di vista della gestione del magazzino, alcuni di questi pezzi sono pezzi singoli (indivisibili), altri sono pezzi composti da altri pezzi. Ad esempio, il “monitor”, “la tastiera”, e la “RAM” sono pezzi singoli, intanto il “main system“, è il pezzo composto da tre pezzi singoli (“processore”, “disco rigido” e “RAM”). Un altro esempio di pezzo composto è il “computer”, che si compone di un pezzo composto (“main system“) e due pezzi singoli (“monitor” e “tastiera”).

Il problema è la rappresentazione omogenea di tutti gli elementi presenti nel magazzino, sia dei singoli componenti, sia di quelli composti da altri componenti.

## Partecipanti
* __Component__: classe astratta _Component_.
	-	Dichiara una interfaccia comune per oggetti singoli e composti.
	- Implementa le operazioni di default o comuni a tutte le classi
* __Leaf__: classe _SinglePart_.
	- Estende la classe _Component_, per rappresentare gli oggetti che non sono composti (foglie).
	- Implementa le operazioni per questi oggetti
* __Composite__: classe _CompoundPart_.
	- Estende la classe _Component_, per rappresentare gli oggetti composti.
	- Immagazzina al suo interno i propri componenti.
	- Implementa le operazioni proprie degli oggetti composti, e particolarmente quelle che riguardano la gestione dei propri componenti.
* __Client__: in questo esempio sarà il programma principale, quello che farà le veci del cliente
	- Utilizza gli oggetti singoli e composti tramite l’interfaccia rappresentata dalla classe astratta _Component_