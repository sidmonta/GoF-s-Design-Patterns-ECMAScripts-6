# Adapter
##### (GoF pag. 141)

## Descrizione
Converte l’interfaccia di una classe in un’altra interfaccia aspettata dai clienti. In questo modo, si consente la collaborazione tra classi che in un altro modo non potrebbero interagire dovuto alle loro diverse interfacce.

## Esempio
Si vuole sviluppare un’applicazione per lavorare con oggetti geometrici. Questi oggetti saranno gestiti dall’applicazione tramite un’interfaccia particolare (Polygon), che offre un insieme di metodi che gli oggetti grafici devono implementare. A questo punto si ha a disposizione una antica classe (Rectangle) che si potrebbe riutilizzare, che però ha un’interfaccia diversa, e che non si vuole modificare.

Il problema consiste nella definizione di un modo di riutilizzare la classe esistente tramite una nuova interfaccia, ma senza modificare l’implementazione originarle.

## Partecipanti
*	**TargetInterface**: interfaccia Polygon.
	-	Specifica l’interfaccia che il *Client* utilizza.
* **Client**: classi *ClassAdapterExample* e *ObjectAdapterExample*.
	-	Comunica con l’oggetto interessato tramite la *TargetInterface*.
* **Adaptee**: classe *Rectangle*.
	- Implementa una interfaccia che deve essere adattata.
* **Adapter**: classi *RectangleClassAdapter* e *RectangleObjectAdapter*.
	-	Adatta l’interfaccia dell’*Adaptee* verso la *TargetInterface*.
