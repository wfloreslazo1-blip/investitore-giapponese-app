# Il mio percorso — Lettura & Giapponese

App locale, senza dipendenze, senza server: apri `index.html` con doppio click (o trascinalo nel browser).

## Sezioni

- **Lettura** — traccia le 12 settimane del programma di studio de "L'Investitore Autonomo" (Capitolo 27), con checkbox e note per settimana.
- **Giapponese** — flashcard, quiz a scelta multipla e quiz a digitazione su hiragana e sulla wiki di vocaboli/grammatica. Le domande sbagliate ricompaiono con più frequenza.

## Dati

Tutto è salvato nel `localStorage` del browser che usi per aprire la pagina — usa sempre lo stesso browser per non perdere i progressi. Non c'è alcuna sincronizzazione online.

## Aggiornare la wiki di giapponese

Due modi:
1. Dal form "Aggiungi una voce alla wiki" nell'app (salvato in localStorage).
2. Condividendo materiale in una conversazione con Claude Code in questa cartella: verrà aggiunto direttamente in `data.js`, nell'array `WIKI`, così è disponibile su ogni browser/dispositivo che apre questa cartella.

## Configurazione

`.claude/settings.json` imposta il modello Sonnet come default per le sessioni Claude Code in questo progetto.
