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
- **Carriera** — preparazione alla certificazione **Salesforce Certified Associate**, basata sul trailmix [Prepare for your Salesforce Certified Associate Credential](https://trailhead.salesforce.com/it/users/strailhead/trailmixes/prepare-for-your-salesforce-certified-associate-credential). L'intera sezione Carriera (etichette, domande, glossario) è in **inglese**, per restare fedele alla lingua del materiale Trailhead originale — a differenza di Lettura e Giapponese, che restano in italiano. Domande scritte sulle 4 sezioni ufficiali dell'esame (Salesforce Ecosystem, Navigation, Data Model, Reports & Dashboards), pesate secondo la percentuale reale di ciascuna sezione, più domande aggiuntive tratte dai moduli reali via via completati (es. Agentforce 360, Data 360). La card **"Trailhead Modules"** ti permette di allenarti su un solo modulo/badge alla volta (es. solo "Agentforce 360 Basics"), senza mischiarlo con altri temi — Flashcard, Quiz e Statistiche si filtrano di conseguenza. Una checklist ti permette anche di segnare le 4 sezioni ufficiali già studiate sul trailmix; il **Glossary** (ricerca libera dei termini incontrati, es. CRM, RAG, Data 360, Account...) resta invece sempre completo, indipendentemente dal modulo selezionato.

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
