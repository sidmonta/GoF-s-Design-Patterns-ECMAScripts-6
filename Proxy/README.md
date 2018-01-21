# Proxy
#### (GoF pag. 207)

## Descrizione
Fornisce una rappresentazione di un oggetto di accesso difficile o che richiede un tempo importante per l'accesso o creazione. Il _Proxy_ consente di posticipare l'accesso o creazione al momento in cui sia davvero richiesto.

## Esempio
Un programma di visualizzazione di testi deve gestire informazioni riguardanti file dove i testi vengono archiviati, come il contenuto stesso dei file. Il programma potrebbe essere in grado di visualizzare il nome di un file, il testo completo, o trovare e visualizzare una sola riga.

Si pensi che per l'implementazione si ha progettato un oggetto che al momento della sua istanziazione fa il caricamento del file, e che svolge le operazioni descritte nel seguente modo:
 - Restituisce nome del file: restituisce una stringa contenente il nome del file dentro il file system;
 - Restituisce il testo completo: restituisce una stringa contenente il testo;
 - Restituisce una singola riga di testo: riceve come parametro un numero valido di riga e tramite un algoritmo di ricerca, restituisce una stringa contenente il testo corrispondente.

 Questa classe diventa utile dato che fornisce tutte le funzionalità richieste dall'applicativo. Nonostante ciò, il suo è inefficiente perché se solo si vuole accedere al nome del file non è necessario aver caricato tutto il contenuto in memoria. Un altro caso di inefficienza si presenta nel caso in cui si fanno due richieste successive dello stesso numero di riga, che determinano la ripetizione della ricerca appena effettuata.
 È di interesse poter gestire più efficientemente questa classe, senza modificare la sua implementazione.

 Il "Proxi" pattern suggerisce l'implementazione di una classe (ProxiFileHandler) che offra la stessa interfaccia della classe originale (FileHandler), e che sia in grado di risolvere
le richieste più "semplici" pervenute dall'applicativo, senza dover utilizzare inutilmente le risorse. Solo al momento di ricevere una richiesta più "complessa", il proxy andrebbe a creare il vero FileHandler per inoltrare a esso le richieste. In questo modo gli oggetti più pesanti sono creati solo al momento di essere necessari. Il proxy che serve a questa finalità spesso viene chiamato "virtual proxy".
Come un'altra funzionalità a questo proxy potrebbe essere aggiunta la possibilità di imagazinare temporaneamente l'ultima riga restituita dal metodo "_getLine_", in modo che due richieste successive della stessa linea comportino solo una ricerca, riducendo lo spreco di tempo di elaborazione. Il proxy che offre questa funzionalità viene chiamato "caché proxy".

## Partecipanti
* __Proxy__: classe _ProxyFileHandler_
  - Mantiene un riferimento per accedere al __RealSubject__
  - Implementa una interfaccia identica a quella del __RealSubject__, in modo che può sostituire a esso
  - Controlla l'accesso al RealSubject, essendo responsabile della sua istanziazione e gestione di riferimenti.
  - Come _virtual proxy_ pospone la istanziazione del __RealSubject__, tramite la gestione di alcune informazioni di questo.
  - Come _caché proxy_ immagazzina temporaneamente il risultato di alcune elaborazioni del __RealSubject__, in modo di avere delle risposte pronte per i clienti
* __Subject__: classe _FileHandler_
  - Fornisce l'interfaccia comune per il __RealSubject__ e il __Proxy__, in modo che questo ultimo possa essere utilizzato in ogni luogo dove si aspetta un __RealSubject__
* __RealSubject__: classe _RealFileHandler_
  - Implementa l'oggetto vero e proprio che il __RealSubject__ rappresenta
