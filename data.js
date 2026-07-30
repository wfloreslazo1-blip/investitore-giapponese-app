// Dati dell'app — quiz sul libro, hiragana e wiki di giapponese.
// BOOK_QUIZ contiene domande reali estratte dai 32 capitoli de
// "L'Investitore Autonomo". La WIKI giapponese è pensata per crescere
// nel tempo: quando condividi nuovo materiale, questo file viene
// aggiornato con nuove voci.

const BOOK_PROGRAM = [
  { week: 1, chapters: "1-3", action: "Esercizio del Capitolo 1 sull'interesse composto" },
  { week: 2, chapters: "4-5", action: "Scrivi la tua versione del \"cerchio di competenza\": cosa capisci davvero, cosa no" },
  { week: 3, chapters: "6-7", action: "Verifica ogni voce del Capitolo 6 con l'estratto conto aggiornato" },
  { week: 4, chapters: "8-9", action: "Calcola la tua spesa mensile reale (esercizio del Capitolo 8)" },
  { week: 5, chapters: "10-11", action: "Solo lettura e riflessione" },
  { week: 6, chapters: "12-13", action: "Scarica e leggi un primo KID reale" },
  { week: 7, chapters: "14-15", action: "Rispondi alla domanda di riflessione del Capitolo 15" },
  { week: 8, chapters: "16", action: "Riassumi un caso storico a voce alta, come se lo spiegassi a un amico" },
  { week: 9, chapters: "17-19", action: "Rileggi con attenzione il caso della scommessa da un milione di dollari" },
  { week: 10, chapters: "20-21", action: "Rispondi alla domanda di riflessione sul tuo punto debole (Cap. 21)" },
  { week: 11, chapters: "22-24", action: "Confronta tre ETF con la checklist del Capitolo 23" },
  { week: 12, chapters: "25-26", action: "Scrivi il tuo piano concreto su carta, con date reali" },
];

