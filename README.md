# Il mio percorso — Lettura, Giapponese & Carriera

App pubblicata online, pensata per essere usata soprattutto dal telefono:

**https://wfloreslazo1-blip.github.io/investitore-giapponese-app/**

## Installarla come un'app sul telefono

- **iPhone (Safari):** apri il link sopra → tocca l'icona di condivisione (il quadrato con la freccia) → "Aggiungi a Home".
- **Android (Chrome):** apri il link → menu (tre puntini) → "Installa app" o "Aggiungi a schermata Home".

Dopo l'installazione avrai un'icona vera e propria, e l'app funziona anche offline (i file vengono salvati sul telefono la prima volta che la apri).

## Sezioni

- **Lettura** — quiz interattivo con **80 domande reali** estratte dai 32 capitoli de "L'Investitore Autonomo". Imposti a che capitolo sei arrivato (in cima alla sezione) e il quiz ti interroga solo sui capitoli già letti, per non fare spoiler. Tre modalità: Flashcard, Quiz a scelta multipla, Statistiche. Le domande sbagliate ricompaiono con più frequenza. In fondo trovi anche il programma delle 12 settimane come riferimento.
- **Giapponese** — flashcard, quiz a scelta multipla e quiz a digitazione su hiragana e sulla wiki di vocaboli/grammatica. Stessa logica: le domande sbagliate ricompaiono più spesso.
- **Carriera** — preparazione alla certificazione **Salesforce Certified Associate**, basata sul trailmix [Prepare for your Salesforce Certified Associate Credential](https://trailhead.salesforce.com/it/users/strailhead/trailmixes/prepare-for-your-salesforce-certified-associate-credential). L'intera sezione Carriera (etichette, domande, glossario) è in **inglese**, per restare fedele alla lingua del materiale Trailhead originale — a differenza di Lettura, Giapponese e Fiscalità, che restano in italiano. Domande scritte sulle 4 sezioni ufficiali dell'esame (Salesforce Ecosystem, Navigation, Data Model, Reports & Dashboards), pesate secondo la percentuale reale di ciascuna sezione, più domande aggiuntive tratte dai moduli reali via via completati (es. Agentforce 360, Nonprofit Basics, Trailblazer Community Groups, Experience Cloud, Agentforce Service/Sales — 11 moduli in tutto, 162 domande). La card **"Trailhead Modules"** ti permette di allenarti su un solo modulo/badge alla volta, senza mischiarlo con altri temi — Flashcard, Quiz e Statistiche si filtrano di conseguenza. Una checklist ti permette anche di segnare le 4 sezioni ufficiali già studiate sul trailmix; il **Glossary** (ricerca libera dei termini incontrati, es. CRM, RAG, Data 360, Account...) resta invece sempre completo, indipendentemente dal modulo selezionato.
- **Fiscalità** — ripasso del corso interno EY GCR (Global Compliance and Reporting) sul TUIR: 312 domande su 26 lezioni (articoli TUIR + 2 direttive UE + convenzioni OCSE), 12 per lezione, organizzate in 5 macro-aree, grounded nel materiale delle lezioni e nei manuali di riferimento Ceppellini e Andreani-Dodero-Ferranti. Ampliato il 2026-08-13 da 10 a 12 domande per lezione (+52 nuove, sempre bilanciate A/B/C/D), su richiesta esplicita dell'utente che notava poche domande quando si allenava su un singolo argomento. Stesso contenuto (per le prime 260) della sezione Fiscalità nella wiki Obsidian "Wiki Trial" (`wiki/summaries/fiscalita/quiz-fiscalita-indice.md`) — portato qui il 2026-08-06 per poterci fare pratica anche dal telefono, con lo stesso meccanismo di ripetizione dilazionata delle altre sezioni. La card **"Lezioni"** permette di allenarsi su una singola lezione alla volta; una checklist permette di segnare le macro-aree già ripassate. **Non è il quiz ufficiale EY** né sostituisce la normativa o i manuali per un caso reale con un cliente.
- **Precisione** — percorso a parte, scollegato dagli argomenti di studio: non riusa le domande delle altre sezioni, ma propone esercizi pensati apposta per l'attenzione al dettaglio, utili per il lavoro d'ufficio/consulenza tanto quanto per lo studio. Tre tipi, selezionabili singolarmente: **Confronto dati** (due blocchi di dati quasi identici, trova la riga diversa o riconosci che sono uguali), **Trascrizione esatta** (ricopia un codice carattere per carattere, con confronto evidenziato in caso di errore) e **Correggi l'errore** (individua la parola o il numero sbagliato in una frase, se c'è). Tiene traccia di una "serie" di risposte giuste consecutive (attuale e record) per tipo di esercizio, proprio per premiare l'azzeccarla la prima volta invece della velocità.

## Dati

Tutto è salvato nel `localStorage` del browser che usi — se installi l'app come icona sul telefono, i progressi restano legati a quella (stesso motore del browser). Non c'è sincronizzazione tra dispositivi diversi: usa sempre lo stesso telefono/browser per non perdere i progressi.

## Aggiornare la wiki di giapponese

Due modi:
1. Dal form "Aggiungi una voce alla wiki" nell'app (salvato in localStorage, solo sul tuo dispositivo).
2. Condividendo materiale in una conversazione con Claude Code in questa cartella: verrà aggiunto direttamente in `data.js`, nell'array `WIKI`, e poi pubblicato di nuovo online con `git push` — così è disponibile su ogni dispositivo che apre il link.

## Aggiornare l'app online dopo una modifica

Dentro questa cartella:
```
git add -A
git commit -m "descrizione della modifica"
git push
```
GitHub Pages ripubblica automaticamente in 1-2 minuti.

## Nota sulla privacy

Alcune domande del quiz di lettura (capitoli 6-9) citano dati finanziari reali (importi, TAEG, fascia di reddito) tratti dal libro. Il repository è pubblico su GitHub per poter usare GitHub Pages gratuitamente: chiunque conosca il link può vedere il codice sorgente, incluse quelle domande.

## Configurazione

`.claude/settings.json` imposta il modello Sonnet come default per le sessioni Claude Code in questo progetto.
