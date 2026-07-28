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
  { id: 1, name: "Ecosistema Salesforce", weight: 32, description: "Trailhead, prodotti Salesforce, community, percorsi di carriera" },
  { id: 2, name: "Navigazione", weight: 28, description: "Muoversi nell'org: Setup, ricerca, viste elenco, impostazioni personali" },
  { id: 3, name: "Modello dati", weight: 25, description: "Oggetti standard, relazioni, sicurezza dei dati" },
  { id: 4, name: "Report e Dashboard", weight: 15, description: "Tipi di report, formati, componenti dashboard" },
];

// Moduli/badge Trailhead completati, per tenere le domande separate per capitolo
// e non fare confusione tra temi diversi mentre si studia.
const CAREER_BADGES = [
  { "id": "generale", "name": "Fondamenti generali", "meta": "Basate sul blueprint ufficiale dell'esame, non da un badge specifico" },
  { "id": "agentforce-360-base", "name": "Nozioni di base su Agentforce 360", "meta": "Badge Trailhead — 400 punti — completato il 28 lug 2026 (4 unità: Alla scoperta di Agentforce 360, Entrare in contatto con i clienti, Creare e gestire agenti IA su larga scala, Trasformare dati disconnessi in contesti affidabili)" },
  { "id": "valori-salesforce", "name": "I valori di Salesforce: breve panoramica", "meta": "Unità Trailhead — 100 punti — completata il 16/05/2026 (i 5 valori fondamentali, il modello 1-1-1)" },
];