const BOOK_QUIZ = [
  {
    "id": "r1",
    "chapter": 1,
    "chapterTitle": "Perché investire: l'ottava meraviglia del mondo",
    "question": "Investendo 200€ al mese per 30 anni a un rendimento medio del 7% annuo, il totale versato è 72.000€. A quanto si avvicina il valore finale, secondo l'esempio del capitolo?",
    "options": [
      "Circa 100.000€",
      "Circa 150.000€",
      "Circa 240.000€",
      "Circa 350.000€"
    ],
    "correct": 2,
    "explanation": "Il valore finale si avvicina a 240.000€: quasi 170.000€ in più del versato, generati dall'interesse composto nel tempo."
  },
  {
    "id": "r2",
    "chapter": 1,
    "chapterTitle": "Perché investire: l'ottava meraviglia del mondo",
    "question": "Secondo il capitolo, qual è il fattore più importante nel costruire un patrimonio?",
    "options": [
      "Quanto guadagni al mese",
      "Quanto sei bravo a scegliere i titoli giusti",
      "Per quanti anni resti investito senza interrompere il processo",
      "Il momento esatto in cui entri nel mercato"
    ],
    "correct": 2,
    "explanation": "Ogni anno che aspetti a cominciare è un anno di interesse composto che non recupererai mai più."
  },
  {
    "id": "r3",
    "chapter": 2,
    "chapterTitle": "Chi è Warren Buffett e perché vale la pena ascoltarlo",
    "question": "A che età Warren Buffett comprò la sua prima azione?",
    "options": [
      "8 anni",
      "11 anni",
      "16 anni",
      "20 anni"
    ],
    "correct": 1,
    "explanation": "Buffett comprò la sua prima azione a undici anni."
  },
  {
    "id": "r4",
    "chapter": 2,
    "chapterTitle": "Chi è Warren Buffett e perché vale la pena ascoltarlo",
    "question": "In che anno Buffett prese il controllo di Berkshire Hathaway, allora una modesta azienda tessile?",
    "options": [
      "1955",
      "1965",
      "1975",
      "1985"
    ],
    "correct": 1,
    "explanation": "Nel 1965 Buffett prese il controllo di Berkshire Hathaway."
  },
  {
    "id": "r5",
    "chapter": 2,
    "chapterTitle": "Chi è Warren Buffett e perché vale la pena ascoltarlo",
    "question": "Chi convinse Buffett a preferire 'un'azienda meravigliosa a un prezzo equo' invece di 'un'azienda mediocre a un prezzo stracciato'?",
    "options": [
      "Benjamin Graham",
      "Charlie Munger",
      "John Bogle",
      "Philip Fisher"
    ],
    "correct": 1,
    "explanation": "Fu Charlie Munger a spingere Buffett verso questo principio."
  },
  {
    "id": "r6",
    "chapter": 3,
    "chapterTitle": "Le due regole di Buffett",
    "question": "Qual è la Regola numero 2 di Buffett?",
    "options": [
      "Diversifica sempre",
      "Non dimenticare mai la regola numero 1",
      "Compra basso, vendi alto",
      "Non investire mai a debito"
    ],
    "correct": 1,
    "explanation": "'Non perdere mai denaro. Non dimenticare mai la regola numero 1.'"
  },
  {
    "id": "r7",
    "chapter": 3,
    "chapterTitle": "Le due regole di Buffett",
    "question": "Cosa intende davvero Buffett quando dice 'non perdere mai denaro'?",
    "options": [
      "Non vedere mai scendere il valore del portafoglio",
      "Non trasformare un calo temporaneo in una perdita permanente vendendo nel panico",
      "Non investire mai in azioni singole",
      "Vendere sempre prima di un crollo"
    ],
    "correct": 1,
    "explanation": "Una discesa temporanea non è una perdita finché non vendi nel momento peggiore."
  },
  {
    "id": "r8",
    "chapter": 3,
    "chapterTitle": "Le due regole di Buffett",
    "question": "Durante la crisi del 2008-2009, di quanto scese il valore di mercato di Berkshire Hathaway, e cosa fece Buffett?",
    "options": [
      "Scese del 10%, e Buffett vendette parte del portafoglio",
      "Scese di oltre il 40%, e Buffett non vendette nulla, anzi comprò",
      "Scese del 20%, e Buffett si ritirò per un anno",
      "Non scese, Berkshire fu immune alla crisi"
    ],
    "correct": 1,
    "explanation": "Buffett scrisse anche l'editoriale 'Buy American. I am.' sul NYT nell'ottobre 2008."
  },
  {
    "id": "r9",
    "chapter": 4,
    "chapterTitle": "Il temperamento conta più del quoziente intellettivo",
    "question": "Chi ha inventato l'allegoria di 'Mr. Market'?",
    "options": [
      "Warren Buffett",
      "Benjamin Graham",
      "Charlie Munger",
      "John Bogle"
    ],
    "correct": 1,
    "explanation": "L'allegoria appartiene a Benjamin Graham, nel capitolo 8 de 'L'Investitore Intelligente'."
  },
  {
    "id": "r10",
    "chapter": 4,
    "chapterTitle": "Il temperamento conta più del quoziente intellettivo",
    "question": "Nell'allegoria di Mr. Market, qual è l'unico modo in cui può davvero danneggiarti?",
    "options": [
      "Se ti offre un prezzo troppo basso",
      "Se smette di presentarsi alla tua porta",
      "Se lasci che il suo umore instabile diventi il tuo",
      "Se compra la tua azienda"
    ],
    "correct": 2,
    "explanation": "Non sei obbligato ad ascoltarlo: puoi ignorarlo per settimane."
  },
  {
    "id": "r11",
    "chapter": 4,
    "chapterTitle": "Il temperamento conta più del quoziente intellettivo",
    "question": "Secondo il capitolo, quale calo del portafoglio prima o poi, statisticamente, accadrà?",
    "options": [
      "5-10%",
      "20-30%",
      "50-60%",
      "70-80%"
    ],
    "correct": 1,
    "explanation": "Il fattore decisivo è restare calmi quando (non se) il portafoglio scenderà del 20-30%."
  },
  {
    "id": "r12",
    "chapter": 5,
    "chapterTitle": "Il cerchio di competenza",
    "question": "Per molti anni Buffett ha evitato di investire in quale tipo di aziende, inclusa a lungo la stessa Apple?",
    "options": [
      "Aziende alimentari",
      "Aziende tecnologiche",
      "Compagnie assicurative",
      "Aziende energetiche"
    ],
    "correct": 1,
    "explanation": "Non perché le giudicasse cattive, ma perché non si sentiva in grado di valutarle con sicurezza."
  },
  {
    "id": "r13",
    "chapter": 5,
    "chapterTitle": "Il cerchio di competenza",
    "question": "Secondo Buffett, cosa conta davvero riguardo al proprio 'cerchio di competenza'?",
    "options": [
      "Che sia il più grande possibile",
      "Conoscerne esattamente i confini",
      "Che includa il maggior numero di settori",
      "Espanderlo ogni anno"
    ],
    "correct": 1,
    "explanation": "'Non è importante quanto sia grande il cerchio. È importante conoscerne esattamente i confini.'"
  },
  {
    "id": "r14",
    "chapter": 5,
    "chapterTitle": "Il cerchio di competenza",
    "question": "Qual è la scelta pratica raccomandata a chi non ha tempo o formazione per analizzare bilanci aziendali?",
    "options": [
      "Affidarsi a un consulente a pagamento",
      "Comprare solo azioni molto pubblicizzate",
      "Comprare l'intero mercato tramite un fondo indicizzato",
      "Evitare del tutto di investire"
    ],
    "correct": 2,
    "explanation": "Restare dentro il proprio cerchio di competenza comprando l'intero mercato con un fondo indicizzato ampio."
  },
  {
    "id": "r15",
    "chapter": 6,
    "chapterTitle": "Fotografia della tua situazione finanziaria",
    "question": "Qual è l'orizzonte temporale di investimento indicato nel Capitolo 6?",
    "options": [
      "Breve termine, sotto 1 anno",
      "Medio termine, 3-10 anni",
      "Lungo termine, oltre 20 anni",
      "Non definito"
    ],
    "correct": 1,
    "explanation": "L'orizzonte indicato nella fotografia finanziaria è medio termine, 3-10 anni."
  },
  {
    "id": "r16",
    "chapter": 6,
    "chapterTitle": "Fotografia della tua situazione finanziaria",
    "question": "Cosa si è scoperto riguardo al pagamento di 39€ inizialmente inserito tra i debiti della carta?",
    "options": [
      "Era un debito dimenticato da anni",
      "Era un abbonamento della metro addebitato per coincidenza sulla stessa carta",
      "Era un errore della banca da contestare",
      "Era un rimborso già ricevuto"
    ],
    "correct": 1,
    "explanation": "Non era un vero debito da estinguere, ma un abbonamento della metro."
  },
  {
    "id": "r17",
    "chapter": 6,
    "chapterTitle": "Fotografia della tua situazione finanziaria",
    "question": "Quale principio, applicato anche da Buffett quando legge un bilancio, insegna questo episodio?",
    "options": [
      "Diversificare sempre",
      "Non fidarsi dell'etichetta, controllare la sostanza",
      "Investire solo in aziende conosciute",
      "Aspettare sempre il momento giusto"
    ],
    "correct": 1,
    "explanation": "Prima di preoccuparti per una cifra, verifica cosa rappresenta davvero."
  },
  {
    "id": "r18",
    "chapter": 7,
    "chapterTitle": "Il piano di rientro dai debiti",
    "question": "Come si chiama il metodo che consiglia di estinguere prima il debito con il TAEG più alto?",
    "options": [
      "Metodo a palla di neve (snowball)",
      "Metodo a valanga (avalanche)",
      "Metodo proporzionale",
      "Metodo a scadenza"
    ],
    "correct": 1,
    "explanation": "Il metodo 'a valanga' applica direttamente la Regola numero 1 di Buffett."
  },
  {
    "id": "r19",
    "chapter": 7,
    "chapterTitle": "Il piano di rientro dai debiti",
    "question": "Qual è il TAEG più alto tra le rate della carta di credito descritte nel Capitolo 6?",
    "options": [
      "7,83%",
      "9,52%",
      "11,37%",
      "13,20%"
    ],
    "correct": 2,
    "explanation": "La rata da 182,42€ ha un TAEG dell'11,37%."
  },
  {
    "id": "r20",
    "chapter": 7,
    "chapterTitle": "Il piano di rientro dai debiti",
    "question": "Entro quale mese i debiti a interesse dovrebbero azzerarsi, secondo il piano originale?",
    "options": [
      "Luglio 2026",
      "Settembre 2026",
      "Novembre 2026",
      "Gennaio 2027"
    ],
    "correct": 1,
    "explanation": "Secondo il piano originale, i tre importi a interesse si estinguono entro settembre 2026."
  },
  {
    "id": "r21",
    "chapter": 8,
    "chapterTitle": "Il fondo di emergenza: quanto e come costruirlo",
    "question": "Quanti mesi di spese correnti dovrebbe coprire un fondo di emergenza, come regola generale?",
    "options": [
      "1-2 mesi",
      "3-6 mesi",
      "9-12 mesi",
      "18-24 mesi"
    ],
    "correct": 1,
    "explanation": "La regola generale indica 3-6 mesi di spese correnti, liquide e disponibili."
  },
  {
    "id": "r22",
    "chapter": 8,
    "chapterTitle": "Il fondo di emergenza: quanto e come costruirlo",
    "question": "Secondo il piano, da quando ha senso iniziare a costruire il fondo di emergenza in modo sistematico?",
    "options": [
      "Da subito, luglio 2026",
      "Da settembre 2026",
      "Da gennaio 2027",
      "Da gennaio 2028"
    ],
    "correct": 2,
    "explanation": "È corretto costruirlo gradualmente da gennaio 2027, quando il quadro si sarà liberato."
  },
  {
    "id": "r23",
    "chapter": 9,
    "chapterTitle": "Il calendario di liquidità: da oggi a dicembre 2026",
    "question": "Qual è il mese di maggiore tensione finanziaria nel calendario 2026, secondo il capitolo?",
    "options": [
      "Luglio",
      "Agosto",
      "Ottobre",
      "Dicembre"
    ],
    "correct": 1,
    "explanation": "Agosto: viaggio, imposte e potenzialmente l'ultima rata della carta, tutto insieme."
  },
  {
    "id": "r24",
    "chapter": 9,
    "chapterTitle": "Il calendario di liquidità: da oggi a dicembre 2026",
    "question": "Qual è il 'momento naturale' indicato per iniziare il PAC?",
    "options": [
      "Agosto 2026",
      "Dicembre 2026",
      "Gennaio 2027",
      "Marzo 2027"
    ],
    "correct": 2,
    "explanation": "Da gennaio 2027, quando debiti, viaggio e scadenze fiscali principali saranno alle spalle."
  },
  {
    "id": "r25",
    "chapter": 10,
    "chapterTitle": "Cosa possiedi davvero quando compri un'azione",
    "question": "Secondo il capitolo, cosa rappresenta davvero un'azione?",
    "options": [
      "Un numero che oscilla su uno schermo",
      "Una quota reale di proprietà di un'azienda vera",
      "Un biglietto della lotteria",
      "Un titolo di debito verso lo stato"
    ],
    "correct": 1,
    "explanation": "Un'azione è una quota reale di proprietà di un'azienda con dipendenti, clienti, ricavi e utili."
  },
  {
    "id": "r26",
    "chapter": 10,
    "chapterTitle": "Cosa possiedi davvero quando compri un'azione",
    "question": "Cosa cambia, secondo il capitolo, se pensi a un'azione come a un pezzo di un'azienda reale invece che a un numero sullo schermo?",
    "options": [
      "Nulla, il prezzo conta comunque allo stesso modo",
      "Il crollo del prezzo non ti spaventa automaticamente, ti chiedi se l'azienda vale ancora quello che pensavi",
      "Diventi più propenso a vendere rapidamente",
      "Ti concentri solo sul grafico storico"
    ],
    "correct": 1,
    "explanation": "Chi pensa a un'azione come a un numero sullo schermo prova ansia a ogni oscillazione."
  },
  {
    "id": "r27",
    "chapter": 11,
    "chapterTitle": "Perché Buffett consiglia i fondi indicizzati a quasi tutti",
    "question": "Nella lettera agli azionisti del 2013, cosa ha indicato Buffett per il patrimonio della moglie dopo la sua morte?",
    "options": [
      "100% in azioni Berkshire Hathaway",
      "90% in un fondo indicizzato S&P 500, 10% in titoli di stato a breve termine",
      "50% azioni, 50% obbligazioni societarie",
      "Un paniere di 20 azioni scelte a mano"
    ],
    "correct": 1,
    "explanation": "Istruzioni pubblicate nella lettera 2013: 90% S&P 500 indicizzato, 10% titoli di stato brevi."
  },
  {
    "id": "r28",
    "chapter": 11,
    "chapterTitle": "Perché Buffett consiglia i fondi indicizzati a quasi tutti",
    "question": "Chi fondò Vanguard nel 1975 e lanciò il primo fondo indicizzato accessibile ai risparmiatori comuni?",
    "options": [
      "Warren Buffett",
      "Benjamin Graham",
      "John Bogle",
      "Charlie Munger"
    ],
    "correct": 2,
    "explanation": "John Bogle, elogiato pubblicamente da Buffett nella lettera agli azionisti del 2017."
  },
  {
    "id": "r29",
    "chapter": 11,
    "chapterTitle": "Perché Buffett consiglia i fondi indicizzati a quasi tutti",
    "question": "Perché, nella pratica, un fondo indicizzato batte la maggior parte dei fondi gestiti attivamente?",
    "options": [
      "Perché investe solo in poche aziende selezionate",
      "Per un motivo aritmetico: i fondi attivi hanno commissioni molto più alte da recuperare ogni anno",
      "Perché è garantito dallo stato",
      "Perché segue solo aziende tecnologiche"
    ],
    "correct": 1,
    "explanation": "I fondi attivi devono superare il mercato della loro commissione (spesso 1,5-2,5%) solo per pareggiare."
  },
  {
    "id": "r30",
    "chapter": 12,
    "chapterTitle": "Gli ETF spiegati bene",
    "question": "Cosa significa l'acronimo TER, uno dei cinque elementi che descrivono un ETF?",
    "options": [
      "Total Equity Return",
      "Total Expense Ratio",
      "Trading Exchange Rate",
      "Time Efficiency Ratio"
    ],
    "correct": 1,
    "explanation": "TER è il costo annuo, espresso in percentuale, che paghi per detenere l'ETF."
  },
  {
    "id": "r31",
    "chapter": 12,
    "chapterTitle": "Gli ETF spiegati bene",
    "question": "Cosa distingue una classe di quota 'Acc' (accumulazione) da una 'Dist' (distribuzione)?",
    "options": [
      "Acc reinveste automaticamente i dividendi, Dist li versa periodicamente",
      "Acc è più rischiosa di Dist",
      "Dist reinveste i dividendi, Acc li versa",
      "Non c'è alcuna differenza pratica"
    ],
    "correct": 0,
    "explanation": "Acc reinveste i dividendi automaticamente; Dist li versa periodicamente a te."
  },
  {
    "id": "r32",
    "chapter": 12,
    "chapterTitle": "Gli ETF spiegati bene",
    "question": "Comprando una quota di un ETF che replica l'indice MSCI World, di quante aziende diventi in pratica un piccolo proprietario?",
    "options": [
      "Circa 50",
      "Circa 500",
      "Oltre 1.400",
      "Oltre 10.000"
    ],
    "correct": 2,
    "explanation": "Oltre 1.400 aziende sparse in più di venti paesi sviluppati."
  },
  {
    "id": "r33",
    "chapter": 13,
    "chapterTitle": "Come leggere un KID da solo, in dieci minuti",
    "question": "Cosa significa l'acronimo KID?",
    "options": [
      "Key Investment Data",
      "Key Information Document",
      "Known Index Data",
      "Key Index Disclosure"
    ],
    "correct": 1,
    "explanation": "Il KID è un documento breve che ogni ETF venduto in Europa deve rendere pubblico per legge."
  },
  {
    "id": "r34",
    "chapter": 13,
    "chapterTitle": "Come leggere un KID da solo, in dieci minuti",
    "question": "Su una scala da 1 a 7 nell'indicatore di rischio del KID, dove si colloca tipicamente un ETF azionario ampio?",
    "options": [
      "Tra 1 e 2",
      "Tra 4 e 6",
      "Esattamente 7",
      "Non è indicato nel KID"
    ],
    "correct": 1,
    "explanation": "Un ETF azionario ampio si colloca tipicamente tra 4 e 6."
  },
  {
    "id": "r35",
    "chapter": 14,
    "chapterTitle": "Inflazione, rendimento reale e il valore del tempo",
    "question": "Se il portafoglio cresce del 7% in un anno con inflazione al 3%, qual è circa il rendimento reale?",
    "options": [
      "Circa il 10%",
      "Circa il 7%",
      "Circa il 4%",
      "Circa il 3%"
    ],
    "correct": 2,
    "explanation": "Il potere d'acquisto reale cresce solo di circa il 4%, non del 7% nominale."
  },
  {
    "id": "r36",
    "chapter": 14,
    "chapterTitle": "Inflazione, rendimento reale e il valore del tempo",
    "question": "Come ha definito Buffett l'inflazione, secondo il capitolo?",
    "options": [
      "Un'opportunità per chi ha liquidità",
      "Una 'tassa' silenziosa che colpisce chi tiene la liquidità ferma",
      "Un fenomeno che non influisce sugli investitori di lungo periodo",
      "Un rischio solo per chi vive fuori dagli Stati Uniti"
    ],
    "correct": 1,
    "explanation": "Colpisce più duramente chi tiene liquidità ferma che chi possiede aziende reali."
  },
  {
    "id": "r37",
    "chapter": 15,
    "chapterTitle": "Il margine di sicurezza",
    "question": "Da chi viene originariamente il concetto di 'margine di sicurezza' (margin of safety)?",
    "options": [
      "Warren Buffett",
      "Benjamin Graham",
      "Charlie Munger",
      "Ted Seides"
    ],
    "correct": 1,
    "explanation": "Viene direttamente da Benjamin Graham, il maestro di Buffett."
  },
  {
    "id": "r38",
    "chapter": 15,
    "chapterTitle": "Il margine di sicurezza",
    "question": "Per un investitore che segue un approccio a fondi indicizzati, in cosa si traduce concretamente il margine di sicurezza?",
    "options": [
      "Comprare solo quando il mercato sale",
      "Non investire soldi necessari a breve, non indebitarsi, distribuire nel tempo e diversificare",
      "Concentrare tutto il capitale su un solo ETF",
      "Vendere non appena il portafoglio perde valore"
    ],
    "correct": 1,
    "explanation": "Fondo di emergenza, niente debito per investire, PAC nel tempo, diversificazione ampia."
  },
  {
    "id": "r39",
    "chapter": 16,
    "chapterTitle": "Compra un'azienda, non un ticker",
    "question": "In che anno Berkshire Hathaway acquistò See's Candies, e per quanto?",
    "options": [
      "1962, circa 10 milioni di dollari",
      "1972, circa 25 milioni di dollari",
      "1982, circa 50 milioni di dollari",
      "1992, circa 100 milioni di dollari"
    ],
    "correct": 1,
    "explanation": "See's Candies fu acquistata nel 1972 per circa 25 milioni di dollari."
  },
  {
    "id": "r40",
    "chapter": 16,
    "chapterTitle": "Compra un'azienda, non un ticker",
    "question": "Cosa mise in crisi il titolo American Express nel 1963, spingendo Buffett a investire?",
    "options": [
      "Una frode legata a olio di semi (salad oil scandal)",
      "Uno scandalo fiscale",
      "Una causa antitrust",
      "Il fallimento di una banca partner"
    ],
    "correct": 0,
    "explanation": "Il 'salad oil scandal' fece crollare il titolo, ma non intaccò il vero motore di valore del marchio."
  },
  {
    "id": "r41",
    "chapter": 16,
    "chapterTitle": "Compra un'azienda, non un ticker",
    "question": "Da quale anno Buffett iniziò ad accumulare azioni Coca-Cola?",
    "options": [
      "1978, dopo una crisi valutaria",
      "1988, dopo il crollo di borsa dell'ottobre 1987",
      "1998, dopo la crisi asiatica",
      "2008, durante la crisi finanziaria"
    ],
    "correct": 1,
    "explanation": "Buffett iniziò a comprare Coca-Cola nel 1988, dopo il crollo dell'ottobre 1987."
  },
  {
    "id": "r42",
    "chapter": 16,
    "chapterTitle": "Compra un'azienda, non un ticker",
    "question": "In che anno Buffett scoprì GEICO da studente, e in che anno Berkshire ne acquisì l'intera azienda?",
    "options": [
      "1951 e 1996",
      "1961 e 1986",
      "1971 e 2001",
      "1941 e 1976"
    ],
    "correct": 0,
    "explanation": "Scoperta nel 1951 a vent'anni; acquisizione totale da parte di Berkshire nel 1996."
  },
  {
    "id": "r43",
    "chapter": 17,
    "chapterTitle": "Essere avidi quando gli altri hanno paura",
    "question": "Completa la citazione di Buffett: 'Sii timoroso quando gli altri sono avidi, e ___ quando gli altri sono ___'",
    "options": [
      "prudente / ottimisti",
      "avido / timorosi",
      "veloce / lenti",
      "cauto / avidi"
    ],
    "correct": 1,
    "explanation": "'Sii timoroso quando gli altri sono avidi, e avido quando gli altri sono timorosi.'"
  },
  {
    "id": "r44",
    "chapter": 17,
    "chapterTitle": "Essere avidi quando gli altri hanno paura",
    "question": "Nel marzo 2020, con l'inizio della pandemia, di quanto perse circa l'S&P 500 in poche settimane?",
    "options": [
      "Circa un decimo",
      "Circa un quinto",
      "Circa un terzo",
      "Circa la metà"
    ],
    "correct": 2,
    "explanation": "L'S&P 500 perse circa un terzo del suo valore in poche settimane."
  },
  {
    "id": "r45",
    "chapter": 17,
    "chapterTitle": "Essere avidi quando gli altri hanno paura",
    "question": "Cosa fa, secondo il capitolo, chi ha la disciplina di continuare a comprare regolarmente anche nei momenti di panico?",
    "options": [
      "Perde più degli altri nel lungo periodo",
      "Tende a ottenere alcuni dei rendimenti migliori del decennio successivo",
      "Non ha alcun vantaggio rispetto a chi vende",
      "Riesce sempre a individuare il punto più basso del crollo"
    ],
    "correct": 1,
    "explanation": "Non serve prevedere il fondo: basta non vendere nel panico e continuare a comprare."
  },
  {
    "id": "r46",
    "chapter": 18,
    "chapterTitle": "Il tempo è tuo amico, la fretta è tua nemica",
    "question": "Cosa scoraggia con forza Buffett, secondo questo capitolo?",
    "options": [
      "Il fondo di emergenza",
      "Il market timing, cercare di indovinare il momento perfetto per entrare o uscire",
      "Gli ETF a basso costo",
      "Il PAC"
    ],
    "correct": 1,
    "explanation": "Buffett scoraggia con forza il tentativo di indovinare il momento perfetto."
  },
  {
    "id": "r47",
    "chapter": 18,
    "chapterTitle": "Il tempo è tuo amico, la fretta è tua nemica",
    "question": "Cosa può succedere al rendimento di un portafoglio se si perdono anche solo i migliori dieci giorni di borsa in un decennio?",
    "options": [
      "Non cambia quasi nulla",
      "Migliora, perché si evita il rischio",
      "Si riduce drasticamente",
      "Raddoppia"
    ],
    "correct": 2,
    "explanation": "Perdere i migliori dieci giorni riduce drasticamente il rendimento complessivo."
  },
  {
    "id": "r48",
    "chapter": 19,
    "chapterTitle": "La scommessa da un milione di dollari",
    "question": "In che anno Buffett lanciò la scommessa pubblica, e su quale piattaforma?",
    "options": [
      "2005, su una piattaforma privata",
      "2007, su Long Bets",
      "2010, su una rivista finanziaria",
      "2001, in tribunale"
    ],
    "correct": 1,
    "explanation": "La scommessa fu formalizzata nel 2007 attraverso la piattaforma Long Bets."
  },
  {
    "id": "r49",
    "chapter": 19,
    "chapterTitle": "La scommessa da un milione di dollari",
    "question": "Chi accettò la scommessa per conto della società Protégé Partners?",
    "options": [
      "John Bogle",
      "Charlie Munger",
      "Ted Seides",
      "Alice Schroeder"
    ],
    "correct": 2,
    "explanation": "Ted Seides, gestore di Protégé Partners, selezionò cinque fondi di fondi hedge."
  },
  {
    "id": "r50",
    "chapter": 19,
    "chapterTitle": "La scommessa da un milione di dollari",
    "question": "Al termine del decennio (2008-2017), qual è stato circa il risultato: fondo indicizzato S&P 500 contro i cinque fondi hedge selezionati?",
    "options": [
      "125,8% contro circa 36%",
      "50% contro circa 45%",
      "200% contro circa 150%",
      "36% contro circa 60%"
    ],
    "correct": 0,
    "explanation": "Il fondo indicizzato rese circa il 125,8% cumulato contro una media di circa il 36% dei fondi hedge."
  },
  {
    "id": "r51",
    "chapter": 19,
    "chapterTitle": "La scommessa da un milione di dollari",
    "question": "A chi fu devoluto il milione di dollari della scommessa?",
    "options": [
      "Alla Croce Rossa Americana",
      "A Girls Inc. of Omaha",
      "Alla Columbia Business School",
      "A un fondo per borse di studio di Berkshire"
    ],
    "correct": 1,
    "explanation": "Il milione fu devoluto in beneficenza a Girls Inc. of Omaha."
  },
  {
    "id": "r52",
    "chapter": 20,
    "chapterTitle": "Diversificazione: la versione di Buffett per un piccolo investitore",
    "question": "Per chi vale, secondo il capitolo, la frase 'la diversificazione eccessiva è una protezione contro l'ignoranza'?",
    "options": [
      "Per tutti gli investitori, senza eccezioni",
      "Per investitori professionisti che conoscono a fondo poche aziende",
      "Solo per chi investe in obbligazioni",
      "Per nessuno, è un consiglio superato"
    ],
    "correct": 1,
    "explanation": "Rivolta a professionisti che potrebbero permettersi di concentrare il capitale."
  },
  {
    "id": "r53",
    "chapter": 20,
    "chapterTitle": "Diversificazione: la versione di Buffett per un piccolo investitore",
    "question": "Cosa raccomandò Buffett per sua moglie, una persona senza la sua esperienza specifica nello scegliere singole aziende?",
    "options": [
      "Un paniere concentrato di 5 azioni",
      "Un fondo indicizzato ampio, cioè la massima diversificazione pratica possibile",
      "Solo obbligazioni governative",
      "Immobili e oro"
    ],
    "correct": 1,
    "explanation": "La massima diversificazione pratica possibile, coerente col cerchio di competenza."
  },
  {
    "id": "r54",
    "chapter": 21,
    "chapterTitle": "Gli errori che Buffett non fa",
    "question": "Quale tra questi è uno dei sei errori elencati nel capitolo?",
    "options": [
      "Diversificare troppo il portafoglio",
      "Investire a debito (leva)",
      "Tenere un fondo di emergenza troppo grande",
      "Leggere troppe lettere agli azionisti"
    ],
    "correct": 1,
    "explanation": "Investire a debito amplifica sia i guadagni sia le perdite."
  },
  {
    "id": "r55",
    "chapter": 21,
    "chapterTitle": "Gli errori che Buffett non fa",
    "question": "Perché, secondo il capitolo, anche commissioni annue apparentemente piccole (1-2%) sono un errore da non ignorare?",
    "options": [
      "Perché sono sempre illegali",
      "Perché nel lungo periodo, per l'effetto dell'interesse composto, erodono una quota enorme del rendimento finale",
      "Perché aumentano automaticamente ogni anno",
      "Perché riducono la liquidità del fondo"
    ],
    "correct": 1,
    "explanation": "Le commissioni composte nel tempo erodono una quota enorme del rendimento finale."
  },
  {
    "id": "r56",
    "chapter": 22,
    "chapterTitle": "Il PAC: la disciplina come strategia",
    "question": "Cosa significa l'acronimo PAC?",
    "options": [
      "Piano di Accumulo del Capitale",
      "Piano di Assicurazione Complementare",
      "Prodotto Azionario Composto",
      "Portafoglio ad Alta Crescita"
    ],
    "correct": 0,
    "explanation": "PAC: Piano di Accumulo del Capitale."
  },
  {
    "id": "r57",
    "chapter": 22,
    "chapterTitle": "Il PAC: la disciplina come strategia",
    "question": "Come si chiama in inglese la stessa strategia descritta nel capitolo?",
    "options": [
      "Value investing",
      "Dollar-cost averaging",
      "Asset allocation",
      "Buy and hold"
    ],
    "correct": 1,
    "explanation": "In inglese si chiama dollar-cost averaging."
  },
  {
    "id": "r58",
    "chapter": 22,
    "chapterTitle": "Il PAC: la disciplina come strategia",
    "question": "Secondo il capitolo, qual è il vantaggio più importante del PAC?",
    "options": [
      "Matematico: garantisce sempre il prezzo più basso",
      "Psicologico: toglie dal tavolo la decisione emotiva mensile 'compro o non compro'",
      "Fiscale: riduce le imposte da pagare",
      "Nessuno dei precedenti"
    ],
    "correct": 1,
    "explanation": "Il PAC automatizzato ti protegge da te stesso, togliendo la decisione emotiva mensile."
  },
  {
    "id": "r59",
    "chapter": 23,
    "chapterTitle": "Come valutare un ETF da solo: la checklist in cinque punti",
    "question": "Qual è il TER idealmente raccomandato per un ETF su indice ampio?",
    "options": [
      "Sotto lo 0,25%",
      "Intorno all'1%",
      "Intorno al 2%",
      "Non ha importanza"
    ],
    "correct": 0,
    "explanation": "Idealmente sotto lo 0,25% per un ETF su indice ampio."
  },
  {
    "id": "r60",
    "chapter": 23,
    "chapterTitle": "Come valutare un ETF da solo: la checklist in cinque punti",
    "question": "Quale dimensione minima del fondo (AUM) è indicata come soglia di maggiore sicurezza e liquidità?",
    "options": [
      "Oltre 1-5 milioni di euro",
      "Oltre 100-300 milioni di euro",
      "Oltre 10 miliardi di euro",
      "Non è rilevante"
    ],
    "correct": 1,
    "explanation": "Oltre 100-300 milioni di euro, per liquidità e minor rischio di chiusura del fondo."
  },
  {
    "id": "r61",
    "chapter": 24,
    "chapterTitle": "Come scegliere un broker esecutivo, senza pagare consulenza",
    "question": "Qual è la differenza fondamentale tra un broker esecutivo e un consulente finanziario, secondo il capitolo?",
    "options": [
      "Sono esattamente la stessa cosa",
      "Il broker esegue gli ordini che decidi tu, il consulente viene pagato per dirti cosa comprare",
      "Il broker dà consigli gratuiti, il consulente no",
      "Il consulente è sempre più economico del broker"
    ],
    "correct": 1,
    "explanation": "Il broker esegue ordini; il consulente è pagato (spesso con commissioni ricorrenti) per consigliarti cosa comprare."
  },
  {
    "id": "r62",
    "chapter": 24,
    "chapterTitle": "Come scegliere un broker esecutivo, senza pagare consulenza",
    "question": "Cosa suggerisce il capitolo di fare quando qualcuno propone 'una consulenza gratuita' per scegliere i tuoi investimenti?",
    "options": [
      "Accettare sempre, è un'opportunità",
      "Diffidare: spesso la remunerazione è nascosta in commissioni di prodotto più alte",
      "Chiedere subito un contratto scritto",
      "Ignorare solo se la persona non è certificata"
    ],
    "correct": 1,
    "explanation": "Nella finanza quasi nulla è davvero gratuito: la remunerazione è spesso nascosta."
  },
  {
    "id": "r63",
    "chapter": 25,
    "chapterTitle": "La tassazione in Italia: quello che devi sapere",
    "question": "A quale aliquota sono tassate le plusvalenze da ETF armonizzati in Italia?",
    "options": [
      "12,5%",
      "20%",
      "26%",
      "33%"
    ],
    "correct": 2,
    "explanation": "Le plusvalenze da ETF armonizzati UCITS sono tassate al 26%."
  },
  {
    "id": "r64",
    "chapter": 25,
    "chapterTitle": "La tassazione in Italia: quello che devi sapere",
    "question": "Qual è il regime fiscale predefinito per la maggior parte dei conti titoli italiani retail, in cui è la banca a calcolare e versare le imposte per te?",
    "options": [
      "Regime dichiarativo",
      "Regime gestito",
      "Regime amministrato",
      "Regime forfettario"
    ],
    "correct": 2,
    "explanation": "Il regime amministrato è l'opzione predefinita per la maggior parte dei conti titoli retail italiani."
  },
  {
    "id": "r65",
    "chapter": 26,
    "chapterTitle": "Il tuo piano concreto, numeri alla mano",
    "question": "Secondo il piano concreto del Capitolo 26, quando è previsto l'avvio del fondo di emergenza?",
    "options": [
      "Luglio 2026",
      "Settembre 2026",
      "Gennaio 2027",
      "Gennaio 2028"
    ],
    "correct": 2,
    "explanation": "Gennaio 2027: quota fissa mensile del margine libero fino all'obiettivo del Capitolo 8."
  },
  {
    "id": "r66",
    "chapter": 26,
    "chapterTitle": "Il tuo piano concreto, numeri alla mano",
    "question": "Cosa avviene, secondo il piano, dopo il completamento del fondo di emergenza?",
    "options": [
      "Si estingue un nuovo debito",
      "Si avvia il PAC su uno o due ETF ampi selezionati con la checklist",
      "Si passa interamente a singole azioni",
      "Si chiude il conto titoli"
    ],
    "correct": 1,
    "explanation": "Dopo il fondo di emergenza si avvia il PAC su ETF selezionati con la checklist del Capitolo 23."
  },
  {
    "id": "r67",
    "chapter": 27,
    "chapterTitle": "Il programma delle dodici settimane",
    "question": "Cosa bisogna fare, in generale, ogni settimana secondo il programma delle dodici settimane?",
    "options": [
      "Solo leggere, senza esercizi",
      "Rileggere i capitoli indicati, fare l'esercizio pratico associato, scrivere due righe nel diario",
      "Investire una somma fissa",
      "Contattare un consulente finanziario"
    ],
    "correct": 1,
    "explanation": "Ogni settimana: rileggere i capitoli, fare l'esercizio, scrivere due righe nel diario."
  },
  {
    "id": "r68",
    "chapter": 27,
    "chapterTitle": "Il programma delle dodici settimane",
    "question": "Cosa consiglia il capitolo di fare dopo aver completato le dodici settimane?",
    "options": [
      "Considerare il percorso concluso",
      "Iniziare a leggere 'L'Investitore Intelligente' di Graham e rileggere questo libro una volta all'anno",
      "Passare subito al trading attivo",
      "Smettere di seguire le lettere di Buffett"
    ],
    "correct": 1,
    "explanation": "Si passa alla Parte VII e si rilegge il libro una volta all'anno."
  },
  {
    "id": "r69",
    "chapter": 28,
    "chapterTitle": "Il diario dell'investitore",
    "question": "Quali quattro cose suggerisce di scrivere nel diario, una volta al mese?",
    "options": [
      "Solo il saldo del conto corrente",
      "Quanto investito/risparmiato, cosa imparato, come ci si è sentiti, una decisione presa o evitata",
      "Le previsioni sul mercato del mese successivo",
      "I nomi delle azioni comprate dagli amici"
    ],
    "correct": 1,
    "explanation": "Quattro voci mensili: importo, apprendimento, emozioni, decisione presa o evitata."
  },
  {
    "id": "r70",
    "chapter": 28,
    "chapterTitle": "Il diario dell'investitore",
    "question": "Secondo il capitolo, cos'è più importante tracciare nel tempo: i numeri o le reazioni emotive?",
    "options": [
      "I numeri, sempre disponibili nell'app della banca",
      "Le reazioni emotive, per capire se si sta diventando più pazienti e razionali",
      "Nessuno dei due conta davvero",
      "Solo le previsioni fatte in anticipo"
    ],
    "correct": 1,
    "explanation": "Il valore del diario è nel tracciare le reazioni emotive nel tempo, non i numeri."
  },
  {
    "id": "r71",
    "chapter": 29,
    "chapterTitle": "Le domande da farti ogni trimestre, per sempre",
    "question": "Con quale frequenza suggerisce il capitolo di rivedere la propria strategia, imitando l'approccio di Buffett?",
    "options": [
      "Ogni giorno",
      "Ogni settimana",
      "Ogni trimestre",
      "Una sola volta, all'inizio"
    ],
    "correct": 2,
    "explanation": "Un ritmo trimestrale, non giornaliero né settimanale."
  },
  {
    "id": "r72",
    "chapter": 29,
    "chapterTitle": "Le domande da farti ogni trimestre, per sempre",
    "question": "Cosa avverte esplicitamente il capitolo riguardo al controllo quotidiano del portafoglio?",
    "options": [
      "Aiuta a reagire più in fretta alle notizie",
      "Non rende un investitore migliore, espone solo a più occasioni di farsi contagiare dall'umore di Mr. Market",
      "È obbligatorio per motivi fiscali",
      "Migliora la disciplina del PAC"
    ],
    "correct": 1,
    "explanation": "Guardarlo raramente è una competenza da allenare quanto saper leggere un KID."
  },
  {
    "id": "r73",
    "chapter": 30,
    "chapterTitle": "I libri fondamentali, e in che ordine leggerli",
    "question": "Quale libro è indicato al primo posto, definito da Buffett il migliore mai scritto sull'investire?",
    "options": [
      "\"The Snowball\" di Alice Schroeder",
      "\"L'Investitore Intelligente\" di Benjamin Graham",
      "\"Poor Charlie's Almanack\" di Charlie Munger",
      "\"Common Stocks and Uncommon Profits\" di Philip Fisher"
    ],
    "correct": 1,
    "explanation": "\"L'Investitore Intelligente\" di Graham è al primo posto della lista."
  },
  {
    "id": "r74",
    "chapter": 30,
    "chapterTitle": "I libri fondamentali, e in che ordine leggerli",
    "question": "Chi ha scritto 'The Snowball', la biografia autorizzata di Buffett?",
    "options": [
      "Alice Schroeder",
      "Peter Kaufman",
      "Benjamin Graham",
      "John Bogle"
    ],
    "correct": 0,
    "explanation": "Alice Schroeder ha scritto la biografia autorizzata di Buffett."
  },
  {
    "id": "r75",
    "chapter": 30,
    "chapterTitle": "I libri fondamentali, e in che ordine leggerli",
    "question": "'Poor Charlie's Almanack' raccoglie i discorsi e i 'mental models' di quale figura chiave, socio di Buffett?",
    "options": [
      "John Bogle",
      "Charlie Munger",
      "Philip Fisher",
      "Ted Seides"
    ],
    "correct": 1,
    "explanation": "Raccoglie i discorsi di Charlie Munger, curati da Peter Kaufman."
  },
  {
    "id": "r76",
    "chapter": 31,
    "chapterTitle": "Come leggere le lettere di Buffett agli azionisti",
    "question": "In quale periodo dell'anno Buffett pubblica tipicamente la lettera agli azionisti di Berkshire Hathaway?",
    "options": [
      "Inizio gennaio",
      "Fine febbraio",
      "Metà giugno",
      "Fine dicembre"
    ],
    "correct": 1,
    "explanation": "Tipicamente alla fine di febbraio, gratuitamente sul sito di Berkshire."
  },
  {
    "id": "r77",
    "chapter": 31,
    "chapterTitle": "Come leggere le lettere di Buffett agli azionisti",
    "question": "Su quale sito si trovano gratuitamente tutte le lettere di Buffett, incluse quelle storiche a partire dagli anni '70?",
    "options": [
      "sec.gov",
      "berkshirehathaway.com",
      "investopedia.com",
      "nyse.com"
    ],
    "correct": 1,
    "explanation": "berkshirehathaway.com, nella sezione dedicata ai report annuali."
  },
  {
    "id": "r78",
    "chapter": 32,
    "chapterTitle": "Glossario",
    "question": "Cosa significa l'acronimo TAEG?",
    "options": [
      "Tasso Annuo Effettivo Globale",
      "Totale Attivo Effettivo Garantito",
      "Tasso Agevolato per Enti Governativi",
      "Tempo Annuo di Erosione Garantita"
    ],
    "correct": 0,
    "explanation": "TAEG: Tasso Annuo Effettivo Globale, il costo reale annuo di un finanziamento o debito."
  },
  {
    "id": "r79",
    "chapter": 32,
    "chapterTitle": "Glossario",
    "question": "Cosa indica il termine 'regime amministrato' nel contesto fiscale italiano?",
    "options": [
      "Il contribuente calcola e versa da solo tutte le imposte",
      "La banca o il broker calcola e versa automaticamente le imposte sulle plusvalenze",
      "Un regime riservato solo alle società",
      "Un regime che esenta totalmente dalle tasse"
    ],
    "correct": 1,
    "explanation": "È la banca o il broker a calcolare e versare automaticamente l'imposta."
  },
  {
    "id": "r80",
    "chapter": 32,
    "chapterTitle": "Glossario",
    "question": "Cosa rappresenta il 'valore intrinseco' di un'azienda, secondo il glossario?",
    "options": [
      "Il prezzo a cui è attualmente scambiata in borsa",
      "Il valore reale stimato dell'azienda, indipendentemente dal prezzo di mercato attuale",
      "Il valore contabile riportato nell'ultimo bilancio",
      "Il valore che avrà tra un anno secondo gli analisti"
    ],
    "correct": 1,
    "explanation": "Il valore reale stimato, indipendentemente dal prezzo di mercato del momento."
  }
];

