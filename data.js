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
