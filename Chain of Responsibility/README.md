# Chain of Responsibility
#### (GoF pag. 223)

## Descrizione
Consente di separare il mittente di una richiesta dal destinatario, in modo di consentire a più di un oggetto di gestire la richiesta. Gli oggetti destinatari vengono messi in catena, e la richiesta trasmessa dentro questa catena fino a trovare un oggetto che la gestisca

## Esempio
Una azienda commerciale deve gestire le richieste di credito dei clienti (_customers_). Internamente l'azienda si organizza in diversi livelli di responsabilità. Al livello più basso (_vendor_) viene consentito l'approvazione di richieste fino a un importo determinato. Le richieste che superano un certo importo vanno gestitie da un livello superiore (_sales manager_), il quale ha un importo massimo da gestire. Richieste che vanno oltre quest'ultimo importo, vanno gestite da un livello più alto ancora (_client account manager_).
Il problema riguarda la definizione di un meccanismo di inoltro delle richieste, del quale il chiamante non debba conoscere la struttura.

Il "Chain of Responsibility" pattern propone la costruzione di una catena di oggetti responsabili della gestione delle richieste pervenute dai clienti. Quando un ogegtto della catena riceve una richiesta, analizza se corrisponde a lui la gestione, o altrimenti, inoltrarla al seguente oggetto dentro la catena. In questo modo, gli oggetti che iniziano la richiesta devono solamente interfacciarsi con l'oggetto più basso della catena di responsabilità.

## Partecipanti
* __Handler__: classe _CreditRequestHandler_
  - Specifica una interfaccia per la gestione delle richieste
  - In modo opzionale, implementa un riferimento a un oggetto successore
* __ConcreteHandler__: classe _Vendor_, _SalesManager_ e _ClientAccountManager_
  - Gestiscono le richieste che corrispondono alla propria responsabilità
  - Accedono ad un successore (se è possibile), nel caso in cui la richiesta non corrisponda alla propria gestione
* __Client__: classe _Costumer_
  - Inoltra una richiesta a un _ConcreteHandler_ della catena