const HIRAGANA = [
  { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" }, { char: "え", romaji: "e" }, { char: "お", romaji: "o" },
  { char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" },
  { char: "さ", romaji: "sa" }, { char: "し", romaji: "shi" }, { char: "す", romaji: "su" }, { char: "せ", romaji: "se" }, { char: "そ", romaji: "so" },
  { char: "た", romaji: "ta" }, { char: "ち", romaji: "chi" }, { char: "つ", romaji: "tsu" }, { char: "て", romaji: "te" }, { char: "と", romaji: "to" },
  { char: "な", romaji: "na" }, { char: "に", romaji: "ni" }, { char: "ぬ", romaji: "nu" }, { char: "ね", romaji: "ne" }, { char: "の", romaji: "no" },
  { char: "は", romaji: "ha" }, { char: "ひ", romaji: "hi" }, { char: "ふ", romaji: "fu" }, { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" },
  { char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" }, { char: "む", romaji: "mu" }, { char: "め", romaji: "me" }, { char: "も", romaji: "mo" },
  { char: "や", romaji: "ya" }, { char: "ゆ", romaji: "yu" }, { char: "よ", romaji: "yo" },
  { char: "ら", romaji: "ra" }, { char: "り", romaji: "ri" }, { char: "る", romaji: "ru" }, { char: "れ", romaji: "re" }, { char: "ろ", romaji: "ro" },
  { char: "わ", romaji: "wa" }, { char: "を", romaji: "wo" }, { char: "ん", romaji: "n" },
  { char: "が", romaji: "ga" }, { char: "ぎ", romaji: "gi" }, { char: "ぐ", romaji: "gu" }, { char: "げ", romaji: "ge" }, { char: "ご", romaji: "go" },
  { char: "ざ", romaji: "za" }, { char: "じ", romaji: "ji" }, { char: "ず", romaji: "zu" }, { char: "ぜ", romaji: "ze" }, { char: "ぞ", romaji: "zo" },
  { char: "だ", romaji: "da" }, { char: "ぢ", romaji: "ji" }, { char: "づ", romaji: "zu" }, { char: "で", romaji: "de" }, { char: "ど", romaji: "do" },
  { char: "ば", romaji: "ba" }, { char: "び", romaji: "bi" }, { char: "ぶ", romaji: "bu" }, { char: "べ", romaji: "be" }, { char: "ぼ", romaji: "bo" },
  { char: "ぱ", romaji: "pa" }, { char: "ぴ", romaji: "pi" }, { char: "ぷ", romaji: "pu" }, { char: "ぺ", romaji: "pe" }, { char: "ぽ", romaji: "po" },
];

// Wiki di vocaboli/grammatica giapponese. Struttura pensata per essere estesa
// facilmente: ogni voce ha id univoco, categoria, termine, lettura, significato.
const WIKI = [
  { id: "w1", categoria: "saluti", termine: "こんにちは", lettura: "konnichiwa", significato: "buongiorno / buonasera (generico)" },
  { id: "w2", categoria: "saluti", termine: "ありがとう", lettura: "arigatou", significato: "grazie" },
  { id: "w3", categoria: "saluti", termine: "さようなら", lettura: "sayounara", significato: "arrivederci" },
  { id: "w4", categoria: "base", termine: "はい", lettura: "hai", significato: "sì" },
  { id: "w5", categoria: "base", termine: "いいえ", lettura: "iie", significato: "no" },
  { id: "w6", categoria: "base", termine: "すみません", lettura: "sumimasen", significato: "scusa / mi scusi" },
  { id: "w7", categoria: "base", termine: "おねがいします", lettura: "onegaishimasu", significato: "per favore" },
];

// Le 4 sezioni ufficiali dell'esame Salesforce Certified Associate
// (Platform Foundations), con il peso percentuale reale sull'esame.
const CAREER_SECTIONS = [
  { id: 1, name: "Salesforce Ecosystem", weight: 32, description: "Trailhead, Salesforce products, community, career paths" },
  { id: 2, name: "Navigation", weight: 28, description: "Getting around the org: Setup, search, list views, personal settings" },
  { id: 3, name: "Data Model", weight: 25, description: "Standard objects, relationships, data security" },
  { id: 4, name: "Reports & Dashboards", weight: 15, description: "Report types, formats, dashboard components" },
];

// Moduli/badge Trailhead completati, per tenere le domande separate per capitolo
// e non fare confusione tra temi diversi mentre si studia.
const CAREER_BADGES = [
  { "id": "generale", "name": "General Fundamentals", "meta": "Based on the official exam blueprint, not from a specific badge" },
  { "id": "agentforce-360-base", "name": "Agentforce 360 Basics", "meta": "Trailhead badge — 400 points — completed on 28 Jul 2026 (4 units: Discover Agentforce 360, Connect with Customers, Create and Manage AI Agents at Scale, Turn Disconnected Data into Trusted Context)" },
  { "id": "valori-salesforce", "name": "Salesforce Values: A Quick Look", "meta": "Trailhead unit — 100 points — completed on 16/05/2026 (the 5 core values, the 1-1-1 model)" },
  { "id": "come-muoversi-trailhead", "name": "Navigate Trailhead", "meta": "Trailhead unit — 100 points — completed on 16/05/2026 (modules, projects, trails, trailmixes, superbadges, certifications)" },
  { "id": "agentforce-360-platform-basics", "name": "Agentforce 360 Platform Basics", "meta": "Trailhead module — 900 points total (5 units) — in progress: unit 1 'Unlock Business Success with Salesforce Data Platform' completed on 30/07/2026 (+500 points challenge)" },
];

// Quiz di preparazione alla certificazione Salesforce Certified Associate,
// basato sul trailmix "Prepare for your Salesforce Certified Associate Credential".
// Domande scritte sulla base delle conoscenze generali richieste dall'esame
// (non copiate da Trailhead), organizzate per le 4 sezioni ufficiali dell'esame.
const CAREER_QUIZ = [
  { "id": "c1", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is Trailhead?", "options": ["A CRM for managing sales", "Salesforce's free online learning platform", "A code editor for developing in Apex", "Salesforce's app marketplace"], "correct": 1, "explanation": "Trailhead is Salesforce's free platform with modules, projects, trailmixes, and badges for self-paced learning." },
  { "id": "c2", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is a custom learning path called that you build yourself by combining modules, projects, and other Trailhead content?", "options": ["Trail", "Superbadge", "Trailmix", "Playground"], "correct": 2, "explanation": "A Trailmix is a collection of content that you choose and order yourself — like this very list you're following." },
  { "id": "c3", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is a Superbadge on Trailhead?", "options": ["A badge automatically awarded after completing 10 modules", "A hands-on challenge with realistic scenarios, without step-by-step instructions", "A payment receipt for the official exam", "A required group of modules for certification"], "correct": 1, "explanation": "Superbadges test your skills in real-world scenarios, without the detailed guidance typical of projects." },
  { "id": "c4", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is a Trailhead Playground for?", "options": ["It's the production org of the company you work for", "It's a free, separate Salesforce org for practicing without risk", "It's the official Trailhead mobile app", "It's the environment where you take the certification exam"], "correct": 1, "explanation": "A Playground is a free, isolated org, perfect for practicing without touching real data." },
  { "id": "c5", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What does CRM mean — the concept at the core of Salesforce?", "options": ["Customer Relationship Management: managing relationships with customers", "Central Records Manager: a company's central document archive", "Customer Reporting Module: a sales reporting tool", "Cloud Resource Manager: managing cloud resources"], "correct": 0, "explanation": "CRM is the central idea: gathering and managing all customer information and interactions in one place." },
  { "id": "c6", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is Sales Cloud mainly used for?", "options": ["Managing customer support tickets", "Managing the sales cycle: leads, opportunities, and pipeline", "Creating automated email campaigns", "Running an online store (e-commerce)"], "correct": 1, "explanation": "Sales Cloud is the Salesforce product built for sales teams, to track leads and opportunities through the pipeline." },
  { "id": "c7", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is Service Cloud mainly used for?", "options": ["Managing customer support and support cases", "Managing sales opportunities", "Creating public websites for customers", "Analyzing data with advanced dashboards"], "correct": 0, "explanation": "Service Cloud is the product built for support teams, centered around the Case object." },
  { "id": "c8", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is AppExchange?", "options": ["The official Salesforce community forum", "The online marketplace of apps and components built by Salesforce and partners", "The tool for exchanging records between two different orgs", "The page where you buy user licenses"], "correct": 1, "explanation": "AppExchange is the marketplace where you install ready-made apps, free or paid, to extend your org." },
  { "id": "c9", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What does it mean that Salesforce has a \"multi-tenant\" architecture?", "options": ["Each customer has their own dedicated physical server", "Multiple customers share the same infrastructure, with data isolated and secure from one another", "Data is duplicated across multiple data centers for safety", "Each user has their own separate version of the software"], "correct": 1, "explanation": "Multi-tenant means: infrastructure shared among all customers, but with data completely isolated for each org." },
  { "id": "c10", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What does \"Ohana\" mean in Salesforce culture?", "options": ["The name of Salesforce's proprietary programming language", "Hawaiian word for \"family\", used to describe the Salesforce community", "The acronym for the certification program", "The name of the virtual assistant built into Salesforce"], "correct": 1, "explanation": "Ohana is a Hawaiian term Salesforce uses to describe employees, customers, partners, and community as one family." },
  { "id": "c11", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "Who is called a \"Trailblazer\" in the Salesforce ecosystem?", "options": ["Only certified Apex developers", "Anyone who learns and uses Salesforce skills to grow their career", "Only Salesforce's direct employees", "Only those who have completed every available Superbadge"], "correct": 1, "explanation": "\"Trailblazer\" is the term Salesforce uses for anyone, at any level, who learns and uses its skills." },
  { "id": "c12", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is the official online community called, where Trailblazers connect, ask questions, and share knowledge?", "options": ["AppExchange", "Trailblazer Community", "Salesforce Ben", "Ohana Forum"], "correct": 1, "explanation": "The Trailblazer Community is Salesforce's official space for networking and peer support." },
  { "id": "c13", "badge": "generale", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "How many questions does the Salesforce Certified Associate (Platform Foundations) exam contain, and how much time do you have to complete it?", "options": ["40 questions in 70 minutes", "60 questions in 90 minutes", "25 questions in 30 minutes", "50 questions in 120 minutes"], "correct": 0, "explanation": "The exam has 40 multiple-choice/single-answer questions to complete in 70 minutes, with a 62% passing score." },
  { "id": "c14", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "What is the App Launcher (the grid-of-dots icon) for?", "options": ["For searching specific records across the whole org", "For quickly switching from one Salesforce app to another", "For creating new custom fields", "For downloading the Salesforce mobile app"], "correct": 1, "explanation": "The App Launcher lets you switch from one Salesforce app to another (e.g. from Sales to Service)." },
  { "id": "c15", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "Where do you go to manage org-wide settings, like users, security, and objects?", "options": ["In the Setup menu (the gear icon)", "In the App Launcher", "In Personal Settings", "On the Home page"], "correct": 0, "explanation": "Setup is the central admin panel, accessible from the gear icon in the top right." },
  { "id": "c16", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "Inside Setup, where do you manage objects (standard and custom) and their fields, page layouts, etc.?", "options": ["Object Manager", "Personal Settings", "App Launcher", "Report Builder"], "correct": 0, "explanation": "Object Manager, inside Setup, is the central place for configuring objects, fields, and layouts." },
  { "id": "c17", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "What is a List View?", "options": ["A summary report with charts", "A filtered, sortable list of an object's records, showing only the fields you choose", "The change history of a record", "A type of customizable dashboard"], "correct": 1, "explanation": "A list view shows a filtered subset of records, with the columns (fields) you choose." },
  { "id": "c18", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "What is the difference between global search and search within a list view/object?", "options": ["They are exactly the same thing", "Global search searches across multiple objects at once, while list view search only searches records already filtered", "Global search only works for Accounts", "List view search searches the whole org, while global search only searches the current object"], "correct": 1, "explanation": "Global search (at the top) covers multiple objects; search inside a list view only filters the records already shown." },
  { "id": "c19", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "What are \"Favorites\" used for in Salesforce?", "options": ["To flag duplicate records to be merged", "To save shortcuts to frequently used pages or records", "To mark admin users", "To sort reports by creation date"], "correct": 1, "explanation": "Favorites, enabled with the star icon, create quick access to the pages you use most often." },
  { "id": "c20", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "Where do you edit your personal information, like language or time zone, without touching org settings?", "options": ["In Object Manager", "In Personal Settings (your avatar menu)", "In Report Builder", "In the App Launcher"], "correct": 1, "explanation": "Personal Settings, accessible from your avatar in the top right, only affect your own user account." },
  { "id": "c21", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "In a list view, which display lets you drag records between columns based on a picklist field (e.g. an opportunity's stage)?", "options": ["Table view", "Kanban view", "Calendar view", "Chart view"], "correct": 1, "explanation": "Kanban view organizes records into draggable columns, useful for example to track sales stages." },
  { "id": "c22", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "What does the \"Recently Viewed\" section show?", "options": ["The records you most recently viewed", "The records created in the last hour by anyone in the org", "The org's most popular reports", "The users currently logged in"], "correct": 0, "explanation": "It's an automatic shortcut to the last records you opened yourself, without having to search for them again." },
  { "id": "c23", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "What is the \"highlights panel\" at the top of a record?", "options": ["The list of all the object's fields", "The area that shows the most important fields and actions for that record", "The history of all changes made to the record", "The list of related records"], "correct": 1, "explanation": "The highlights panel surfaces the most relevant information and action buttons at the top of the page." },
  { "id": "c24", "badge": "generale", "section": 2, "sectionTitle": "Navigation", "question": "What does a \"related list\" show on a record's page?", "options": ["Required fields not yet filled in", "The records linked to the one you're viewing (e.g. an Account's Contacts)", "The permissions assigned to the user", "Earlier versions of the same record"], "correct": 1, "explanation": "Related lists, at the bottom of a record's page, show the records linked to it through a relationship." },
  { "id": "c25", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "Which standard object do you use to represent a company or organization you do business with?", "options": ["Contact", "Account", "Lead", "Opportunity"], "correct": 1, "explanation": "Account represents the company (or, in B2C, often the person) with whom there's an ongoing business relationship." },
  { "id": "c26", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "Which standard object represents a single person, usually linked to an Account?", "options": ["Contact", "Case", "Campaign", "Lead"], "correct": 0, "explanation": "Contact represents the individual, typically linked to an Account through a relationship." },
  { "id": "c27", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "Which standard object represents a potential customer who hasn't been qualified yet?", "options": ["Opportunity", "Lead", "Account", "Case"], "correct": 1, "explanation": "Lead represents a raw contact, before being qualified and converted into an Account/Contact/Opportunity." },
  { "id": "c28", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "Which standard object represents an active, won, or lost sales deal?", "options": ["Opportunity", "Campaign", "Case", "Lead"], "correct": 0, "explanation": "Opportunity tracks a deal through the pipeline, until it closes (won or lost)." },
  { "id": "c29", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "Which standard object do you use to track a customer's support request?", "options": ["Case", "Lead", "Campaign", "Account"], "correct": 0, "explanation": "Case is the central object of Service Cloud for managing tickets and support requests." },
  { "id": "c30", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "In a Lookup relationship between two objects, what happens if you delete the \"parent\" record?", "options": ["All linked \"child\" records are automatically deleted too", "The \"child\" records remain, but lose the link (the lookup field is cleared)", "You cannot delete a parent record in a Lookup relationship", "The child records are automatically moved to another parent"], "correct": 1, "explanation": "A Lookup relationship is \"weaker\": it links two records without tying their lifecycles together." },
  { "id": "c31", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "What characterizes a Master-Detail relationship compared to a Lookup?", "options": ["It's identical to a Lookup, only the name changes", "The \"detail\" record inherits security and ownership from the \"master\", and is deleted if the master is deleted", "It can link at most two records together", "It can only be used between custom objects, never with standard objects"], "correct": 1, "explanation": "In Master-Detail, the detail depends tightly on the master: deleting the master also deletes the details." },
  { "id": "c32", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "How do you create a \"many-to-many\" relationship between two objects in Salesforce (e.g. Students and Courses)?", "options": ["It's not possible, Salesforce only supports one-to-many relationships", "With a \"junction object\" linked to both through two relationships", "By adding a text field that lists the linked IDs", "By duplicating the main object for each relationship"], "correct": 1, "explanation": "The junction object, with two relationships (Master-Detail or Lookup), is the standard way to model many-to-many." },
  { "id": "c33", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "What do \"Organization-Wide Defaults\" (OWD) define?", "options": ["The default page layout for new users", "The baseline access level to an object's records, before sharing rules are applied", "The org's default language", "The required fields for every object"], "correct": 1, "explanation": "OWD sets the minimum visibility level on records: sharing rules can only widen it, never narrow it." },
  { "id": "c34", "badge": "generale", "section": 3, "sectionTitle": "Data Model", "question": "What does the Profile assigned to a user determine?", "options": ["Only their time zone and language", "The objects, fields, and baseline permissions that user can access", "Only the interface's visual theme", "Only which reports they can see on the Home page"], "correct": 1, "explanation": "Profile defines baseline access (objects, fields, system permissions); every user has exactly one." },
  { "id": "c35", "badge": "generale", "section": 4, "sectionTitle": "Reports & Dashboards", "question": "Which report format simply shows a list of records with a total, without groupings?", "options": ["Tabular report", "Summary report", "Matrix report", "Joined report"], "correct": 0, "explanation": "A tabular report is the simplest format: rows of data with a total, no groupings." },
  { "id": "c36", "badge": "generale", "section": 4, "sectionTitle": "Reports & Dashboards", "question": "Which report format groups rows (e.g. by Owner), showing subtotals for each group?", "options": ["Tabular report", "Summary report", "Matrix report", "Joined report"], "correct": 1, "explanation": "A summary report adds one or more grouping levels with subtotals." },
  { "id": "c37", "badge": "generale", "section": 4, "sectionTitle": "Reports & Dashboards", "question": "Which report format groups data by both rows and columns, creating a comparison grid?", "options": ["Tabular report", "Summary report", "Matrix report", "List report"], "correct": 2, "explanation": "A matrix report groups on rows and columns at the same time, useful for cross-comparisons." },
  { "id": "c38", "badge": "generale", "section": 4, "sectionTitle": "Reports & Dashboards", "question": "What are \"Bucket Fields\" used for in a report?", "options": ["To encrypt sensitive data in the report", "To group values into custom categories without creating a formula field", "To schedule the report to be sent automatically", "To limit the number of rows shown"], "correct": 1, "explanation": "Bucket fields let you group different values on the fly into custom categories, only within the report." },
  { "id": "c39", "badge": "generale", "section": 4, "sectionTitle": "Reports & Dashboards", "question": "What is a Dashboard?", "options": ["A filtered list of records", "A visual representation (charts, gauges) based on one or more reports", "A special type of custom object", "A Trailhead module about reporting"], "correct": 1, "explanation": "A Dashboard turns one or more reports into visual components like charts, gauges, and tables." },
  { "id": "c40", "badge": "generale", "section": 4, "sectionTitle": "Reports & Dashboards", "question": "What is a dashboard \"subscription\" for?", "options": ["To pay to unlock premium dashboards", "To automatically receive a dashboard update by email on a set schedule", "To share the dashboard with one click on AppExchange", "To convert the dashboard into a tabular report"], "correct": 1, "explanation": "A subscription automatically emails an updated snapshot of the dashboard, at the frequency you choose." },
  { "id": "c41", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is Salesforce, according to the \"Discover Agentforce 360\" module?", "options": ["A solution that creates a universal customer ID across different systems", "The only integrated platform that combines data with AI to drive autonomous action across every CRM process and every customer touchpoint", "A single app used to capture and nurture leads", "A collaboration tool to bring teams together"], "correct": 1, "explanation": "Salesforce describes itself as the only platform that unites data and AI to drive autonomous action across the entire CRM, not a single standalone tool." },
  { "id": "c42", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "Which business tools does Agentforce 360 combine to improve the customer experience?", "options": ["CRM apps, trusted AI, and unified data", "AI technology available to everyone and multiple CRM systems", "A data lake and a data-driven CRM", "A unified view of customer data"], "correct": 0, "explanation": "Agentforce 360 brings together three layers: CRM apps (Customer 360), unified data (Data 360), and trusted agentic AI (Agentforce 360 Platform)." },
  { "id": "c43", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is the main goal of Agentforce 360 for businesses?", "options": ["Provide a unified platform for marketing campaigns", "Unify all of a company's apps and functions", "Automate employees' routine requests", "Improve collaboration and communication within teams"], "correct": 1, "explanation": "Agentforce 360 unifies all of a company's apps and functions, so customers, employees, operational functions, and agents all work together toward the same goal." },
  { "id": "c44", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "How does Agentforce Service improve customer support?", "options": ["It offers personalized product recommendations", "It enables collaboration between humans and agents from first contact to final resolution", "It automates complex supply chain processes", "It provides a conversational workspace for employees"], "correct": 1, "explanation": "Agentforce Service is a platform where humans and agents collaborate from first contact to final resolution, with proactive 24/7 support." },
  { "id": "c45", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What characterizes Agentforce HR Service in handling employee requests?", "options": ["It entirely replaces the HR team", "It automates routine requests and resolves 96% of cases autonomously thanks to AI-based self-service", "It only handles onboarding new employees in Workday", "It's a feature only available inside Slack"], "correct": 1, "explanation": "Agentforce HR Service automates routine requests and, thanks to AI-based self-service, resolves 96% of cases autonomously, leaving the more complex requests to HR teams." },
  { "id": "c46", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "Thanks to which technology can Agentforce also act on systems outside Salesforce (e.g. SAP, Snowflake, Workday)?", "options": ["MuleSoft", "Data Cloud", "Tableau", "Heroku"], "correct": 0, "explanation": "MuleSoft integrations provide a unified API and an integration layer that lets Agentforce act on systems and workflows outside Salesforce." },
  { "id": "c47", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is the main function of Agentforce 360 Platform?", "options": ["Provide multichannel communications for marketing campaigns", "Serve as the foundation for deploying and managing AI agents at scale", "Automate customer support requests", "Offer personalized product recommendations"], "correct": 1, "explanation": "Agentforce 360 Platform is the agentic platform that forms the foundation for building, deploying, and managing enterprise-grade AI agents at scale." },
  { "id": "c48", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is the main purpose of Agent Script?", "options": ["Define agent behavior using natural language, making instructions deterministic", "Provide a creative workspace for trailblazers", "Integrate Agentforce with more than 100 partner systems", "Schedule maintenance and proactively dispatch technicians"], "correct": 0, "explanation": "Agent Script is a scripting layer that defines agent behavior in natural language, making tools and instructions deterministic where precision is critical (e.g. regulated industries)." },
  { "id": "c49", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is the Atlas reasoning engine for in the Agentforce 360 Platform architecture?", "options": ["To coordinate complex, multi-step business processes", "To convert PDFs and diagrams into structured data", "To manage the voice channel of customer support", "To build apps through natural language"], "correct": 0, "explanation": "The Atlas reasoning engine helps coordinate complex, multi-step business processes, governing how agents think and act." },
  { "id": "c50", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "Which open protocols does Agentforce support for connecting with models and systems already in use at a company?", "options": ["MCP (Model Context Protocol) and A2A (Agent-to-Agent)", "REST and SOAP", "OAuth and SAML", "GraphQL and gRPC"], "correct": 0, "explanation": "Agentforce supports the open MCP and A2A protocols, so companies can connect with the models and systems they already use, with no lock-in (\"no walls, no fences\")." },
  { "id": "c51", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "Which types of data does Data 360 unify?", "options": ["Only structured data", "Only unstructured data", "Both structured and unstructured data", "Only customer data"], "correct": 2, "explanation": "Data 360 unifies company data, customer data, and even unstructured data like PDFs, Slack messages, and Teams conversations, creating a single view of every customer and operation." },
  { "id": "c52", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is the process called that ensures every agent acts with precision and reliability, grounding the model's response in the context of metadata and semantics?", "options": ["Data augmentation", "Retrieval-Augmented Generation (RAG)", "Predictive modeling", "Data harmonization"], "correct": 1, "explanation": "RAG (Retrieval-Augmented Generation) retrieves trusted data and grounds the model's responses in the context of metadata and semantics, ensuring precision and reliability." },
  { "id": "c53", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What does Data 360's \"zero-copy\" architecture enable?", "options": ["Unifying data from systems like SAP, Workday, Snowflake, and AWS without having to move it", "Duplicating data across multiple data centers for redundancy", "Automatically deleting duplicate data", "Encrypting data during transfer"], "correct": 0, "explanation": "Thanks to the zero-copy approach, Data 360 unifies Salesforce data with external systems like SAP, Workday, Snowflake, and AWS without having to move it." },
  { "id": "c54", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "According to the model described for Data 360, what do data, metadata, and semantics each provide?", "options": ["Data provides the facts, metadata provides the structure, semantics provides the meaning/business logic", "Data provides security, metadata provides speed, semantics provides scalability", "Data provides governance, metadata provides privacy, semantics provides compliance", "Data provides context, metadata provides meaning, semantics provides the facts"], "correct": 0, "explanation": "Raw data tells us what happened (the facts), metadata provides the structure, and semantics adds meaning or business logic — together they let AI move from guessing to certainty." },
  { "id": "c55", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "How have customer expectations changed in recent years?", "options": ["They've decreased, because customers ask for less personalization", "They've increased dramatically", "They've stayed the same as in the past", "They've shifted exclusively to social channels"], "correct": 1, "explanation": "Customer expectations have increased dramatically in recent years, and Salesforce products help create the best possible experience for them." },
  { "id": "c56", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "True or false: trust is Salesforce's number one value.", "options": ["True", "False"], "correct": 0, "explanation": "Trust is Salesforce's number one value: \"Nothing is more important than the trust of our customers and all of our stakeholders.\"" },
  { "id": "c57", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What are Salesforce's five core values?", "options": ["Trust, Customer Success, Innovation, Equality, Sustainability", "Trust, Speed, Innovation, Simplicity, Sustainability", "Customer Success, Quality, Security, Equality, Growth", "Innovation, Transparency, Sustainability, Speed, Trust"], "correct": 0, "explanation": "Salesforce's five core values are Trust, Customer Success, Innovation, Equality, and Sustainability." },
  { "id": "c58", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What does the \"Customer Success\" value represent for Salesforce?", "options": ["The certainty that Salesforce's success depends on its customers' success", "A discount program for the most loyal customers", "A department dedicated exclusively to technical support", "An annual award given to the best partners"], "correct": 0, "explanation": "\"We know we're successful when our customers are successful, so from day one we built a company based on customer success.\"" },
  { "id": "c59", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What does Salesforce's \"1-1-1\" model provide for?", "options": ["1% of employee time, 1% of equity, and 1% of product donated to nonprofit organizations", "1 hour of volunteering, 1 dollar donated, and 1 free product for every new customer", "A 1% discount for every year of customer loyalty", "1 employee, 1 partner, and 1 customer involved in every nonprofit project"], "correct": 0, "explanation": "With the 1-1-1 model, Salesforce commits 1% of its employees' time, 1% of its equity, and 1% of its product to nonprofit organizations." },
  { "id": "c60", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "How does Salesforce concretely demonstrate the value of \"Innovation\"?", "options": ["By rolling the latest innovations into its products three times a year", "By releasing a single major update every five years", "By acquiring a different startup every month", "By outsourcing innovation entirely to external partners"], "correct": 0, "explanation": "Salesforce rolls the latest innovations into its products three times a year, so customers can stay ahead in their respective industries." },
  { "id": "c61", "badge": "come-muoversi-trailhead", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "True or false: trails are guided learning paths made up of modules and projects.", "options": ["True", "False"], "correct": 0, "explanation": "\"Trails are guided learning paths made up of modules and projects that help you explore topics and gain useful skills and hands-on experience with Salesforce products.\"" },
  { "id": "c62", "badge": "come-muoversi-trailhead", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What is the benefit of earning a Salesforce certification?", "options": ["It lets you demonstrate hands-on experience with Salesforce products, strengthening your resume and validating your skills", "It gives unlimited free access to every Salesforce product", "It replaces the need to complete modules and projects on Trailhead", "It's required to be able to create a Trailhead Playground"], "correct": 0, "explanation": "Salesforce certifications let you demonstrate hands-on experience with Salesforce products: they're useful for strengthening your resume and validating your skills." },
  { "id": "c63", "badge": "come-muoversi-trailhead", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What are \"modules\" on Trailhead?", "options": ["Short units covering specific topics", "Guided learning paths made up of multiple pieces of content", "Hands-on challenges without step-by-step instructions", "Custom learning paths that you create yourself"], "correct": 0, "explanation": "\"Modules are short units that cover specific topics.\"" },
  { "id": "c64", "badge": "come-muoversi-trailhead", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What are \"projects\" on Trailhead?", "options": ["They help you gain new skills through hands-on practice in a Trailhead Playground, with step-by-step instructions", "They are custom learning paths that you create yourself", "They are hands-on challenges without detailed instructions, based on real business problems", "They are the equivalent of an official certification"], "correct": 0, "explanation": "\"Projects help you gain new skills through hands-on practice inside a Trailhead Playground, guiding you with step-by-step instructions.\"" },
  { "id": "c65", "badge": "come-muoversi-trailhead", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "Which platforms can you use to navigate Trailhead, according to this unit?", "options": ["Only on a desktop computer", "Desktop computer, phone, and even Slack", "Only through the Trailhead GO mobile app", "Only inside the Trailblazer Community"], "correct": 1, "explanation": "You can learn to navigate Trailhead \"on desktop, phone, or even in Slack\"." },
  { "id": "c66", "badge": "come-muoversi-trailhead", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "Where can you connect with trailblazers from around the world to get support and advice along your learning journey?", "options": ["In the Trailblazer Community", "In AppExchange", "In the Trailhead Playground", "In the org's Setup menu"], "correct": 0, "explanation": "\"You don't have to go on this learning journey alone: in the Trailblazer Community you can connect with trailblazers from around the world to get support and advice.\"" },
  { "id": "c67", "badge": "agentforce-360-platform-basics", "section": 3, "sectionTitle": "Data Model", "question": "In Salesforce, what is an 'object'?", "options": ["A table in the Salesforce database that stores a particular kind of information", "A row in a database table", "A column in a database table", "A specific instance of Salesforce"], "correct": 0, "explanation": "\"Objects are tables in the Salesforce database that store a particular kind of information. There are standard objects like Accounts and Contacts and custom objects like the Property object.\"" },
  { "id": "c68", "badge": "agentforce-360-platform-basics", "section": 3, "sectionTitle": "Data Model", "question": "What is a 'record' in Salesforce?", "options": ["A row in an object's database table — the actual data associated with an object", "A table that stores a kind of information", "A column in an object's table", "A custom field added to an object"], "correct": 0, "explanation": "\"Records are rows in object database tables. Records are the actual data associated with an object.\"" },
  { "id": "c69", "badge": "agentforce-360-platform-basics", "section": 3, "sectionTitle": "Data Model", "question": "What is a 'field' in Salesforce?", "options": ["A column in an object's database table", "A row of data in an object", "A table storing records", "An app made of objects and functionality"], "correct": 0, "explanation": "\"Fields are columns in object database tables. Both standard and custom objects have fields. On our Property object, we have fields like Address and Price.\"" },
  { "id": "c70", "badge": "agentforce-360-platform-basics", "section": 1, "sectionTitle": "Salesforce Ecosystem", "question": "What does 'org' stand for in Salesforce, and what does it refer to?", "options": ["Short for 'organization' — a specific instance of Salesforce", "Short for 'origin' — the source system data was imported from", "Short for 'organizer' — a personal task-management tool", "Short for 'orchestration' — the workflow automation engine"], "correct": 0, "explanation": "\"Org is short for organization, and it refers to a specific instance of Salesforce. Your company can have one or multiple orgs.\"" },
  { "id": "c71", "badge": "agentforce-360-platform-basics", "section": 2, "sectionTitle": "Navigation", "question": "What is a Trailhead Playground?", "options": ["A special type of Developer Edition (DE) org, used as a safe environment to practice Salesforce skills", "A sandbox available only to Salesforce admins", "A paid production org used for real customer data", "A mobile-only testing app"], "correct": 0, "explanation": "\"A Trailhead Playground is a safe environment where you can practice the skills you're learning... a playground is in fact a special type of Developer Edition (DE) org.\"" },
  { "id": "c72", "badge": "agentforce-360-platform-basics", "section": 2, "sectionTitle": "Navigation", "question": "In the 'Unlock Business Success with Salesforce Data Platform' unit, how does D'Angelo add a 'Prequalified?' checkbox field to the Contact object?", "options": ["Through Setup > Object Manager > Contact > Fields & Relationships > New, without writing any code", "By writing Apex code in the Developer Console", "By installing a package from AppExchange", "By importing a new field with Data Loader"], "correct": 0, "explanation": "This is no-code (declarative) development: \"With no-code development, you use forms and drag-and-drop tools to perform powerful customization tasks... Click Setup, then Object Manager, then Contact, then Fields & Relationships, then New.\"" }
];

// Glossario dei termini incontrati nel percorso di certificazione (Salesforce + Agentforce/IA).
const CAREER_GLOSSARY = [
  { "id": "g1", "category": "Ecosystem & Community", "term": "CRM", "definition": "Customer Relationship Management: the approach (and type of software) for managing all customer information and interactions in one place. It's the core concept behind Salesforce." },
  { "id": "g2", "category": "Ecosystem & Community", "term": "Trailhead", "definition": "Salesforce's free online learning platform, with modules, projects, trailmixes, and badges." },
  { "id": "g3", "category": "Ecosystem & Community", "term": "Trailmix", "definition": "A custom learning path on Trailhead, built by combining modules, projects, and other content of your choosing." },
  { "id": "g4", "category": "Ecosystem & Community", "term": "Superbadge", "definition": "A hands-on Trailhead challenge with realistic scenarios, without step-by-step instructions, that tests the skills you've learned." },
  { "id": "g5", "category": "Ecosystem & Community", "term": "Trailhead Playground", "definition": "A free, separate Salesforce org designed for practicing without touching real data." },
  { "id": "g6", "category": "Ecosystem & Community", "term": "AppExchange", "definition": "The online marketplace of apps and components built by Salesforce and its partners, used to extend an org's functionality." },
  { "id": "g7", "category": "Ecosystem & Community", "term": "Multi-tenant", "definition": "An architecture where multiple customers share the same Salesforce infrastructure, but with data completely isolated and secure from one another." },
  { "id": "g8", "category": "Ecosystem & Community", "term": "Ohana", "definition": "Hawaiian word for \"family\", used by Salesforce to describe employees, customers, partners, and community as one family." },
  { "id": "g9", "category": "Ecosystem & Community", "term": "Trailblazer", "definition": "The term Salesforce uses for anyone who learns and uses Salesforce skills to grow their career." },
  { "id": "g10", "category": "Ecosystem & Community", "term": "Trailblazer Community", "definition": "The official online community where Trailblazers connect, ask questions, and share knowledge." },
  { "id": "g11", "category": "Ecosystem & Community", "term": "Sales Cloud", "definition": "The Salesforce product built for sales teams: it manages leads, opportunities, and pipeline." },
  { "id": "g12", "category": "Ecosystem & Community", "term": "Service Cloud", "definition": "The Salesforce product built for customer support teams, centered around the Case object." },
  { "id": "g13", "category": "Agentforce & AI", "term": "Agentforce 360", "definition": "The platform that unites CRM apps, unified data (Data 360), and trusted agentic AI (Agentforce 360 Platform) to drive autonomous action across the entire CRM." },
  { "id": "g14", "category": "Agentforce & AI", "term": "Data 360", "definition": "The next generation of Data Cloud: it unifies structured and unstructured data (including PDFs, chats, conversations) with a zero-copy architecture, to give AI agents trusted context." },
  { "id": "g15", "category": "Agentforce & AI", "term": "Agentforce 360 Platform", "definition": "The agentic platform that forms the foundation for building, deploying, and managing enterprise-grade AI agents at scale." },
  { "id": "g16", "category": "Agentforce & AI", "term": "Agentforce Service", "definition": "A platform where humans and AI agents collaborate from first contact to final resolution, with proactive 24/7 support." },
  { "id": "g17", "category": "Agentforce & AI", "term": "Agentforce HR Service", "definition": "A solution that automates employees' routine requests, resolving around 96% of cases autonomously thanks to AI-based self-service." },
  { "id": "g18", "category": "Agentforce & AI", "term": "MuleSoft", "definition": "Integration technology that provides a unified API, letting Agentforce act on systems outside Salesforce too, like SAP, Snowflake, and Workday." },
  { "id": "g19", "category": "Agentforce & AI", "term": "RAG (Retrieval-Augmented Generation)", "definition": "A process that retrieves trusted data and uses it as context (metadata and semantics) to ground an AI model's responses, ensuring precision and reliability." },
  { "id": "g20", "category": "Agentforce & AI", "term": "Zero-copy", "definition": "An architecture that unifies data from multiple systems (e.g. SAP, Workday, Snowflake, AWS) without having to move or duplicate it." },
  { "id": "g21", "category": "Agentforce & AI", "term": "Atlas", "definition": "The reasoning engine in the Agentforce 360 Platform architecture: it coordinates complex, multi-step business processes, governing how agents think and act." },
  { "id": "g22", "category": "Agentforce & AI", "term": "Agent Script", "definition": "A scripting layer that defines agent behavior using natural language, making tools and instructions deterministic where precision is critical." },
  { "id": "g23", "category": "Agentforce & AI", "term": "MCP (Model Context Protocol)", "definition": "An open protocol that lets Agentforce connect with AI models already in use at a company, with no lock-in." },
  { "id": "g24", "category": "Agentforce & AI", "term": "A2A (Agent-to-Agent)", "definition": "An open protocol that enables communication and collaboration between different AI agents." },
  { "id": "g25", "category": "Agentforce & AI", "term": "LLM (Large Language Model)", "definition": "An AI model trained on huge amounts of text to understand and generate natural language; it's the \"engine\" reasoning behind agents like Agentforce's. A general AI term, not Salesforce-specific." },
  { "id": "g26", "category": "Agentforce & AI", "term": "GPT (Generative Pre-trained Transformer)", "definition": "A family of LLMs based on the Transformer architecture, among the best-known examples of large language models. A general AI term, not Salesforce-specific." },
  { "id": "g27", "category": "Navigation", "term": "App Launcher", "definition": "The grid-of-dots icon that lets you quickly switch from one Salesforce app to another (e.g. from Sales to Service)." },
  { "id": "g28", "category": "Navigation", "term": "Setup", "definition": "The org's central admin panel (gear icon in the top right), where you manage users, security, objects, and other global settings." },
  { "id": "g29", "category": "Navigation", "term": "Object Manager", "definition": "The section inside Setup where you configure objects (standard and custom), their fields, and page layouts." },
  { "id": "g30", "category": "Navigation", "term": "List View", "definition": "A filtered, sortable list of an object's records, showing only the fields (columns) you choose." },
  { "id": "g31", "category": "Navigation", "term": "Kanban View", "definition": "A display that organizes records into draggable columns based on a picklist field, for example an opportunity's stage." },
  { "id": "g32", "category": "Navigation", "term": "Recently Viewed", "definition": "An automatic shortcut to the last records you opened yourself, without having to search for them again." },
  { "id": "g33", "category": "Navigation", "term": "Highlights panel", "definition": "The area at the top of a record that shows the most important fields and actions for that record." },
  { "id": "g34", "category": "Navigation", "term": "Related list", "definition": "A section on a record's page that shows the records linked to it, for example an Account's Contacts." },
  { "id": "g35", "category": "Navigation", "term": "Personal Settings", "definition": "Where you edit your personal information (language, time zone) without touching org-wide settings, accessible from your avatar." },
  { "id": "g36", "category": "Data Model", "term": "Account", "definition": "A standard object representing a company or organization with an ongoing business relationship." },
  { "id": "g37", "category": "Data Model", "term": "Contact", "definition": "A standard object representing a single person, usually linked to an Account." },
  { "id": "g38", "category": "Data Model", "term": "Lead", "definition": "A standard object representing a potential customer who hasn't been qualified yet." },
  { "id": "g39", "category": "Data Model", "term": "Opportunity", "definition": "A standard object representing an active, won, or lost sales deal." },
  { "id": "g40", "category": "Data Model", "term": "Case", "definition": "A standard object representing a customer's support request." },
  { "id": "g41", "category": "Data Model", "term": "Lookup relationship", "definition": "A \"weak\" relationship between two objects: if the parent record is deleted, the child record remains but loses the link (the lookup field is cleared)." },
  { "id": "g42", "category": "Data Model", "term": "Master-Detail relationship", "definition": "A \"strong\" relationship: the detail record inherits security and ownership from the master, and is deleted if the master is deleted." },
  { "id": "g43", "category": "Data Model", "term": "Junction object", "definition": "An object used to create a \"many-to-many\" relationship between two objects, linked to both through two relationships." },
  { "id": "g44", "category": "Data Model", "term": "OWD (Organization-Wide Defaults)", "definition": "The baseline access level to an object's records, before sharing rules are applied (which can only widen it, never narrow it)." },
  { "id": "g45", "category": "Data Model", "term": "Profile", "definition": "Defines the objects, fields, and baseline permissions a user can access; every user has exactly one." },
  { "id": "g46", "category": "Reports & Dashboards", "term": "Tabular report", "definition": "The simplest report format: a list of records with a total, no groupings." },
  { "id": "g47", "category": "Reports & Dashboards", "term": "Summary report", "definition": "A report format that groups rows (e.g. by Owner), showing subtotals for each group." },
  { "id": "g48", "category": "Reports & Dashboards", "term": "Matrix report", "definition": "A report format that groups data by both rows and columns, creating a comparison grid." },
  { "id": "g49", "category": "Reports & Dashboards", "term": "Bucket Field", "definition": "A field that lets you group different values on the fly into custom categories, only within a report, without creating a formula field." },
  { "id": "g50", "category": "Reports & Dashboards", "term": "Dashboard", "definition": "A visual representation (charts, gauges) based on one or more reports." },
  { "id": "g51", "category": "Reports & Dashboards", "term": "Subscription", "definition": "Automatically emails an updated dashboard, on a schedule you choose." },
  { "id": "g52", "category": "Salesforce Products & Clouds", "term": "Customer 360", "definition": "The unified view of the customer across every Salesforce app (sales, service, marketing, commerce): the \"CRM apps\" layer underlying Agentforce 360." },
  { "id": "g53", "category": "Salesforce Products & Clouds", "term": "Marketing Cloud", "definition": "The Salesforce product for managing multichannel marketing campaigns: email, SMS, social, advertising, and automated customer journeys." },
  { "id": "g54", "category": "Salesforce Products & Clouds", "term": "Commerce Cloud", "definition": "The Salesforce product for building and managing online stores, both B2B (business-to-business) and B2C (business-to-consumer)." },
  { "id": "g55", "category": "Salesforce Products & Clouds", "term": "Experience Cloud", "definition": "The product for building external sites, portals, and communities (for customers, partners, or employees) connected to Salesforce data." },
  { "id": "g56", "category": "Salesforce Products & Clouds", "term": "Slack", "definition": "A business messaging and collaboration platform, acquired by Salesforce and integrated as a workspace for teams and AI agents." },
  { "id": "g57", "category": "Salesforce Products & Clouds", "term": "Tableau", "definition": "The Salesforce product for data analysis and advanced visualization: dashboards and business intelligence beyond standard CRM reports." },
  { "id": "g58", "category": "Salesforce Products & Clouds", "term": "Heroku", "definition": "Salesforce's cloud platform for building, deploying, and managing custom applications outside the traditional CRM." },
  { "id": "g59", "category": "Salesforce Products & Clouds", "term": "Einstein", "definition": "The longtime brand for AI features built into Salesforce products, today largely folded into the Agentforce offering." },
  { "id": "g60", "category": "Salesforce Products & Clouds", "term": "Apex", "definition": "Salesforce's proprietary programming language, similar to Java, used to customize server-side logic (advanced/developer use, not required for the Associate exam)." },
  { "id": "g61", "category": "Salesforce Products & Clouds", "term": "Flow", "definition": "Salesforce's low-code/no-code automation tool, for building automated processes without writing Apex code." },
  { "id": "g62", "category": "Salesforce Products & Clouds", "term": "Lightning Platform", "definition": "The underlying technology platform that Salesforce apps are built on (formerly known as Force.com)." },
  { "id": "g63", "category": "Salesforce Products & Clouds", "term": "Lightning Web Components (LWC)", "definition": "The modern framework for building custom user interfaces inside Salesforce (advanced/developer use, not required for the Associate exam)." },
  { "id": "g64", "category": "Salesforce Products & Clouds", "term": "Financial Services Cloud", "definition": "A version of Salesforce specialized for banks, insurance, and financial services." },
  { "id": "g65", "category": "Salesforce Products & Clouds", "term": "Health Cloud", "definition": "A version of Salesforce specialized for healthcare and patient management." },
  { "id": "g66", "category": "Salesforce Products & Clouds", "term": "Nonprofit Cloud", "definition": "A version of Salesforce designed for nonprofit organizations, to manage donors, programs, and fundraising." },
  { "id": "g67", "category": "Salesforce Products & Clouds", "term": "Field Service", "definition": "A Service Cloud module for scheduling and managing technicians and on-site service visits." },
  { "id": "g68", "category": "Ecosystem & Community", "term": "The 5 core values of Salesforce", "definition": "Trust (the number one value), Customer Success, Innovation, Equality, and Sustainability: the principles that guide everything Salesforce does." },
  { "id": "g69", "category": "Ecosystem & Community", "term": "1-1-1 model", "definition": "Salesforce's philanthropic commitment: donating 1% of employee time, 1% of equity, and 1% of product to nonprofit organizations." },
  { "id": "g70", "category": "Ecosystem & Community", "term": "Trail", "definition": "A guided learning path made up of modules and projects, that helps you explore a topic and gain useful skills and hands-on experience with Salesforce products." },
  { "id": "g71", "category": "Ecosystem & Community", "term": "Project (Trailhead)", "definition": "A hands-on exercise, with step-by-step instructions, that helps you gain new skills by working inside a Trailhead Playground." },
  { "id": "g72", "category": "Data Model", "term": "Object (Salesforce)", "definition": "A table in the Salesforce database that stores a particular kind of information — standard (e.g. Account, Contact) or custom (e.g. Property)." },
  { "id": "g73", "category": "Data Model", "term": "Record", "definition": "A row in an object's database table — the actual data stored for that object (e.g. one specific property or contact)." },
  { "id": "g74", "category": "Data Model", "term": "Field", "definition": "A column in an object's database table. Both standard and custom objects can have fields (e.g. Prequalified?, Loan Amount)." },
  { "id": "g75", "category": "Ecosystem & Community", "term": "Org", "definition": "Short for 'organization' — a specific instance of Salesforce. A company can have one or several orgs." },
  { "id": "g76", "category": "Navigation", "term": "App (Salesforce)", "definition": "A set of objects, fields, and other functionality that supports a business process. You switch between apps with the App Launcher." },
  { "id": "g77", "category": "Ecosystem & Community", "term": "Developer Edition (DE) org", "definition": "A free, full-featured Salesforce org used for building and testing. A Trailhead Playground is a special type of DE org." },
  { "id": "g78", "category": "Navigation", "term": "No-code (declarative) development", "definition": "Building functionality using forms and drag-and-drop tools in Setup, without writing code — e.g. adding a custom field via Object Manager." },
  { "id": "g79", "category": "Navigation", "term": "Programmatic development", "definition": "Building functionality by writing code, e.g. using Lightning components, as opposed to no-code/declarative tools." }
];