// Quiz di preparazione alla certificazione Salesforce Certified Associate,
// basato sul trailmix "Prepare for your Salesforce Certified Associate Credential".
// Domande scritte sulla base delle conoscenze generali richieste dall'esame
// (non copiate da Trailhead), organizzate per le 4 sezioni ufficiali dell'esame.
const CAREER_QUIZ = [
  { "id": "c1", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cos'è Trailhead?", "options": ["Un CRM per la gestione delle vendite", "La piattaforma di apprendimento online gratuita di Salesforce", "Un editor di codice per sviluppare in Apex", "Il marketplace di app di Salesforce"], "correct": 1, "explanation": "Trailhead è la piattaforma gratuita di Salesforce con moduli, progetti, trailmix e badge per imparare in autonomia." },
  { "id": "c2", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Come si chiama un percorso di apprendimento personalizzato che puoi creare tu stesso combinando moduli, progetti e altri contenuti Trailhead?", "options": ["Trail", "Superbadge", "Trailmix", "Playground"], "correct": 2, "explanation": "Il Trailmix è una raccolta di contenuti che scegli e ordini tu, come questa stessa lista che stai seguendo." },
  { "id": "c3", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cos'è un Superbadge su Trailhead?", "options": ["Un badge assegnato automaticamente dopo aver completato 10 moduli", "Una sfida pratica con scenari realistici, senza istruzioni passo-passo", "Un certificato di pagamento per l'esame ufficiale", "Un gruppo di moduli obbligatori per la certificazione"], "correct": 1, "explanation": "I Superbadge testano le competenze in scenari reali, senza la guida dettagliata tipica dei progetti." },
  { "id": "c4", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "A cosa serve un Trailhead Playground?", "options": ["È l'org di produzione dell'azienda dove lavori", "È un'org Salesforce gratuita, separata, per esercitarti senza rischi", "È l'app mobile ufficiale di Trailhead", "È l'ambiente dove si sostiene l'esame di certificazione"], "correct": 1, "explanation": "Il Playground è un'org gratuita e isolata, perfetta per fare pratica senza toccare dati reali." },
  { "id": "c5", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cosa significa CRM, il concetto alla base di Salesforce?", "options": ["Customer Relationship Management: gestione delle relazioni con i clienti", "Central Records Manager: archivio centrale dei documenti aziendali", "Customer Reporting Module: strumento di reportistica vendite", "Cloud Resource Manager: gestione delle risorse cloud"], "correct": 0, "explanation": "CRM è il concetto centrale: raccogliere e gestire in un unico posto tutte le informazioni e interazioni con i clienti." },
  { "id": "c6", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "A cosa serve principalmente Sales Cloud?", "options": ["Gestire i ticket di assistenza clienti", "Gestire il ciclo di vendita: lead, opportunità e pipeline", "Creare campagne email automatizzate", "Gestire un negozio online (e-commerce)"], "correct": 1, "explanation": "Sales Cloud è il prodotto Salesforce pensato per i team vendite, per seguire lead e opportunità lungo la pipeline." },
  { "id": "c7", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "A cosa serve principalmente Service Cloud?", "options": ["Gestire l'assistenza clienti e i case di supporto", "Gestire le opportunità di vendita", "Creare siti web pubblici per i clienti", "Analizzare i dati con dashboard avanzate"], "correct": 0, "explanation": "Service Cloud è il prodotto pensato per i team di assistenza, con al centro l'oggetto Case." },
  { "id": "c8", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cos'è l'AppExchange?", "options": ["Il forum ufficiale della community Salesforce", "Il marketplace online di app e componenti creati da Salesforce e partner", "Lo strumento per scambiare record tra due org diverse", "La pagina dove si acquistano le licenze utente"], "correct": 1, "explanation": "L'AppExchange è il marketplace da cui installare app pronte, gratuite o a pagamento, per estendere la tua org." },
  { "id": "c9", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cosa significa che Salesforce ha un'architettura \"multi-tenant\"?", "options": ["Ogni cliente ha un proprio server fisico dedicato", "Più clienti condividono la stessa infrastruttura, con dati isolati e sicuri gli uni dagli altri", "I dati vengono duplicati su più data center per sicurezza", "Ogni utente ha una propria versione separata del software"], "correct": 1, "explanation": "Multi-tenant vuol dire: infrastruttura condivisa tra tutti i clienti, ma con dati completamente isolati per ciascuna org." },
  { "id": "c10", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cosa significa \"Ohana\" nella cultura Salesforce?", "options": ["Il nome del linguaggio di programmazione proprietario", "Parola hawaiana per \"famiglia\", usata per descrivere la community Salesforce", "L'acronimo del programma di certificazioni", "Il nome dell'assistente virtuale integrato in Salesforce"], "correct": 1, "explanation": "Ohana è un termine hawaiano che Salesforce usa per descrivere dipendenti, clienti, partner e community come un'unica famiglia." },
  { "id": "c11", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Chi si definisce \"Trailblazer\" nell'ecosistema Salesforce?", "options": ["Solo gli sviluppatori certificati Apex", "Chiunque impari e usi competenze Salesforce per far crescere la propria carriera", "Solo i dipendenti diretti di Salesforce", "Solo chi ha completato tutti i Superbadge disponibili"], "correct": 1, "explanation": "\"Trailblazer\" è il termine con cui Salesforce chiama chiunque, a qualunque livello, impari e usi le sue competenze." },
  { "id": "c12", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Come si chiama la community online ufficiale dove i Trailblazer si connettono, fanno domande e condividono conoscenza?", "options": ["AppExchange", "Trailblazer Community", "Salesforce Ben", "Ohana Forum"], "correct": 1, "explanation": "La Trailblazer Community è lo spazio ufficiale Salesforce per il networking e il supporto tra pari." },
  { "id": "c13", "badge": "generale", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Quante domande contiene l'esame Salesforce Certified Associate (Platform Foundations) e in quanto tempo va completato?", "options": ["40 domande in 70 minuti", "60 domande in 90 minuti", "25 domande in 30 minuti", "50 domande in 120 minuti"], "correct": 0, "explanation": "L'esame ha 40 domande a risposta multipla/singola da completare in 70 minuti, con soglia di superamento al 62%." },
  { "id": "c14", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "A cosa serve l'App Launcher (l'icona a griglia di puntini)?", "options": ["Per cercare record specifici in tutta l'org", "Per passare rapidamente da un'app Salesforce all'altra", "Per creare nuovi campi personalizzati", "Per scaricare l'app mobile di Salesforce"], "correct": 1, "explanation": "L'App Launcher permette di passare da un'app Salesforce all'altra (es. da Vendite a Assistenza)." },
  { "id": "c15", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Dove vai per gestire impostazioni a livello di intera org, come utenti, sicurezza e oggetti?", "options": ["Nel menu Setup (l'icona a ingranaggio)", "Nell'App Launcher", "Nelle Impostazioni personali", "Nella Home page"], "correct": 0, "explanation": "Setup è il pannello di amministrazione centrale, accessibile dall'icona a ingranaggio in alto a destra." },
  { "id": "c16", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Dentro Setup, dove gestisci gli oggetti (standard e personalizzati) e i loro campi, layout di pagina, ecc.?", "options": ["Object Manager", "Personal Settings", "App Launcher", "Report Builder"], "correct": 0, "explanation": "L'Object Manager, all'interno di Setup, è il punto centrale per configurare oggetti, campi e layout." },
  { "id": "c17", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Che cos'è una List View (vista elenco)?", "options": ["Un report riepilogativo con grafici", "Un elenco filtrato e ordinabile di record di un oggetto, con solo i campi scelti", "La cronologia delle modifiche a un record", "Un tipo di dashboard personalizzabile"], "correct": 1, "explanation": "Una vista elenco mostra un sottoinsieme di record filtrati, con le colonne (campi) che scegli tu." },
  { "id": "c18", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Qual è la differenza tra la ricerca globale e la ricerca in una vista elenco/oggetto?", "options": ["Sono esattamente la stessa cosa", "La ricerca globale cerca tra più oggetti insieme, quella nella vista elenco solo tra i record già filtrati", "La ricerca globale funziona solo per gli Account", "La ricerca nella vista elenco cerca in tutta l'org, quella globale solo nell'oggetto corrente"], "correct": 1, "explanation": "La ricerca globale (in alto) copre più oggetti; la ricerca dentro una vista elenco filtra solo i record già visualizzati." },
  { "id": "c19", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "A cosa servono i \"Preferiti\" (Favorites) in Salesforce?", "options": ["A segnare i record duplicati da unire", "A salvare scorciatoie a pagine o record usati di frequente", "A indicare gli utenti amministratori", "A ordinare i report per data di creazione"], "correct": 1, "explanation": "I Preferiti, attivabili con l'icona a stella, creano un accesso rapido alle pagine che usi più spesso." },
  { "id": "c20", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Dove modifichi le tue informazioni personali, come lingua o fuso orario, senza toccare le impostazioni dell'org?", "options": ["Nell'Object Manager", "Nelle Impostazioni personali (menu del tuo avatar)", "Nel Report Builder", "Nell'App Launcher"], "correct": 1, "explanation": "Le Impostazioni personali, accessibili dal tuo avatar in alto a destra, riguardano solo il tuo account utente." },
  { "id": "c21", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "In una vista elenco, quale visualizzazione ti permette di trascinare i record tra colonne in base a un campo di selezione (es. fase di un'opportunità)?", "options": ["Vista tabellare", "Vista Kanban", "Vista calendario", "Vista grafico"], "correct": 1, "explanation": "La vista Kanban organizza i record in colonne trascinabili, utile ad esempio per seguire le fasi di vendita." },
  { "id": "c22", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Che cosa mostra la sezione \"Recently Viewed\" (Visualizzati di recente)?", "options": ["I record che hai visualizzato più di recente", "I record creati nell'ultima ora da chiunque nell'org", "I report più popolari dell'org", "Gli utenti connessi in questo momento"], "correct": 0, "explanation": "È una scorciatoia automatica verso gli ultimi record che hai aperto tu, senza doverli cercare di nuovo." },
  { "id": "c23", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Che cos'è il \"pannello riepilogativo\" (highlights panel) in cima a un record?", "options": ["L'elenco di tutti i campi dell'oggetto", "L'area che mostra i campi e le azioni più importanti per quel record", "La cronologia di tutte le modifiche fatte al record", "L'elenco dei record correlati"], "correct": 1, "explanation": "Il pannello riepilogativo mette in evidenza le informazioni e i pulsanti d'azione più rilevanti, in alto nella pagina." },
  { "id": "c24", "badge": "generale", "section": 2, "sectionTitle": "Navigazione", "question": "Che cosa mostra una \"related list\" (elenco correlato) nella pagina di un record?", "options": ["I campi obbligatori non ancora compilati", "I record collegati a quello che stai visualizzando (es. i Contatti di un Account)", "I permessi assegnati all'utente", "Le versioni precedenti dello stesso record"], "correct": 1, "explanation": "Gli elenchi correlati, in basso nella pagina di un record, mostrano i record legati ad esso tramite una relazione." },
  { "id": "c25", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Quale oggetto standard usi per rappresentare un'azienda o organizzazione con cui fai affari?", "options": ["Contact", "Account", "Lead", "Opportunity"], "correct": 1, "explanation": "L'Account rappresenta l'azienda (o, in B2C, spesso la persona) con cui è in corso una relazione commerciale." },
  { "id": "c26", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Quale oggetto standard rappresenta una singola persona, di solito collegata a un Account?", "options": ["Contact", "Case", "Campaign", "Lead"], "correct": 0, "explanation": "Il Contact rappresenta l'individuo, tipicamente legato a un Account tramite relazione." },
  { "id": "c27", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Quale oggetto standard rappresenta un potenziale cliente non ancora qualificato?", "options": ["Opportunity", "Lead", "Account", "Case"], "correct": 1, "explanation": "Il Lead rappresenta un contatto grezzo, prima di essere qualificato e convertito in Account/Contact/Opportunity." },
  { "id": "c28", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Quale oggetto standard rappresenta una trattativa di vendita attiva, vinta o persa?", "options": ["Opportunity", "Campaign", "Case", "Lead"], "correct": 0, "explanation": "L'Opportunity segue una trattativa lungo la pipeline, fino alla chiusura (vinta o persa)." },
  { "id": "c29", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Quale oggetto standard usi per tracciare una richiesta di assistenza di un cliente?", "options": ["Case", "Lead", "Campaign", "Account"], "correct": 0, "explanation": "Il Case è l'oggetto centrale di Service Cloud per gestire ticket e richieste di supporto." },
  { "id": "c30", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "In una relazione di tipo Lookup tra due oggetti, cosa succede se elimini il record \"genitore\"?", "options": ["Anche tutti i record \"figlio\" collegati vengono eliminati automaticamente", "I record \"figlio\" restano, ma perdono il collegamento (il campo lookup si svuota)", "Non è possibile eliminare un record genitore in una relazione Lookup", "I record figlio vengono spostati automaticamente su un altro genitore"], "correct": 1, "explanation": "La relazione Lookup è più \"debole\": collega due record senza legare il loro ciclo di vita." },
  { "id": "c31", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Che cosa caratterizza una relazione Master-Detail rispetto a una Lookup?", "options": ["È identica alla Lookup, cambia solo il nome", "Il record \"dettaglio\" eredita sicurezza e proprietario dal \"master\", e viene eliminato se il master viene eliminato", "Permette di collegare al massimo due record tra loro", "Si può usare solo tra oggetti personalizzati, mai con oggetti standard"], "correct": 1, "explanation": "Nella Master-Detail il dettaglio dipende strettamente dal master: eliminando il master, si eliminano anche i dettagli." },
  { "id": "c32", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Come si crea in Salesforce una relazione \"molti a molti\" tra due oggetti (es. Studenti e Corsi)?", "options": ["Non è possibile, Salesforce supporta solo relazioni uno a molti", "Con un oggetto \"di giunzione\" (junction object) collegato a entrambi tramite due relazioni", "Aggiungendo un campo di testo che elenca gli ID collegati", "Duplicando l'oggetto principale per ogni relazione"], "correct": 1, "explanation": "L'oggetto di giunzione, con due relazioni (Master-Detail o Lookup), è il modo standard per modellare il molti-a-molti." },
  { "id": "c33", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Che cosa definiscono le \"Organization-Wide Defaults\" (OWD)?", "options": ["Il layout di pagina predefinito per i nuovi utenti", "Il livello di accesso di base ai record di un oggetto, prima di applicare regole di condivisione", "La lingua predefinita dell'org", "I campi obbligatori per ogni oggetto"], "correct": 1, "explanation": "Le OWD stabiliscono il livello minimo di visibilità sui record: le regole di condivisione possono solo allargarlo, mai restringerlo." },
  { "id": "c34", "badge": "generale", "section": 3, "sectionTitle": "Modello dati", "question": "Che cosa determina il Profile assegnato a un utente?", "options": ["Solo il suo fuso orario e la lingua", "Gli oggetti, i campi e i permessi di base a cui quell'utente può accedere", "Solo il tema grafico dell'interfaccia", "Solo quali report può vedere nella Home"], "correct": 1, "explanation": "Il Profile definisce l'accesso di base (oggetti, campi, permessi di sistema); ogni utente ne ha esattamente uno." },
  { "id": "c35", "badge": "generale", "section": 4, "sectionTitle": "Report e Dashboard", "question": "Quale formato di report mostra semplicemente un elenco di record con un totale, senza raggruppamenti?", "options": ["Report tabellare", "Report di riepilogo", "Report a matrice", "Report unito (joined)"], "correct": 0, "explanation": "Il report tabellare è il formato più semplice: righe di dati con un totale, senza raggruppamenti." },
  { "id": "c36", "badge": "generale", "section": 4, "sectionTitle": "Report e Dashboard", "question": "Quale formato di report raggruppa le righe (es. per Proprietario) mostrando subtotali per ogni gruppo?", "options": ["Report tabellare", "Report di riepilogo", "Report a matrice", "Report unito (joined)"], "correct": 1, "explanation": "Il report di riepilogo (summary) aggiunge uno o più livelli di raggruppamento con subtotali." },
  { "id": "c37", "badge": "generale", "section": 4, "sectionTitle": "Report e Dashboard", "question": "Quale formato di report raggruppa i dati sia per righe sia per colonne, creando una griglia di confronto?", "options": ["Report tabellare", "Report di riepilogo", "Report a matrice", "Report a elenco"], "correct": 2, "explanation": "Il report a matrice raggruppa contemporaneamente su righe e colonne, utile per confronti incrociati." },
  { "id": "c38", "badge": "generale", "section": 4, "sectionTitle": "Report e Dashboard", "question": "A cosa servono i \"Bucket Fields\" in un report?", "options": ["A criptare i dati sensibili nel report", "A raggruppare valori in categorie personalizzate senza creare un campo formula", "A programmare l'invio automatico del report", "A limitare il numero di righe visualizzate"], "correct": 1, "explanation": "I campi bucket permettono di raggruppare al volo valori diversi in categorie personalizzate, solo nel report." },
  { "id": "c39", "badge": "generale", "section": 4, "sectionTitle": "Report e Dashboard", "question": "Che cos'è una Dashboard?", "options": ["Un elenco filtrato di record", "Una rappresentazione visiva (grafici, indicatori) basata su uno o più report", "Un tipo speciale di oggetto personalizzato", "Un modulo Trailhead sulla reportistica"], "correct": 1, "explanation": "La Dashboard traduce uno o più report in componenti visivi come grafici, misuratori e tabelle." },
  { "id": "c40", "badge": "generale", "section": 4, "sectionTitle": "Report e Dashboard", "question": "A cosa serve una \"sottoscrizione\" (subscription) a una dashboard?", "options": ["A pagare per sbloccare dashboard premium", "A ricevere automaticamente via email un aggiornamento della dashboard secondo una pianificazione", "A condividere la dashboard con un solo clic su AppExchange", "A convertire la dashboard in un report tabellare"], "correct": 1, "explanation": "La sottoscrizione invia automaticamente uno snapshot aggiornato della dashboard via email, secondo la frequenza scelta." },
  { "id": "c41", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cos'è Salesforce, secondo il modulo \"Alla scoperta di Agentforce 360\"?", "options": ["Una soluzione che crea un ID cliente universale in diversi sistemi", "L'unica piattaforma integrata che combina i dati con l'IA per generare azioni autonome in tutti i processi del CRM e in tutti i punti di contatto con i clienti", "Un'app singola che serve a raccogliere e coltivare i lead", "Uno strumento di collaborazione per unire i team"], "correct": 1, "explanation": "Salesforce si descrive come l'unica piattaforma che unisce dati e IA per generare azioni autonome in tutto il CRM, non un singolo strumento isolato." },
  { "id": "c42", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Quali strumenti aziendali combina Agentforce 360 per migliorare l'esperienza dei clienti?", "options": ["App CRM, intelligenza artificiale affidabile e dati unificati", "Tecnologia IA disponibile per tutti e più sistemi CRM", "Un data lake e un CRM basato sui dati", "Una vista unificata dei dati dei clienti"], "correct": 0, "explanation": "Agentforce 360 riunisce tre livelli: le app CRM (Customer 360), i dati unificati (Data 360) e l'IA agentica affidabile (Agentforce 360 Platform)." },
  { "id": "c43", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Qual è l'obiettivo principale di Agentforce 360 per le aziende?", "options": ["Fornire una piattaforma unificata per le campagne di marketing", "Unificare tutte le app e le funzioni aziendali", "Automatizzare le richieste di routine dei dipendenti", "Migliorare la collaborazione e la comunicazione all'interno dei team"], "correct": 1, "explanation": "Agentforce 360 unifica tutte le app e le funzioni aziendali, così clienti, dipendenti, funzioni operative e agenti lavorano insieme verso lo stesso obiettivo." },
  { "id": "c44", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "In che modo Agentforce Service migliora l'assistenza clienti?", "options": ["Offre consigli personalizzati sui prodotti", "Consente la collaborazione tra esseri umani e agenti dal primo contatto alla risoluzione definitiva", "Automatizza i complessi processi della supply chain", "Fornisce uno spazio di lavoro conversazionale per i dipendenti"], "correct": 1, "explanation": "Agentforce Service è una piattaforma in cui esseri umani e agenti collaborano dal primo contatto alla risoluzione definitiva, con supporto proattivo 24/7." },
  { "id": "c45", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cosa caratterizza Agentforce HR Service nella gestione delle richieste dei dipendenti?", "options": ["Sostituisce interamente il team delle risorse umane", "Automatizza le richieste di routine e risolve il 96% dei casi in autonomia grazie al self-service basato su IA", "Si occupa solo dell'inserimento di nuovi dipendenti in Workday", "È una funzionalità disponibile solo dentro Slack"], "correct": 1, "explanation": "Agentforce HR Service automatizza le richieste di routine e, grazie al self-service basato sull'IA, risolve il 96% dei casi autonomamente, lasciando ai team HR le richieste più complesse." },
  { "id": "c46", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Grazie a quale tecnologia Agentforce può agire anche su sistemi esterni a Salesforce (es. SAP, Snowflake, Workday)?", "options": ["MuleSoft", "Data Cloud", "Tableau", "Heroku"], "correct": 0, "explanation": "Le integrazioni MuleSoft forniscono un'API unificata e un livello di integrazione che permette ad Agentforce di agire su sistemi e flussi di lavoro esterni a Salesforce." },
  { "id": "c47", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Qual è la funzione principale di Agentforce 360 Platform?", "options": ["Fornire comunicazioni multicanale per le campagne di marketing", "Costituire le fondamenta per la distribuzione e la gestione di agenti IA su larga scala", "Automatizzare le richieste di assistenza dei clienti", "Offrire consigli personalizzati sui prodotti"], "correct": 1, "explanation": "Agentforce 360 Platform è la piattaforma agentica che costituisce le fondamenta per creare, distribuire e gestire agenti IA di livello enterprise su larga scala." },
  { "id": "c48", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Qual è lo scopo principale di Script agente?", "options": ["Definire il comportamento degli agenti utilizzando linguaggio naturale, rendendo le istruzioni deterministiche", "Fornire un'area di lavoro creativa ai trailblazer", "Integrare Agentforce con i sistemi di più di 100 partner", "Programmare la manutenzione e inviare i tecnici in modo proattivo"], "correct": 0, "explanation": "Script agente è un livello di scripting che definisce il comportamento degli agenti in linguaggio naturale, rendendo strumenti e istruzioni deterministici quando la precisione è fondamentale (es. settori regolamentati)." },
  { "id": "c49", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "A cosa serve il motore di ragionamento Atlas nell'architettura di Agentforce 360 Platform?", "options": ["A coordinare processi aziendali complessi e articolati in più fasi", "A convertire PDF e diagrammi in dati strutturati", "A gestire il canale vocale dell'assistenza clienti", "A creare app tramite linguaggio naturale"], "correct": 0, "explanation": "Il motore di ragionamento Atlas aiuta a coordinare processi aziendali complessi e articolati in più fasi, controllando come gli agenti pensano e agiscono." },
  { "id": "c50", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Quali protocolli aperti supporta Agentforce per connettersi con modelli e sistemi già in uso in azienda?", "options": ["MCP (Model Context Protocol) e A2A (Agent-to-Agent)", "REST e SOAP", "OAuth e SAML", "GraphQL e gRPC"], "correct": 0, "explanation": "Agentforce supporta i protocolli aperti MCP e A2A, così le aziende possono connettersi con i modelli e i sistemi che già usano, senza vincoli chiusi (\"nessuna chiusura, nessun recinto\")." },
  { "id": "c51", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Quali tipi di dati vengono unificati da Data 360?", "options": ["Solo i dati strutturati", "Solo i dati non strutturati", "Sia i dati strutturati che quelli non strutturati", "Solo i dati dei clienti"], "correct": 2, "explanation": "Data 360 unifica i dati aziendali, i dati dei clienti e anche i dati non strutturati come PDF, messaggi Slack e conversazioni di Teams, creando una visione unica di ogni cliente e operazione." },
  { "id": "c52", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Come si chiama il processo che assicura che ogni agente agisca con precisione e affidabilità, radicando la risposta del modello nel contesto di metadati e semantica?", "options": ["Data augmentation", "Generazione aumentata di recupero (RAG, Retrieval-Augmented Generation)", "Modellazione predittiva", "Armonizzazione dei dati"], "correct": 1, "explanation": "La RAG (Retrieval-Augmented Generation) recupera dati affidabili e radica le risposte del modello nel contesto di metadati e semantica, assicurando precisione e affidabilità." },
  { "id": "c53", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cosa consente l'architettura \"a copia zero\" (zero-copy) di Data 360?", "options": ["Di unificare dati da sistemi come SAP, Workday, Snowflake e AWS senza doverli spostare", "Di duplicare i dati su più data center per ridondanza", "Di eliminare automaticamente i dati duplicati", "Di criptare i dati durante il trasferimento"], "correct": 0, "explanation": "Grazie all'approccio a copia zero, Data 360 unifica i dati di Salesforce con sistemi esterni come SAP, Workday, Snowflake e AWS senza doverli spostare." },
  { "id": "c54", "badge": "agentforce-360-base", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Secondo il modello descritto per Data 360, cosa forniscono rispettivamente dati, metadati e semantica?", "options": ["I dati forniscono i fatti, i metadati la struttura, la semantica il significato/la logica di business", "I dati forniscono la sicurezza, i metadati la velocità, la semantica la scalabilità", "I dati forniscono la governance, i metadati la privacy, la semantica la conformità", "I dati forniscono il contesto, i metadati il significato, la semantica i fatti"], "correct": 0, "explanation": "I dati grezzi ci dicono cosa è successo (i fatti), i metadati forniscono la struttura, e la semantica aggiunge il significato o la logica di business — insieme permettono all'IA di passare dall'ipotesi alla certezza." },
  { "id": "c55", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "In che modo le aspettative dei clienti sono cambiate negli ultimi anni?", "options": ["Sono diminuite, perché i clienti chiedono meno personalizzazione", "Sono aumentate drasticamente", "Sono rimaste invariate rispetto al passato", "Si sono spostate esclusivamente sui canali social"], "correct": 1, "explanation": "Le aspettative dei clienti sono aumentate drasticamente negli ultimi anni e i prodotti Salesforce consentono di creare la migliore esperienza possibile per loro." },
  { "id": "c56", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Vero o falso: la fiducia è il valore numero uno di Salesforce.", "options": ["Vero", "Falso"], "correct": 0, "explanation": "Fiducia è il valore numero uno di Salesforce: \"Niente è più importante della fiducia dei nostri clienti e di tutti gli stakeholder.\"" },
  { "id": "c57", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Quali sono i cinque valori fondamentali di Salesforce?", "options": ["Fiducia, Customer Success, Innovazione, Uguaglianza, Sostenibilità", "Fiducia, Velocità, Innovazione, Semplicità, Sostenibilità", "Customer Success, Qualità, Sicurezza, Uguaglianza, Crescita", "Innovazione, Trasparenza, Sostenibilità, Velocità, Fiducia"], "correct": 0, "explanation": "I cinque valori fondamentali di Salesforce sono Fiducia, Customer Success, Innovazione, Uguaglianza e Sostenibilità." },
  { "id": "c58", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cosa rappresenta il valore \"Customer Success\" per Salesforce?", "options": ["La certezza che il successo di Salesforce dipende dal successo dei propri clienti", "Un programma di sconti per i clienti più fedeli", "Un reparto dedicato esclusivamente al supporto tecnico", "Un premio annuale assegnato ai migliori partner"], "correct": 0, "explanation": "\"Sappiamo che abbiamo successo quando i nostri clienti hanno successo, quindi fin dal primo giorno abbiamo creato un'azienda basata sul customer success.\"" },
  { "id": "c59", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "Che cosa prevede il modello \"1-1-1\" di Salesforce?", "options": ["1% del tempo dei dipendenti, 1% del capitale e 1% del prodotto a favore di organizzazioni no-profit", "1 ora di volontariato, 1 dollaro donato e 1 prodotto gratuito per ogni nuovo cliente", "1% di sconto per ogni anno di fedeltà del cliente", "1 dipendente, 1 partner e 1 cliente coinvolti in ogni progetto no-profit"], "correct": 0, "explanation": "Con il modello 1-1-1, Salesforce impegna l'1% del tempo dei propri dipendenti, l'1% del proprio capitale e l'1% del proprio prodotto a favore di organizzazioni no-profit." },
  { "id": "c60", "badge": "valori-salesforce", "section": 1, "sectionTitle": "Ecosistema Salesforce", "question": "In che modo Salesforce dimostra concretamente il valore \"Innovazione\"?", "options": ["Integrando tre volte l'anno le innovazioni più recenti nei propri prodotti", "Rilasciando un solo grande aggiornamento ogni cinque anni", "Acquisendo una startup diversa ogni mese", "Affidando l'innovazione esclusivamente ai partner esterni"], "correct": 0, "explanation": "Salesforce integra tre volte l'anno nei propri prodotti le innovazioni più recenti, per permettere ai clienti di restare all'avanguardia nei rispettivi settori." }
];

// Glossario dei termini incontrati nel percorso di certificazione (Salesforce + Agentforce/IA).
const CAREER_GLOSSARY = [
  { "id": "g1", "category": "Ecosistema & community", "term": "CRM", "definition": "Customer Relationship Management: l'approccio (e il tipo di software) per gestire in un unico posto tutte le informazioni e le interazioni con i clienti. È il concetto alla base di Salesforce." },
  { "id": "g2", "category": "Ecosistema & community", "term": "Trailhead", "definition": "La piattaforma di apprendimento online gratuita di Salesforce, con moduli, progetti, trailmix e badge." },
  { "id": "g3", "category": "Ecosistema & community", "term": "Trailmix", "definition": "Un percorso di apprendimento personalizzato su Trailhead, creato combinando moduli, progetti e altri contenuti a propria scelta." },
  { "id": "g4", "category": "Ecosistema & community", "term": "Superbadge", "definition": "Una sfida pratica su Trailhead con scenari realistici, senza istruzioni passo-passo, che testa le competenze acquisite." },
  { "id": "g5", "category": "Ecosistema & community", "term": "Trailhead Playground", "definition": "Un'org Salesforce gratuita e separata, pensata per esercitarsi senza toccare dati reali." },
  { "id": "g6", "category": "Ecosistema & community", "term": "AppExchange", "definition": "Il marketplace online di app e componenti creati da Salesforce e dai suoi partner, per estendere le funzionalità di un'org." },
  { "id": "g7", "category": "Ecosistema & community", "term": "Multi-tenant", "definition": "Architettura in cui più clienti condividono la stessa infrastruttura Salesforce, ma con dati completamente isolati e sicuri gli uni dagli altri." },
  { "id": "g8", "category": "Ecosistema & community", "term": "Ohana", "definition": "Parola hawaiana per \"famiglia\", usata da Salesforce per descrivere dipendenti, clienti, partner e community come un'unica famiglia." },
  { "id": "g9", "category": "Ecosistema & community", "term": "Trailblazer", "definition": "Il termine con cui Salesforce chiama chiunque impari e usi le proprie competenze Salesforce per far crescere la carriera." },
  { "id": "g10", "category": "Ecosistema & community", "term": "Trailblazer Community", "definition": "La community online ufficiale dove i Trailblazer si connettono, fanno domande e condividono conoscenza." },
  { "id": "g11", "category": "Ecosistema & community", "term": "Sales Cloud", "definition": "Il prodotto Salesforce pensato per i team vendite: gestisce lead, opportunità e pipeline." },
  { "id": "g12", "category": "Ecosistema & community", "term": "Service Cloud", "definition": "Il prodotto Salesforce pensato per i team di assistenza clienti, con al centro l'oggetto Case." },
  { "id": "g13", "category": "Agentforce & IA", "term": "Agentforce 360", "definition": "La piattaforma che unisce app CRM, dati unificati (Data 360) e IA agentica affidabile (Agentforce 360 Platform) per generare azioni autonome in tutto il CRM." },
  { "id": "g14", "category": "Agentforce & IA", "term": "Data 360", "definition": "La nuova generazione di Data Cloud: unifica dati strutturati e non strutturati (anche PDF, chat, conversazioni) con un'architettura a copia zero, per dare contesto affidabile agli agenti IA." },
  { "id": "g15", "category": "Agentforce & IA", "term": "Agentforce 360 Platform", "definition": "La piattaforma agentica che costituisce le fondamenta per creare, distribuire e gestire agenti IA di livello enterprise su larga scala." },
  { "id": "g16", "category": "Agentforce & IA", "term": "Agentforce Service", "definition": "Piattaforma in cui esseri umani e agenti IA collaborano dal primo contatto alla risoluzione definitiva, con supporto proattivo 24/7." },
  { "id": "g17", "category": "Agentforce & IA", "term": "Agentforce HR Service", "definition": "Soluzione che automatizza le richieste di routine dei dipendenti, risolvendo circa il 96% dei casi in autonomia grazie al self-service basato su IA." },
  { "id": "g18", "category": "Agentforce & IA", "term": "MuleSoft", "definition": "Tecnologia di integrazione che fornisce un'API unificata, permettendo ad Agentforce di agire anche su sistemi esterni a Salesforce come SAP, Snowflake e Workday." },
  { "id": "g19", "category": "Agentforce & IA", "term": "RAG (Retrieval-Augmented Generation)", "definition": "Processo che recupera dati affidabili e li usa come contesto (metadati e semantica) per radicare le risposte di un modello IA, assicurando precisione e affidabilità." },
  { "id": "g20", "category": "Agentforce & IA", "term": "Copia zero (zero-copy)", "definition": "Architettura che unifica dati provenienti da più sistemi (es. SAP, Workday, Snowflake, AWS) senza doverli spostare o duplicare." },
  { "id": "g21", "category": "Agentforce & IA", "term": "Atlas", "definition": "Il motore di ragionamento nell'architettura di Agentforce 360 Platform: coordina processi aziendali complessi e articolati in più fasi, controllando come gli agenti pensano e agiscono." },
  { "id": "g22", "category": "Agentforce & IA", "term": "Script agente", "definition": "Livello di scripting che definisce il comportamento degli agenti usando linguaggio naturale, rendendo strumenti e istruzioni deterministici dove la precisione è fondamentale." },
  { "id": "g23", "category": "Agentforce & IA", "term": "MCP (Model Context Protocol)", "definition": "Protocollo aperto che permette ad Agentforce di connettersi con modelli IA già in uso in azienda, senza vincoli chiusi." },
  { "id": "g24", "category": "Agentforce & IA", "term": "A2A (Agent-to-Agent)", "definition": "Protocollo aperto che permette la comunicazione e la collaborazione tra agenti IA diversi." },
  { "id": "g25", "category": "Agentforce & IA", "term": "LLM (Large Language Model)", "definition": "Modello di intelligenza artificiale addestrato su enormi quantità di testo per comprendere e generare linguaggio naturale; è il \"motore\" che ragiona dietro agenti come quelli di Agentforce. Termine generale di IA, non specifico di Salesforce." },
  { "id": "g26", "category": "Agentforce & IA", "term": "GPT (Generative Pre-trained Transformer)", "definition": "Una famiglia di LLM basati sull'architettura Transformer, tra gli esempi più noti di modello linguistico di grandi dimensioni. Termine generale di IA, non specifico di Salesforce." },
  { "id": "g27", "category": "Navigazione", "term": "App Launcher", "definition": "L'icona a griglia di puntini che permette di passare rapidamente da un'app Salesforce all'altra (es. da Vendite ad Assistenza)." },
  { "id": "g28", "category": "Navigazione", "term": "Setup", "definition": "Il pannello di amministrazione centrale dell'org (icona a ingranaggio in alto a destra), dove si gestiscono utenti, sicurezza, oggetti e altre impostazioni globali." },
  { "id": "g29", "category": "Navigazione", "term": "Object Manager", "definition": "La sezione dentro Setup dove si configurano gli oggetti (standard e personalizzati), i loro campi e i layout di pagina." },
  { "id": "g30", "category": "Navigazione", "term": "List View (vista elenco)", "definition": "Un elenco filtrato e ordinabile di record di un oggetto, con solo i campi (colonne) scelti." },
  { "id": "g31", "category": "Navigazione", "term": "Vista Kanban", "definition": "Visualizzazione che organizza i record in colonne trascinabili in base a un campo di selezione, ad esempio la fase di un'opportunità." },
  { "id": "g32", "category": "Navigazione", "term": "Recently Viewed (Visualizzati di recente)", "definition": "Scorciatoia automatica verso gli ultimi record che hai aperto tu, senza doverli cercare di nuovo." },
  { "id": "g33", "category": "Navigazione", "term": "Pannello riepilogativo (highlights panel)", "definition": "L'area in cima a un record che mostra i campi e le azioni più importanti per quel record." },
  { "id": "g34", "category": "Navigazione", "term": "Related list (elenco correlato)", "definition": "Sezione nella pagina di un record che mostra i record collegati ad esso, ad esempio i Contatti di un Account." },
  { "id": "g35", "category": "Navigazione", "term": "Impostazioni personali", "definition": "Dove modifichi le tue informazioni personali (lingua, fuso orario) senza toccare le impostazioni dell'intera org, accessibili dal tuo avatar." },
  { "id": "g36", "category": "Modello dati", "term": "Account", "definition": "Oggetto standard che rappresenta un'azienda o organizzazione con cui è in corso una relazione commerciale." },
  { "id": "g37", "category": "Modello dati", "term": "Contact", "definition": "Oggetto standard che rappresenta una singola persona, di solito collegata a un Account." },
  { "id": "g38", "category": "Modello dati", "term": "Lead", "definition": "Oggetto standard che rappresenta un potenziale cliente non ancora qualificato." },
  { "id": "g39", "category": "Modello dati", "term": "Opportunity", "definition": "Oggetto standard che rappresenta una trattativa di vendita attiva, vinta o persa." },
  { "id": "g40", "category": "Modello dati", "term": "Case", "definition": "Oggetto standard che rappresenta una richiesta di assistenza di un cliente." },
  { "id": "g41", "category": "Modello dati", "term": "Relazione Lookup", "definition": "Relazione \"debole\" tra due oggetti: se il record genitore viene eliminato, il record figlio resta ma perde il collegamento (il campo lookup si svuota)." },
  { "id": "g42", "category": "Modello dati", "term": "Relazione Master-Detail", "definition": "Relazione \"forte\": il record dettaglio eredita sicurezza e proprietario dal master, e viene eliminato se il master viene eliminato." },
  { "id": "g43", "category": "Modello dati", "term": "Junction object (oggetto di giunzione)", "definition": "Oggetto usato per creare una relazione \"molti a molti\" tra due oggetti, collegato a entrambi tramite due relazioni." },
  { "id": "g44", "category": "Modello dati", "term": "OWD (Organization-Wide Defaults)", "definition": "Il livello di accesso di base ai record di un oggetto, prima di applicare le regole di condivisione (che possono solo allargarlo, mai restringerlo)." },
  { "id": "g45", "category": "Modello dati", "term": "Profile", "definition": "Definisce gli oggetti, i campi e i permessi di base a cui un utente può accedere; ogni utente ne ha esattamente uno." },
  { "id": "g46", "category": "Report e Dashboard", "term": "Report tabellare", "definition": "Formato di report più semplice: un elenco di record con un totale, senza raggruppamenti." },
  { "id": "g47", "category": "Report e Dashboard", "term": "Report di riepilogo (summary)", "definition": "Formato di report che raggruppa le righe (es. per Proprietario) mostrando subtotali per ogni gruppo." },
  { "id": "g48", "category": "Report e Dashboard", "term": "Report a matrice", "definition": "Formato di report che raggruppa i dati sia per righe sia per colonne, creando una griglia di confronto." },
  { "id": "g49", "category": "Report e Dashboard", "term": "Bucket Field", "definition": "Campo che permette di raggruppare al volo valori diversi in categorie personalizzate, solo all'interno di un report, senza creare un campo formula." },
  { "id": "g50", "category": "Report e Dashboard", "term": "Dashboard", "definition": "Rappresentazione visiva (grafici, indicatori) basata su uno o più report." },
  { "id": "g51", "category": "Report e Dashboard", "term": "Subscription (sottoscrizione)", "definition": "Invia automaticamente via email un aggiornamento di una dashboard, secondo una pianificazione scelta." },
  { "id": "g52", "category": "Prodotti e Cloud Salesforce", "term": "Customer 360", "definition": "La visione unificata del cliente attraverso tutte le app Salesforce (vendite, assistenza, marketing, commercio): il livello \"app CRM\" alla base di Agentforce 360." },
  { "id": "g53", "category": "Prodotti e Cloud Salesforce", "term": "Marketing Cloud", "definition": "Prodotto Salesforce per gestire campagne di marketing multicanale: email, SMS, social, pubblicità e percorsi cliente automatizzati." },
  { "id": "g54", "category": "Prodotti e Cloud Salesforce", "term": "Commerce Cloud", "definition": "Prodotto Salesforce per creare e gestire negozi online, sia B2B (tra aziende) sia B2C (verso i consumatori)." },
  { "id": "g55", "category": "Prodotti e Cloud Salesforce", "term": "Experience Cloud", "definition": "Prodotto per creare siti, portali e community esterne (per clienti, partner o dipendenti) collegati ai dati Salesforce." },
  { "id": "g56", "category": "Prodotti e Cloud Salesforce", "term": "Slack", "definition": "Piattaforma di messaggistica e collaborazione aziendale, acquisita da Salesforce e integrata come spazio di lavoro per team e agenti IA." },
  { "id": "g57", "category": "Prodotti e Cloud Salesforce", "term": "Tableau", "definition": "Prodotto Salesforce per l'analisi dei dati e la visualizzazione avanzata: dashboard e business intelligence oltre i report standard del CRM." },
  { "id": "g58", "category": "Prodotti e Cloud Salesforce", "term": "Heroku", "definition": "Piattaforma cloud di Salesforce per sviluppare, distribuire e gestire applicazioni personalizzate al di fuori del CRM tradizionale." },
  { "id": "g59", "category": "Prodotti e Cloud Salesforce", "term": "Einstein", "definition": "Il marchio storico per le funzionalità di intelligenza artificiale integrate nei prodotti Salesforce, oggi in gran parte confluito nell'offerta Agentforce." },
  { "id": "g60", "category": "Prodotti e Cloud Salesforce", "term": "Apex", "definition": "Il linguaggio di programmazione proprietario di Salesforce, simile a Java, usato per personalizzare la logica lato server (uso avanzato/sviluppo, non richiesto all'esame Associate)." },
  { "id": "g61", "category": "Prodotti e Cloud Salesforce", "term": "Flow", "definition": "Lo strumento di automazione a basso/nessun codice di Salesforce, per creare processi automatizzati senza scrivere codice Apex." },
  { "id": "g62", "category": "Prodotti e Cloud Salesforce", "term": "Lightning Platform", "definition": "La piattaforma tecnologica di base su cui sono costruite le app Salesforce (in passato nota come Force.com)." },
  { "id": "g63", "category": "Prodotti e Cloud Salesforce", "term": "Lightning Web Components (LWC)", "definition": "Il framework moderno per costruire interfacce utente personalizzate dentro Salesforce (uso avanzato/sviluppo, non richiesto all'esame Associate)." },
  { "id": "g64", "category": "Prodotti e Cloud Salesforce", "term": "Financial Services Cloud", "definition": "Versione di Salesforce specializzata per banche, assicurazioni e servizi finanziari." },
  { "id": "g65", "category": "Prodotti e Cloud Salesforce", "term": "Health Cloud", "definition": "Versione di Salesforce specializzata per il settore sanitario e la gestione dei pazienti." },
  { "id": "g66", "category": "Prodotti e Cloud Salesforce", "term": "Nonprofit Cloud", "definition": "Versione di Salesforce pensata per organizzazioni no-profit, per gestire donatori, programmi e raccolta fondi." },
  { "id": "g67", "category": "Prodotti e Cloud Salesforce", "term": "Field Service", "definition": "Modulo di Service Cloud per pianificare e gestire tecnici e interventi di assistenza sul campo." },
  { "id": "g68", "category": "Ecosistema & community", "term": "I 5 valori fondamentali di Salesforce", "definition": "Fiducia (il valore numero uno), Customer Success, Innovazione, Uguaglianza e Sostenibilità: i principi che guidano tutte le azioni di Salesforce." },
  { "id": "g69", "category": "Ecosistema & community", "term": "Modello 1-1-1", "definition": "L'impegno filantropico di Salesforce: destinare l'1% del tempo dei dipendenti, l'1% del capitale e l'1% del prodotto a favore di organizzazioni no-profit." }
];
