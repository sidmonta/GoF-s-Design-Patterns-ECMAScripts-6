# Abstract Factory
##### (GoF pag. 87)

## Descrizione
Presenta un'interfaccia per la creazione di famiglie di prodotti, in modo tale che il cliente che gli utilizza non abbia conoscienza delle loro concrete classi. Questo consente:
-	Assicurarsi che il cliente crei soltanto prodotti vincolati fra loro.
-	L'utilizzo di diverse famiglie di prodotti da parte dello stesso cliente.

## Esempio
Si pensi a un posto di vendita di sistemi Hi-Fi, dove si eseguono dimostrazioni dell'utilizzo di famiglie complete di prodotti. Specificamente si ipotizzi che esistono due famiglie di prodotti, basate su tecnologie diverse: una famiglia che ha come supporto il nastro (tape), e un'altra famiglia che ha come supporto il compact disc. In entrambi casi, ogni famiglia è composta dal supporto stesso (tape o cd), un masterizzatore (recorder) e un riproduttore (player).

Se si accetta il fatto che questi prodotti offrono agli utenti una stessa interfaccia (cosa non tanto distante dalla realtà), un cliente potrebbe essere un grado di eseguire lo stesso processo di prova su prodotti di entrambe famiglie di prodotti. Ad esempio, potrebbe eseguire prima una registrazione nel recorder, per poi dopo ascoltarla nel player.

Il problema consiste nella definizione di un modo di creare famiglie complete di prodotti, senza vincolare alla codifica del cliente che gli utilizza, il codice delle particolari famiglie.

## Partecipanti
* __Concrete Factory__: classi _TapeDevicesFactory_ e _CDDevicesFactory_.
	-	Implementa l’Abstract Factory, fornendo operazioni che creano e restituiscono oggetti corrispondenti a prodotti specifici (__Concrete Product__)
* __Concrete Product__: classi _Tape_, _TapeRecorder_, _TapePlayer_, _CD_, _CDRecorder_, _CDPlayer_
	-	Definiscono i prodotti creati da ogni __Concrete Factory__
* __Client__: classe _Client_.
	-	Si rivolge alla __Concrete Factory__ di una famiglia di prodotti.
	-	Utilizza i prodotti.