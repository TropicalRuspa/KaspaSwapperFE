# Introduzione

Prima di commentare lo User Journey dell’applicazione, definiamo alcune informazioni generali rilevanti:

- L’applicazione (d’ora in poi, chiamata PWA) inizialmente lavorerà in browser ma, successivamente, vorremmo aggiungere un “guscio” per semplificarne il l'esecuzione (ad esempio Electron);
- La PWA rappresenta il l'interfaccia utente per permettere l’interazione con le operazioni di swap da parte dell’utente;
- La PWA comunica con un backend attraverso chiamate REST API, per inviare e ricevere informazioni.
 
## Prima pagina 
Quando l’utente apre la PWA, visualizza la prima pagina.
Nella prima pagina, l’utente sceglie in quale modalità utilizzare l’applicazione:
- Nel primo caso (Swap!), l’utente sceglie di iniziare le attività di scambio, dando per scontato che il backend e tutti gli strumenti utilizzati per lo scambio siano attivi e correttamente funzionanti;
- Nel secondo caso (Check system diagnostics), l’utente sceglie aprire la finestra di diagnostica per verificare che tutti gli strumenti utilizzati per lo scambio siano attivi e correttamente funzionanti.
 
![Image_1](https://github.com/TropicalRuspa/KaspaSwapperFE/blob/master/KaspaSwapper/tech_specs/images/01.png)

In entrambi i casi, quando l’utente sceglie uno o l’altro percorso, la PWA visualizza una finestra con un pannello di navigazione sulla sinistra e un pannello principala sulla destra:
- Nel caso di selezione del bottone "Swap!", la PWA seleziona automaticamente la scheda "Swap market";
- Nel caso di selezione del bottone "Check system diagnostics", la PWA seleziona automaticamente la scheda "System diagnostics"

La composizione e le informazioni da visualizzare nella scheda "System diagnostics" saranno analizzate successivamente; per ora, ci concentriamo nelle operazioni di Swap.
Quando l'architettura sarà stabile a sufficienza, potremmo decidere di togliere questa prima schermata ed avviare la PWA direttamente nella visualizzazione con pannello di navigazione a sinistra e area dettagli a destra.

## SWAP MARKET
La PWA seleziona automaticamente la scheda "Swap market" e visualizza la lista degli swap provider disponibili all'interno di una tabella che riporta le seguenti informazioni pricipali:
- Swap provider ID (si tratta di un codice alfa numerico composto da 2 parti: nella prima parte ci sono i primi 5 caratteri dell'indirizzo onion, seguito da un separatore, ed infine dagli ultimi 5 caratteri dell'inirizzo onion)
- Prezzo di 1 KAS (in satoshi)
- Prezzo di 1 BTC (in KAS)
- Volume minimo di scambio per singolo swap
- Indirizzo onion completo dello Swap provider

![Image_2](https://github.com/TropicalRuspa/KaspaSwapperFE/blob/master/KaspaSwapper/tech_specs/images/02.png)

La PWA aggiorna la lista ogni 5 secondi; se alcune informazioni vengono aggiornate, la PWA modifica solo quelle informazioni (per adattarsi ai tempi di refresh del backend).
Nel caso in cui l'utente voglia forzare un refresh dei dati nella scheda, dovrà cliccare il tasto di ricarica in alto a destra.
La PWA permette all'utente di ordinare le colonne cliccando il titolo della colonna per ordine crescente, cliccando nuovamente per ordine decrescente.

La lista degli Swap provider è una lista interattiva, infatti quando l'utente clicca su una riga, la PWA seleziona lo swap provider di quella riga ed entra automaticamente nella sezione "New Swap" aggiornandone i dettagli.

## NEW SWAP

L'utente può cambiare il verso della transazione cliccando la freccia tra i due primi campi (in stile Uniswap); il default prevede che lo scambio sia da BTC (sopra) a KAS (sotto); se l'utente preme la freccia, i due campi si scambiano, BTC scende sotto e KAS sale sopra.
Per semplicità si usa il punto come separatore delle migliaia e la virgola come separatore delle subunità (decimi, centesimi, millesimi)

![Image_3](https://github.com/TropicalRuspa/KaspaSwapperFE/blob/master/KaspaSwapper/tech_specs/images/03.png)

L'utente inserisce la quantità di satoshi da scambiare in KAS e la PWA, dialogando in real time con il backend, fornisce:
- La quantità di KAS che lo Swap provider selezionato invierà, a seconda della quantità di satoshi selezionati.
- La stima in controvalore USD per ciascun lato dello scambio;
- I dettagli del provider scelto (ID ed indirizzo onion).

Se l'utente vuole cambiare provider, deve cliccare manualmente la scheda "Swap market" e seleziona un altro provider. I precedenti dati della scheda New swap saranno così sovrascritti dai dati del nuovo provider scelto.

Se è tutto ok, l'utente clicca il bottone "Swap".

La PWA genera unq richiesta di conferma, che ha un ulteriore funzione di controllo. Se l'utente conferma, la PWA comunica l'ordine al backend e viene attivata la creazione dello swap.

![Image_4](https://github.com/TropicalRuspa/KaspaSwapperFE/blob/master/KaspaSwapper/tech_specs/images/04.png)

Una barra di caricamento appare sotto al bottone "Swap" durante la creazione della TX; non appena la TX viene inviata con successo (non ancora inclusa in un blocco), il backend lo comunica alla PWA, la quale sostituisce la barra di caricamento con un messaggio "Transazione inviata correttamente!".

Qui ci sono un paio di esempi di come sono impostati gli elementi grafici della finestra di swap (Unstoppable Swaps e Uniswap):

![Image_5](https://github.com/TropicalRuspa/KaspaSwapperFE/blob/master/KaspaSwapper/tech_specs/images/05.png)

## OPEN SWAPS
L'utente può attivare in questo modo più swap, con swap provider diversi, a seconda della ncessità, delle condizioni di mercato e della disponibilità dei vari swap providers.

A questo punto, l'utente deve monitorare lo stato dei swap dato che, quando il Swap provider avrà terminato le sue attività, sarà l'utente a dover triggerare manualmente la transazione di Redeem, in modo da concludere lo scambio.

L'utente clicca quindi sulla tab "Open swaps" e accede alla finestra di controllo di tutti gli swap attivi.

![Image_6](https://github.com/TropicalRuspa/KaspaSwapperFE/blob/master/KaspaSwapper/tech_specs/images/06.png)

La lista visualizza le macro informazioni di ciascun swap attualmente aperto:
- Timestamp della transazione di apertura del swap
- ID del swap (fornito dal swap provider)
- Amount di BTC inviati
- Amount di KAS da ricevere
- Stato dello swap 
- Data di refund (data in cui viene attivata la possibilità di procedere con il refund, nel caso in cui il swap provider non abbia completato lo swap correttamente)

La lista è aggiornata manualmente dall'utente, che preme il bottone in alto a destra per triggerare l'aggiornamento della lista e lo stato di tutti gli swap aperti.

Lo stato di ciascun Swap evolve da:
- Pending (transazione di attivazione dello Swap non completata) - L'utente può solo aspettare
- Initialized (transazione di apertura dello Swap completata e in fase di conferma) - L'utente può solo aspettare
- Waiting for confirmations (quando la transazione di participate è stata inviata e confermata dal swap provider e il backend è in attesa del numero minimo di conferme) - L'utente può solo aspettare
- Waiting for redeem (La transazione di participate è stata inviata da swap provider e la soglia minima di conferme è stata superata) - L'utente deve confermare il redeem manualmente
- Redeem in progess (la transazione di redeem è stata pubblicata ma il sistema è in attesa del numero minimo di conferme) - L'utente può solo aspettare
- Swap completed (il numero di conferme è stato superato e il swap è completo)
- Refund in progress (nel caso in cui il swap provider non abbia fatto il suop dovere, il backed fa scattare automaticamente il refund; lo stato refund in progress viene visualizzato quando la transazione di refund è stata inviata ma il sistema è in attesa della soglia minima di conferme) - L'utente può solo aspettare
- Swap deleted (la transazione di refund è stata confermata)

La lista dei swap aperti è selezionabile e, quando l'utente seleziona uno swap, la sezione con i dettagli dello swap viene popolata.

- Quando il singolo swap è in stato di "Swap completed" o "Swap deleted", la PWA visualizza il bottone "Clean swap"; quando l'utente clicca il bottone, la PWA genera un messaggio di conferma; alla conferma da parte dell'utente, la PWA chiama il backed, chiedendo di cancellare il swap selezionato dalla lista dei swap aperti.

![Image_8](https://github.com/TropicalRuspa/KaspaSwapperFE/blob/master/KaspaSwapper/tech_specs/images/08.png)












