// Stato persistente in localStorage
const LS_KEYS = {
  readingChapter: "ia_reading_chapter",
  readingStats: "ia_reading_stats",
  hiraganaStats: "ia_hiragana_stats",
  wikiStats: "ia_wiki_stats",
  customWiki: "ia_custom_wiki",
  careerSectionsDone: "ia_career_sections_done",
  careerStats: "ia_career_stats",
};

function loadJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch (e) {
    return fallback;
  }
}
function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let readingChapter = loadJSON(LS_KEYS.readingChapter, 0);
let readingStats = loadJSON(LS_KEYS.readingStats, {});
let hiraganaStats = loadJSON(LS_KEYS.hiraganaStats, {});
let wikiStats = loadJSON(LS_KEYS.wikiStats, {});
let customWiki = loadJSON(LS_KEYS.customWiki, []);
let careerSectionsDone = loadJSON(LS_KEYS.careerSectionsDone, []);
let careerStats = loadJSON(LS_KEYS.careerStats, {});

function fullWiki() {
  return WIKI.concat(customWiki);
}

// ---------- Tab navigation ----------
document.querySelectorAll("nav.tabs button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("nav.tabs button").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.view).classList.add("active");
  });
});

// ---------- Dataset generico: hiragana | wiki | reading ----------
function statsFor(dataset) {
  if (dataset === "hiragana") return hiraganaStats;
  if (dataset === "wiki") return wikiStats;
  if (dataset === "career") return careerStats;
  return readingStats;
}
function statsKeyFor(dataset) {
  if (dataset === "hiragana") return LS_KEYS.hiraganaStats;
  if (dataset === "wiki") return LS_KEYS.wikiStats;
  if (dataset === "career") return LS_KEYS.careerStats;
  return LS_KEYS.readingStats;
}
function itemsFor(dataset) {
  if (dataset === "hiragana") return HIRAGANA;
  if (dataset === "wiki") return fullWiki();
  if (dataset === "career") return CAREER_QUIZ;
  return BOOK_QUIZ.filter((q) => q.chapter <= readingChapter);
}
function itemKey(dataset, item) {
  if (dataset === "hiragana") return item.char;
  return item.id;
}
function itemFront(dataset, item) {
  if (dataset === "hiragana") return item.char;
  if (dataset === "wiki") return item.termine;
  return item.question;
}
function itemAnswer(dataset, item) {
  if (dataset === "hiragana") return item.romaji;
  if (dataset === "wiki") return item.lettura;
  return item.options[item.correct];
}
function itemExtra(dataset, item) {
  if (dataset === "hiragana") return "";
  if (dataset === "wiki") return item.significato;
  return item.explanation;
}
function itemMeta(dataset, item) {
  if (dataset === "reading") return `Capitolo ${item.chapter} — ${item.chapterTitle}`;
  if (dataset === "career") {
    const s = CAREER_SECTIONS.find((sec) => sec.id === item.section);
    return `Sezione ${item.section} — ${item.sectionTitle}${s ? ` (${s.weight}% dell'esame)` : ""}`;
  }
  return "";
}

function recordResult(dataset, item, correct) {
  const stats = statsFor(dataset);
  const key = itemKey(dataset, item);
  const s = stats[key] || { attempts: 0, correct: 0, lastWrong: false };
  s.attempts++;
  if (correct) s.correct++;
  s.lastWrong = !correct;
  stats[key] = s;
  saveJSON(statsKeyFor(dataset), stats);
}

function pickWeighted(dataset) {
  const items = itemsFor(dataset);
  const stats = statsFor(dataset);
  const weights = items.map((it) => {
    const s = stats[itemKey(dataset, it)];
    if (!s) return 3; // mai visto: priorità alta
    if (s.lastWrong) return 4; // sbagliato l'ultima volta: priorità massima
    const acc = s.correct / s.attempts;
    return acc < 0.5 ? 3 : 1;
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function buildOptions(dataset, item) {
  const correctAnswer = itemAnswer(dataset, item);
  if (dataset === "reading" || dataset === "career") {
    return { correctAnswer, options: shuffle(item.options.slice()) };
  }
  const items = itemsFor(dataset);
  const pool = items.filter((it) => itemKey(dataset, it) !== itemKey(dataset, item));
  const distractors = [];
  while (distractors.length < 3 && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    const candidate = itemAnswer(dataset, pool[idx]);
    pool.splice(idx, 1);
    if (!distractors.includes(candidate) && candidate !== correctAnswer) distractors.push(candidate);
  }
  return { correctAnswer, options: shuffle([correctAnswer, ...distractors]) };
}

let currentItem = null;

function emptyStateMessage(dataset) {
  if (dataset === "career") return "Nessuna domanda disponibile.";
  return "Imposta a che capitolo sei arrivato qui sopra per iniziare: le domande compaiono solo sui capitoli già letti, per non fare spoiler.";
}

function renderEmptyState(area, message) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<p class="muted">${message}</p>`;
  area.appendChild(card);
}

function renderFlashcard(dataset, area) {
  const items = itemsFor(dataset);
  if (items.length === 0) {
    renderEmptyState(area, emptyStateMessage(dataset));
    return;
  }
  currentItem = pickWeighted(dataset);
  const meta = itemMeta(dataset, currentItem);
  const textMode = dataset === "reading" || dataset === "career";
  const card = document.createElement("div");
  card.className = "card flashcard" + (textMode ? " text-front" : "");
  card.innerHTML = `
    ${meta ? `<div class="chapter-badge">${meta}</div>` : ""}
    <div class="front">${itemFront(dataset, currentItem)}</div>
    <div class="back" style="visibility:hidden">${itemAnswer(dataset, currentItem)}${itemExtra(dataset, currentItem) ? " — " + itemExtra(dataset, currentItem) : ""}</div>
    <div class="hint">Clicca per rivelare, poi valuta se lo sapevi</div>
  `;
  const back = card.querySelector(".back");
  card.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;
    back.style.visibility = "visible";
  });
  area.appendChild(card);

  const btnRow = document.createElement("div");
  btnRow.style.display = "flex";
  btnRow.style.gap = "10px";
  btnRow.style.justifyContent = "center";
  btnRow.innerHTML = `
    <button style="padding:10px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bad);color:#fff;cursor:pointer">Non lo sapevo</button>
    <button style="padding:10px 16px;border-radius:8px;border:1px solid var(--border);background:var(--ok);color:#fff;cursor:pointer">Lo sapevo</button>
  `;
  const [wrongBtn, okBtn] = btnRow.querySelectorAll("button");
  wrongBtn.addEventListener("click", () => { recordResult(dataset, currentItem, false); renderFlashcard(dataset, area); });
  okBtn.addEventListener("click", () => { recordResult(dataset, currentItem, true); renderFlashcard(dataset, area); });
  area.appendChild(btnRow);
}

function renderMultipleChoice(dataset, area) {
  const items = itemsFor(dataset);
  if (items.length === 0) {
    renderEmptyState(area, emptyStateMessage(dataset));
    return;
  }
  currentItem = pickWeighted(dataset);
  const meta = itemMeta(dataset, currentItem);
  const textMode = dataset === "reading" || dataset === "career";
  const { correctAnswer, options } = buildOptions(dataset, currentItem);

  const card = document.createElement("div");
  card.className = "card quiz-question";
  card.innerHTML = `
    ${meta ? `<div class="chapter-badge">${meta}</div>` : ""}
    <div class="${textMode ? "question-text" : "char"}">${itemFront(dataset, currentItem)}</div>
  `;
  const optWrap = document.createElement("div");
  optWrap.className = "quiz-options";
  options.forEach((opt) => {
    const b = document.createElement("button");
    b.textContent = opt;
    b.addEventListener("click", () => {
      const correct = opt === correctAnswer;
      recordResult(dataset, currentItem, correct);
      optWrap.querySelectorAll("button").forEach((ob) => {
        ob.disabled = true;
        if (ob.textContent === correctAnswer) ob.classList.add("correct");
        else if (ob === b) ob.classList.add("wrong");
      });
      const fb = document.createElement("div");
      fb.className = "feedback " + (correct ? "ok" : "bad");
      fb.textContent = correct
        ? (itemExtra(dataset, currentItem) ? "Corretto! " + itemExtra(dataset, currentItem) : "Corretto!")
        : `Sbagliato. Risposta: ${correctAnswer}${itemExtra(dataset, currentItem) ? " — " + itemExtra(dataset, currentItem) : ""}`;
      card.appendChild(fb);
      setTimeout(() => renderMultipleChoice(dataset, area), textMode ? 2200 : 900);
    });
    optWrap.appendChild(b);
  });
  card.appendChild(optWrap);
  area.appendChild(card);
}

function renderTypeQuiz(dataset, area) {
  const items = itemsFor(dataset);
  if (items.length === 0) {
    renderEmptyState(area, "Nessuna voce disponibile.");
    return;
  }
  currentItem = pickWeighted(dataset);
  const correctAnswer = itemAnswer(dataset, currentItem).toLowerCase().trim();
  const card = document.createElement("div");
  card.className = "card type-quiz";
  card.innerHTML = `
    <div class="char" style="font-size:56px;margin-bottom:16px">${itemFront(dataset, currentItem)}</div>
    <input type="text" placeholder="scrivi la risposta..." autocomplete="off">
    <button class="submit">Verifica</button>
    <div class="feedback"></div>
  `;
  const input = card.querySelector("input");
  const submit = card.querySelector(".submit");
  const feedback = card.querySelector(".feedback");
  function check() {
    const val = input.value.toLowerCase().trim();
    const correct = val === correctAnswer;
    recordResult(dataset, currentItem, correct);
    feedback.className = "feedback " + (correct ? "ok" : "bad");
    feedback.textContent = correct ? "Corretto!" : `Sbagliato. Risposta corretta: ${correctAnswer}`;
    input.disabled = true;
    submit.disabled = true;
    setTimeout(() => renderTypeQuiz(dataset, area), 1100);
  }
  submit.addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
  area.appendChild(card);
  input.focus();
}

function renderStats(dataset, area) {
  const items = itemsFor(dataset);
  const stats = statsFor(dataset);
  const card = document.createElement("div");
  card.className = "card";
  const label = dataset === "hiragana" ? "Hiragana" : dataset === "wiki" ? "Wiki" : dataset === "career" ? "Carriera" : "Lettura";
  let rows = items.map((it) => {
    const key = itemKey(dataset, it);
    const s = stats[key];
    const attempts = s ? s.attempts : 0;
    const correct = s ? s.correct : 0;
    const acc = attempts ? Math.round((correct / attempts) * 100) : null;
    return { front: itemFront(dataset, it), answer: itemAnswer(dataset, it), attempts, correct, acc };
  });
  rows.sort((a, b) => (a.acc === null ? -1 : a.acc) - (b.acc === null ? -1 : b.acc));
  const frontClass = dataset === "reading" || dataset === "career" ? "" : ' style="font-size:18px"';
  card.innerHTML = `
    <h2>Statistiche — ${label}</h2>
    <table class="stats-table">
      <tr><th></th><th>Risposta</th><th>Tentativi</th><th>% corrette</th></tr>
      ${rows.map((r) => `<tr><td${frontClass}>${r.front}</td><td>${r.answer}</td><td>${r.attempts}</td><td>${r.acc === null ? "—" : r.acc + "%"}</td></tr>`).join("")}
    </table>
  `;
  area.appendChild(card);
}

// ---------- Lettura: quiz sui capitoli del libro ----------
let readMode = "flashcard"; // "flashcard" | "mc" | "stats"

function renderReadingProgress() {
  const pct = Math.round((readingChapter / 32) * 100);
  document.getElementById("reading-progress-fill").style.width = pct + "%";
  const answered = Object.values(readingStats).reduce((sum, s) => sum + s.attempts, 0);
  const correct = Object.values(readingStats).reduce((sum, s) => sum + s.correct, 0);
  document.getElementById("reading-progress-label").textContent =
    `Capitolo ${readingChapter} / 32 (${pct}%)` +
    (answered ? ` — ${correct}/${answered} risposte corrette finora` : "");
  document.getElementById("reading-chapter-input").value = readingChapter;
}

document.getElementById("reading-chapter-input").addEventListener("change", (e) => {
  let v = parseInt(e.target.value, 10);
  if (isNaN(v)) v = 0;
  v = Math.max(0, Math.min(32, v));
  readingChapter = v;
  saveJSON(LS_KEYS.readingChapter, readingChapter);
  renderReadingProgress();
  renderReadMode();
});

document.querySelectorAll(".subnav button[data-readmode]").forEach((btn) => {
  btn.addEventListener("click", () => {
    readMode = btn.dataset.readmode;
    document.querySelectorAll(".subnav button[data-readmode]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderReadMode();
  });
});

function renderReadMode() {
  const area = document.getElementById("reading-quiz-area");
  area.innerHTML = "";
  if (readMode === "flashcard") renderFlashcard("reading", area);
  else if (readMode === "mc") renderMultipleChoice("reading", area);
  else if (readMode === "stats") renderStats("reading", area);
}

// ---------- Carriera: quiz di preparazione Salesforce Certified Associate ----------
let careerMode = "flashcard"; // "flashcard" | "mc" | "stats"

function renderCareerProgress() {
  const pct = Math.round((careerSectionsDone.length / CAREER_SECTIONS.length) * 100);
  document.getElementById("career-progress-fill").style.width = pct + "%";
  const answered = Object.values(careerStats).reduce((sum, s) => sum + s.attempts, 0);
  const correct = Object.values(careerStats).reduce((sum, s) => sum + s.correct, 0);
  document.getElementById("career-progress-label").textContent =
    `${careerSectionsDone.length} / ${CAREER_SECTIONS.length} sezioni studiate (${pct}%)` +
    (answered ? ` — ${correct}/${answered} risposte corrette finora` : "");

  const list = document.getElementById("career-sections-checklist");
  list.innerHTML = "";
  CAREER_SECTIONS.forEach((sec) => {
    const row = document.createElement("label");
    row.className = "week-row";
    row.style.cursor = "pointer";
    row.innerHTML = `
      <input type="checkbox" ${careerSectionsDone.includes(sec.id) ? "checked" : ""}>
      <span class="week-body"><strong>${sec.name}</strong> <span class="muted">(${sec.weight}% dell'esame)</span><br><span class="chapters">${sec.description}</span></span>
    `;
    const cb = row.querySelector("input");
    cb.addEventListener("change", () => {
      if (cb.checked) {
        if (!careerSectionsDone.includes(sec.id)) careerSectionsDone.push(sec.id);
      } else {
        careerSectionsDone = careerSectionsDone.filter((id) => id !== sec.id);
      }
      saveJSON(LS_KEYS.careerSectionsDone, careerSectionsDone);
      renderCareerProgress();
    });
    list.appendChild(row);
  });
}

document.querySelectorAll(".subnav button[data-careermode]").forEach((btn) => {
  btn.addEventListener("click", () => {
    careerMode = btn.dataset.careermode;
    document.querySelectorAll(".subnav button[data-careermode]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCareerMode();
  });
});

function renderCareerMode() {
  const area = document.getElementById("career-quiz-area");
  area.innerHTML = "";
  if (careerMode === "flashcard") renderFlashcard("career", area);
  else if (careerMode === "mc") renderMultipleChoice("career", area);
  else if (careerMode === "stats") renderStats("career", area);
}

// ---------- Giapponese: hiragana / wiki ----------
let currentDataset = "hiragana"; // "hiragana" | "wiki"
let jpMode = "flashcard"; // "flashcard" | "mc" | "type" | "stats"

function renderDatasetToggle() {
  document.querySelectorAll(".dataset-toggle button").forEach((b) => {
    b.classList.toggle("active", b.dataset.dataset === currentDataset);
  });
}

document.querySelectorAll(".dataset-toggle button").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentDataset = btn.dataset.dataset;
    renderDatasetToggle();
    renderJpMode();
  });
});

document.querySelectorAll(".subnav button[data-jpmode]").forEach((btn) => {
  btn.addEventListener("click", () => {
    jpMode = btn.dataset.jpmode;
    document.querySelectorAll(".subnav button[data-jpmode]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderJpMode();
  });
});

function renderJpMode() {
  const area = document.getElementById("jp-area");
  area.innerHTML = "";
  if (jpMode === "flashcard") renderFlashcard(currentDataset, area);
  else if (jpMode === "mc") renderMultipleChoice(currentDataset, area);
  else if (jpMode === "type") renderTypeQuiz(currentDataset, area);
  else if (jpMode === "stats") renderStats(currentDataset, area);
}

// ---------- Aggiunta manuale voci wiki ----------
document.getElementById("wiki-add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const termine = document.getElementById("wiki-add-termine").value.trim();
  const lettura = document.getElementById("wiki-add-lettura").value.trim();
  const significato = document.getElementById("wiki-add-significato").value.trim();
  const categoria = document.getElementById("wiki-add-categoria").value.trim() || "personalizzato";
  if (!termine || !lettura || !significato) return;
  customWiki.push({ id: "custom_" + Date.now(), categoria, termine, lettura, significato });
  saveJSON(LS_KEYS.customWiki, customWiki);
  e.target.reset();
  if (currentDataset === "wiki") renderJpMode();
});

function renderProgramReference() {
  const container = document.getElementById("program-reference");
  container.innerHTML = `
    <table class="stats-table">
      <tr><th>Settimana</th><th>Capitoli</th><th>Azione consigliata</th></tr>
      ${BOOK_PROGRAM.map((w) => `<tr><td>${w.week}</td><td>${w.chapters}</td><td>${w.action}</td></tr>`).join("")}
    </table>
  `;
}

// ---------- Init ----------
renderReadingProgress();
renderReadMode();
renderProgramReference();
renderCareerProgress();
renderCareerMode();
renderDatasetToggle();
renderJpMode();

// ---------- PWA: service worker (cache offline per l'uso da telefono) ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
