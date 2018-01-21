# Command
#### (GoF pag. 233)

## Descrizione
Incapsula una richiesta all'interno di un oggetto, consentendo la parametrizzazione dei clienti con diverse tipologie di richieste, accodare o rintracciare le richieste, oppure supportare operazioni di _undo_.

## Esempio
Un telecomando universale consente di gestire diversi tipi di elettrodomestici (TV di diversi modelli e marche, Hi-Fi, ecc.). Durante la fase di progettazione del telecomando si riesce a definire il numero di tasti e l'etichetta di ogni singolo tasto, ma non le operazioni concrete da eseguire (vale dire, il segnale particolare da spedire all'elettrodomenstico). Si spera che queste operazioni vengono aggiunte, ulteriormente, al momento di configurare il telecomando (ad esempio, l'utente potrebbe scaricare da internet le classi che li servono per o propri elettrodomestici).

Il problema consiste nella progettazione di una classe (telecomando), in grado di inoltrare richieste verso oggetti che saranno noti solo in fasi successivi di sviluppo.

Il pattern "_Command_" combia le richieste di operazioni su oggetti non specificati, trasformando le richieste stesse in oggetti. La vase di questo pattern è la classe astratta Command che specifica l'interfaccia per l'esecuzione delle operazioni, contenente un metodo astratto "execute". Gli specifici comandi che verranno eseguiti estendono questa classe e specificano la coppia destinatario/azione, immagazzinando il destinatario come variabile di istanza e implementando il metodo "execute" per invocare la richiesta.

## Partecioanti
* __Command__: classe _Command_
  - Dichiara una interfaccia per l'esecuzione di una operazione.
* __ConcreteCommand__: classi _TVPowerCommand_, _TVVolumeUpCommand_, _TVVolumeDownCommand_, _TVSetChannelCommand_
  - Ognuno definisce una associazione tra un __Receiver__ e una azione
  - Implementa l'operazione Execute, invocando la corrispondente operazione del __Receiver__
* __Invoker__: classe _UniversalRemoteControl_
  - Richiede tramite il __Command__ l'esecuzione di una operazione
* __Receiver__: classe _TV_
  - Porta avanti le operazioni richieste. Qualunque classe può essere __Receiver__
