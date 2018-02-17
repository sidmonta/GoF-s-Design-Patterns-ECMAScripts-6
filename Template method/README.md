# Template method
#### (GoF pag. 325)

## Descrizione
Spefica la struttura algoritmica di una operazione, differendo l'implementazione di alcuni passi alle sottoclassi. Il Template Method consente di ridefinire certi passi di u algoritmo senza cambiare la struttura di esso

## Esempio
Un sistema di controllo di un particolare magazzino gestisce due tipologie di articoli:
  - Articoli generali: per ogni articolo si ha conoscenza dello stock fisico (on-hand), lo stock in transito (in-transit) e gli ordini in attesa di arrivo dell'articolo (backorder). Ogni volta che si richiede un articolo di questo tipo, la quantità richiesta è diminuita dallo stock fisico. Nel caso in cui lo stock fisico non è sufficiente per soddisfare la richiesta, la differenza non coperta viene sommata ai backorder, ma soltanto se questa può essere soddisfatta dal stock in transito, non riservato da altre backorders.
  - Articoli ristretti: sono articoli che si consegnano soltanto se lo stock fisico è sufficiente, e non si mantiene traccia né degli articoli in arrivo, né dei backorders. Oltre a questo, il sistema gestisce delle quote che limitano il lotto da richiedere ogni volta.

Si noti che, astraendo adeguatamente un modello operativo, si riesce a stabilire un meccanismo comune per la gestione di entrambe le tipologie di articoli.

```
Algoritmo Ritirare_Items (quantità)
  begin
    if numero_valido(quantità)
      if può_essere_soddisfatta(quantità)
        ritirare(quantità)
      else
        write('Stock insufficiente')
      endif
    else
      write('Quantità richiesta non valida')
    endif
  end
```

In questo modello, però, le istruzioni "numero_valido", "può_essere_soddisfatta" e "ritirare" hanno un'interpretazione particolare per ogni tipologia di articolo:

  - *numero_valido(quantità)*: determina se la quantità richiesta dell'articolo è un numero valido dentro i _range_ prestabiliti

    | Articoli generali | Articoli ristretti |
    |:--|:--|
    | quantità > 0 | quantità >= 0 AND quantità <= max_ammesso |

  - *può_essere_soddisfatta(quantità)*: testa se la quantità richiesta può essere soddisfatta con lo stock disponibile

    | Articoli generali | Articoli ristretti |
    |:--|:--|
    | Stock_fisico + stock_in_transito - backorders >= quantità | stock_fisico >= quantità |

   - *ritirare(quantità)*: riduce lo stock disponibile e incrementa i backorders, se corrisponde

    | Articoli generali | Articoli ristretti |
    |:--|:--|
    | stock_fisico=stock_fisico-quantità; if (stock_fisico < 0) backorders = ABS(onHand); stock_fisico = 0; endif | stock_fisico = stock_fisico - quantità |

Il problema consiste nella riutilizzazione delle logica comune di un processo, nei confronti di classi diverse.

Il “Template Method” presenta una classe (AbstractClass) che implementa la logica del processo da riutilizzare, in funzione di certe operazioni (PrimitiveOperation) dichiarate in questa classe, la cui implementazione è di responsabilità delle sottoclassi (ConcreteClass).

## Partecipanti
* **AbstractClass**: classe _ItemStock_
  - Specifica le operazioni primitive astratte che le concrete sottoclassi devono definire per implementare i passi dell'algoritmo.
  - Implementa il template method creando la struttura di un algoritmo. Il template method invoca le operazioni primitive dichiarate nell'AbstractClass oppure quelle di altri oggetti.
* **ConcreteClass**: classi _GeneralItem_ e _VeryRestrictedItem_.
  - Implementano le operazioni primitive per eseguire i passi specifici dell'algoritmo.
