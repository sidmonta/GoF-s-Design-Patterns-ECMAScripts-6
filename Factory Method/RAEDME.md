# Factory Method
#### (GoF pag. 107)

## Descrizione
Definisce un’interfaccia per creare oggetti, ma lascia alle sottoclassi la decisione del tipo di classe da istanziare.

## Esempio
Si pensi ad un framework per la manipolazione di elementi cartografici.
Due classi astratte sono fondamentali per il progetto di questo framework: la classe Elemento che rappresenta qualunque tipo di oggetto da posizionare in una mappa (es. luoghi e collegamenti), e la classe Strumento, che fornisce le operazioni comuni di manipolazione degli Elementi. Dato che sia in grado di gestire un particolare tipo di mappa (che utilizza un insieme definito di Elementi), richiese l’estensione di esse.
Si fa notare che lo strumento, è in grado di stabilire quanto un particolare tipo di elemento deve essere creato (ad esempio, dopo di aver richiesto un identificativo per un elemento), ma non il tipo particolare di Elemento da creare. In altre parole, il framework deve creare istanze di classi, che non possono essere istanziate.

## Partecipanti
* __Concrete Product__: classi _Place_ e _Connector_
	-	implementano i prodotti concreti.
* __Creator__: classe _ElementHandler_
	-	Dichiara il factory method (metodo ‘newElement’) che restituisce un oggetto della classe _Concrete Product_
	- Richiama il factory metodi per creare i _Concrete Product_
* __Concrete Creator__: classi _PlaceHandler_ e _ConnectorHandler_
	-	Ridefinisce il factory method per restituire una istanza di _Concrete Product_