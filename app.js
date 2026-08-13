// Stato persistente in localStorage
const LS_KEYS = {
  readingChapter: "ia_reading_chapter",
  readingStats: "ia_reading_stats",
  hiraganaStats: "ia_hiragana_stats",
  wikiStats: "ia_wiki_stats",
  customWiki: "ia_custom_wiki",
  careerSectionsDone: "ia_career_sections_done",
  careerStats: "ia_career_stats",
  fiscalitaSectionsDone: "ia_fiscalita_sections_done",
  fiscalitaStats: "ia_fiscalita_stats",
  precisionStreak: "ia_precision_streak",
  precisionExercise: "ia_precision_exercise",
  precisionStats: "ia_precision_stats",
  dailyActivity: "ia_daily_activity",
  dailyGoal: "ia_daily_goal",
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
let fiscalitaSectionsDone = loadJSON(LS_KEYS.fiscalitaSectionsDone, []);
let fiscalitaStats = loadJSON(LS_KEYS.fiscalitaStats, {});
let precisionStreak = loadJSON(LS_KEYS.precisionStreak, {}); // { [exerciseId]: {current, best} }
let precisionExercise = loadJSON(LS_KEYS.precisionExercise, "confronto");
let precisionStats = loadJSON(LS_KEYS.precisionStats, {}); // { [exerciseId]: {attempts, correct} }
let dailyActivity = loadJSON(LS_KEYS.dailyActivity, {}); // { "YYYY-MM-DD": count }
let dailyGoal = loadJSON(LS_KEYS.dailyGoal, 15);

function fullWiki() {
  return WIKI.concat(customWiki);
}

// ---------- Streak giornaliera + obiettivo (anti-procrastinazione) ----------
function todayKey() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function bumpDailyActivity() {
  const key = todayKey();
  dailyActivity[key] = (dailyActivity[key] || 0) + 1;
  saveJSON(LS_KEYS.dailyActivity, dailyActivity);
  renderDailyBanner();
}

function computeStreak() {
  let streak = 0;
  const cursor = new Date();
  for (;;) {
    const key = cursor.getFullYear() + "-" + String(cursor.getMonth() + 1).padStart(2, "0") + "-" + String(cursor.getDate()).padStart(2, "0");
    const isToday = key === todayKey();
    const count = dailyActivity[key] || 0;
    if (count > 0) streak++;
    else if (!isToday) break;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderDailyBanner() {
  const streak = computeStreak();
  const todayCount = dailyActivity[todayKey()] || 0;
  const pct = Math.min(100, Math.round((todayCount / dailyGoal) * 100));
  document.getElementById("daily-streak-label").textContent = `🔥 Streak: ${streak} ${streak === 1 ? "giorno" : "giorni"}`;
  document.getElementById("daily-goal-fill").style.width = pct + "%";
  document.getElementById("daily-goal-label").textContent = `Oggi: ${todayCount} / ${dailyGoal} risposte`;
  document.getElementById("daily-goal-input").value = dailyGoal;
}

document.getElementById("daily-goal-input").addEventListener("change", (e) => {
  let v = parseInt(e.target.value, 10);
  if (isNaN(v) || v < 1) v = 1;
  dailyGoal = v;
  saveJSON(LS_KEYS.dailyGoal, dailyGoal);
  renderDailyBanner();
});

// ---------- Tab navigation ----------
document.querySelectorAll("nav.tabs button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("nav.tabs button").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.view).classList.add("active");
    if (btn.dataset.view === "view-overview") renderOverview();
  });
});

// ---------- Dataset generico: hiragana | wiki | reading ----------
function statsFor(dataset) {
  if (dataset === "hiragana") return hiraganaStats;
  if (dataset === "wiki") return wikiStats;
  if (dataset === "career") return careerStats;
  if (dataset === "fiscalita") return fiscalitaStats;
  return readingStats;
}
function statsKeyFor(dataset) {
  if (dataset === "hiragana") return LS_KEYS.hiraganaStats;
  if (dataset === "wiki") return LS_KEYS.wikiStats;
  if (dataset === "career") return LS_KEYS.careerStats;
  if (dataset === "fiscalita") return LS_KEYS.fiscalitaStats;
  return LS_KEYS.readingStats;
}
function itemsFor(dataset) {
  if (dataset === "hiragana") return HIRAGANA;
  if (dataset === "wiki") return fullWiki();
  if (dataset === "career") {
    if (careerBadgeFilter === "all") return CAREER_QUIZ;
    return CAREER_QUIZ.filter((q) => q.badge === careerBadgeFilter);
  }
  if (dataset === "fiscalita") {
    if (fiscalitaBadgeFilter === "all") return FISCALITA_QUIZ;
    return FISCALITA_QUIZ.filter((q) => q.badge === fiscalitaBadgeFilter);
  }
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
    const b = CAREER_BADGES.find((bd) => bd.id === item.badge);
    return `Section ${item.section} — ${item.sectionTitle}${s ? ` (${s.weight}% of the exam)` : ""}${b ? ` · ${b.name}` : ""}`;
  }
  if (dataset === "fiscalita") {
    const b = FISCALITA_BADGES.find((bd) => bd.id === item.badge);
    return `Area ${item.section} — ${item.sectionTitle}${b ? ` · ${b.name}` : ""}`;
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
  s.lastSeen = Date.now();
  stats[key] = s;
  saveJSON(statsKeyFor(dataset), stats);
  bumpDailyActivity();
}

const STALE_MS = 3 * 24 * 60 * 60 * 1000; // sopra i 3 giorni, ripescala una voce corretta ma non rivista

function pickWeighted(dataset) {
  const items = itemsFor(dataset);
  const stats = statsFor(dataset);
  const now = Date.now();
  const weights = items.map((it) => {
    const s = stats[itemKey(dataset, it)];
    if (!s) return 3; // mai visto: priorità alta
    if (s.lastWrong) return 4; // sbagliato l'ultima volta: priorità massima
    const acc = s.correct / s.attempts;
    if (acc < 0.5) return 3;
    if (s.lastSeen && now - s.lastSeen > STALE_MS) return 3; // corretto ma non rivisto da un po': fallo riemergere
    return 1;
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
  if (dataset === "reading" || dataset === "career" || dataset === "fiscalita") {
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
  if (dataset === "career") return "No questions available yet.";
  if (dataset === "fiscalita") return "Nessuna domanda disponibile per questo filtro.";
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
  const textMode = dataset === "reading" || dataset === "career" || dataset === "fiscalita";
  const isCareer = dataset === "career";
  const hintText = isCareer ? "Click to reveal, then rate whether you knew it" : "Clicca per rivelare, poi valuta se lo sapevi";
  const wrongLabel = isCareer ? "Didn't know it" : "Non lo sapevo";
  const okLabel = isCareer ? "Knew it" : "Lo sapevo";
  const card = document.createElement("div");
  card.className = "card flashcard" + (textMode ? " text-front" : "");
  card.innerHTML = `
    ${meta ? `<div class="chapter-badge">${meta}</div>` : ""}
    <div class="front">${itemFront(dataset, currentItem)}</div>
    <div class="back" style="visibility:hidden">${itemAnswer(dataset, currentItem)}${itemExtra(dataset, currentItem) ? " — " + itemExtra(dataset, currentItem) : ""}</div>
    <div class="hint">${hintText}</div>
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
    <button style="padding:10px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bad);color:#fff;cursor:pointer">${wrongLabel}</button>
    <button style="padding:10px 16px;border-radius:8px;border:1px solid var(--border);background:var(--ok);color:#fff;cursor:pointer">${okLabel}</button>
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
  const textMode = dataset === "reading" || dataset === "career" || dataset === "fiscalita";
  const { correctAnswer, options } = buildOptions(dataset, currentItem);

  const card = document.createElement("div");
  card.className = "card quiz-question";
  card.innerHTML = `
    ${meta ? `<div class="chapter-badge">${meta}</div>` : ""}
    <div class="${textMode ? "question-text" : "char"}">${itemFront(dataset, currentItem)}</div>
  `;
  const optWrap = document.createElement("div");
  optWrap.className = "quiz-options";
  const hintBtn = document.createElement("button");
  hintBtn.className = "hint-btn";
  hintBtn.textContent = dataset === "career" ? "💡 Hint" : "💡 Aiuto";
  hintBtn.addEventListener("click", () => {
    const wrongButtons = Array.from(optWrap.querySelectorAll("button")).filter(
      (b) => b.textContent !== correctAnswer && !b.disabled
    );
    if (wrongButtons.length === 0) return;
    const toRemove = wrongButtons[Math.floor(Math.random() * wrongButtons.length)];
    toRemove.disabled = true;
    toRemove.classList.add("hint-removed");
    hintBtn.disabled = true;
  });
  options.forEach((opt) => {
    const b = document.createElement("button");
    b.textContent = opt;
    b.addEventListener("click", () => {
      const correct = opt === correctAnswer;
      recordResult(dataset, currentItem, correct);
      hintBtn.disabled = true;
      optWrap.querySelectorAll("button").forEach((ob) => {
        ob.disabled = true;
        if (ob.textContent === correctAnswer) ob.classList.add("correct");
        else if (ob === b) ob.classList.add("wrong");
      });
      const fb = document.createElement("div");
      fb.className = "feedback " + (correct ? "ok" : "bad");
      const correctWord = dataset === "career" ? "Correct!" : "Corretto!";
      const wrongPrefix = dataset === "career" ? "Wrong. Answer:" : "Sbagliato. Risposta:";
      fb.textContent = correct
        ? (itemExtra(dataset, currentItem) ? correctWord + " " + itemExtra(dataset, currentItem) : correctWord)
        : `${wrongPrefix} ${correctAnswer}${itemExtra(dataset, currentItem) ? " — " + itemExtra(dataset, currentItem) : ""}`;
      card.appendChild(fb);
      setTimeout(() => renderMultipleChoice(dataset, area), textMode ? 2200 : 900);
    });
    optWrap.appendChild(b);
  });
  card.appendChild(optWrap);
  card.appendChild(hintBtn);
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
    <button class="hint-btn">💡 Aiuto</button>
    <div class="hint-reveal"></div>
    <div class="feedback"></div>
  `;
  const input = card.querySelector("input");
  const submit = card.querySelector(".submit");
  const hintBtn = card.querySelector(".hint-btn");
  const hintReveal = card.querySelector(".hint-reveal");
  const feedback = card.querySelector(".feedback");
  hintBtn.addEventListener("click", () => {
    hintReveal.textContent = `Inizia con "${correctAnswer.charAt(0)}"`;
    hintBtn.disabled = true;
  });
  function check() {
    const val = input.value.toLowerCase().trim();
    const correct = val === correctAnswer;
    recordResult(dataset, currentItem, correct);
    feedback.className = "feedback " + (correct ? "ok" : "bad");
    feedback.textContent = correct ? "Corretto!" : `Sbagliato. Risposta corretta: ${correctAnswer}`;
    input.disabled = true;
    submit.disabled = true;
    hintBtn.disabled = true;
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
  const isCareer = dataset === "career";
  const label = dataset === "hiragana" ? "Hiragana" : dataset === "wiki" ? "Wiki" : isCareer ? "Career" : dataset === "fiscalita" ? "Fiscalità" : "Lettura";
  let rows = items.map((it) => {
    const key = itemKey(dataset, it);
    const s = stats[key];
    const attempts = s ? s.attempts : 0;
    const correct = s ? s.correct : 0;
    const acc = attempts ? Math.round((correct / attempts) * 100) : null;
    return { front: itemFront(dataset, it), answer: itemAnswer(dataset, it), attempts, correct, acc };
  });
  rows.sort((a, b) => (a.acc === null ? -1 : a.acc) - (b.acc === null ? -1 : b.acc));
  const frontClass = dataset === "reading" || dataset === "career" || dataset === "fiscalita" ? "" : ' style="font-size:18px"';
  const heading = isCareer ? `Statistics — ${label}` : `Statistiche — ${label}`;
  const thAnswer = isCareer ? "Answer" : "Risposta";
  const thAttempts = isCareer ? "Attempts" : "Tentativi";
  const thAcc = isCareer ? "% correct" : "% corrette";
  card.innerHTML = `
    <h2>${heading}</h2>
    <table class="stats-table">
      <tr><th></th><th>${thAnswer}</th><th>${thAttempts}</th><th>${thAcc}</th></tr>
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
let careerBadgeFilter = "all"; // "all" oppure l'id di un CAREER_BADGES

function renderCareerBadges() {
  const wrap = document.getElementById("career-badges-list");
  wrap.className = "badge-filter";
  wrap.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = careerBadgeFilter === "all" ? "active" : "";
  allBtn.textContent = "All modules";
  allBtn.addEventListener("click", () => {
    careerBadgeFilter = "all";
    renderCareerBadges();
    renderCareerMode();
  });
  wrap.appendChild(allBtn);

  CAREER_BADGES.forEach((b) => {
    const btn = document.createElement("button");
    btn.className = careerBadgeFilter === b.id ? "active" : "";
    btn.innerHTML = `${b.name}<span class="badge-meta">${b.meta}</span>`;
    btn.addEventListener("click", () => {
      careerBadgeFilter = b.id;
      renderCareerBadges();
      renderCareerMode();
    });
    wrap.appendChild(btn);
  });
}

function renderCareerProgress() {
  const pct = Math.round((careerSectionsDone.length / CAREER_SECTIONS.length) * 100);
  document.getElementById("career-progress-fill").style.width = pct + "%";
  const answered = Object.values(careerStats).reduce((sum, s) => sum + s.attempts, 0);
  const correct = Object.values(careerStats).reduce((sum, s) => sum + s.correct, 0);
  document.getElementById("career-progress-label").textContent =
    `${careerSectionsDone.length} / ${CAREER_SECTIONS.length} sections studied (${pct}%)` +
    (answered ? ` — ${correct}/${answered} correct answers so far` : "");

  const list = document.getElementById("career-sections-checklist");
  list.innerHTML = "";
  CAREER_SECTIONS.forEach((sec) => {
    const row = document.createElement("label");
    row.className = "week-row";
    row.style.cursor = "pointer";
    row.innerHTML = `
      <input type="checkbox" ${careerSectionsDone.includes(sec.id) ? "checked" : ""}>
      <span class="week-body"><strong>${sec.name}</strong> <span class="muted">(${sec.weight}% of the exam)</span><br><span class="chapters">${sec.description}</span></span>
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
  else if (careerMode === "glossario") renderGlossary(area);
  else if (careerMode === "stats") renderStats("career", area);
}

function renderGlossary(area) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>Glossary</h2>
    <p class="muted">Search a term (e.g. CRM, RAG, Data 360, Account...) to see its definition.</p>
    <input type="text" id="glossary-search" class="chapter-input" style="width:100%" placeholder="Search a term...">
    <div id="glossary-results"></div>
  `;
  area.appendChild(card);

  const input = card.querySelector("#glossary-search");
  const results = card.querySelector("#glossary-results");

  function renderResults() {
    const q = input.value.trim().toLowerCase();
    const matches = CAREER_GLOSSARY.filter((g) =>
      !q || g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q) || g.category.toLowerCase().includes(q)
    );
    if (matches.length === 0) {
      results.innerHTML = `<p class="muted">No term found.</p>`;
      return;
    }
    const categories = [...new Set(matches.map((g) => g.category))];
    results.innerHTML = categories.map((cat) => `
      <h3 style="color:var(--accent-2);font-size:14px;margin:16px 0 6px 0">${cat}</h3>
      ${matches.filter((g) => g.category === cat).map((g) => `
        <div class="week-row">
          <span class="week-body"><strong>${g.term}</strong><br><span class="chapters">${g.definition}</span></span>
        </div>
      `).join("")}
    `).join("");
  }

  input.addEventListener("input", renderResults);
  renderResults();
}

// ---------- Fiscalità: quiz di ripasso TUIR (26 lezioni, 5 macro-aree) ----------
let fiscalitaMode = "flashcard"; // "flashcard" | "mc" | "stats"
let fiscalitaBadgeFilter = "all"; // "all" oppure l'id di una FISCALITA_BADGES (lezione)

function renderFiscalitaBadges() {
  const wrap = document.getElementById("fiscalita-badges-list");
  wrap.className = "badge-filter";
  wrap.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = fiscalitaBadgeFilter === "all" ? "active" : "";
  allBtn.textContent = "Tutte le lezioni";
  allBtn.addEventListener("click", () => {
    fiscalitaBadgeFilter = "all";
    renderFiscalitaBadges();
    renderFiscalitaMode();
  });
  wrap.appendChild(allBtn);

  FISCALITA_BADGES.forEach((b) => {
    const btn = document.createElement("button");
    btn.className = fiscalitaBadgeFilter === b.id ? "active" : "";
    btn.innerHTML = `${b.name}<span class="badge-meta">${b.meta}</span>`;
    btn.addEventListener("click", () => {
      fiscalitaBadgeFilter = b.id;
      renderFiscalitaBadges();
      renderFiscalitaMode();
    });
    wrap.appendChild(btn);
  });
}

function renderFiscalitaProgress() {
  const pct = Math.round((fiscalitaSectionsDone.length / FISCALITA_SECTIONS.length) * 100);
  document.getElementById("fiscalita-progress-fill").style.width = pct + "%";
  const answered = Object.values(fiscalitaStats).reduce((sum, s) => sum + s.attempts, 0);
  const correct = Object.values(fiscalitaStats).reduce((sum, s) => sum + s.correct, 0);
  document.getElementById("fiscalita-progress-label").textContent =
    `${fiscalitaSectionsDone.length} / ${FISCALITA_SECTIONS.length} macro-aree ripassate (${pct}%)` +
    (answered ? ` — ${correct}/${answered} risposte corrette finora` : "");

  const list = document.getElementById("fiscalita-sections-checklist");
  list.innerHTML = "";
  FISCALITA_SECTIONS.forEach((sec) => {
    const row = document.createElement("label");
    row.className = "week-row";
    row.style.cursor = "pointer";
    row.innerHTML = `
      <input type="checkbox" ${fiscalitaSectionsDone.includes(sec.id) ? "checked" : ""}>
      <span class="week-body"><strong>${sec.id}. ${sec.name}</strong> <span class="muted">(${sec.count} lezioni)</span></span>
    `;
    const cb = row.querySelector("input");
    cb.addEventListener("change", () => {
      if (cb.checked) {
        if (!fiscalitaSectionsDone.includes(sec.id)) fiscalitaSectionsDone.push(sec.id);
      } else {
        fiscalitaSectionsDone = fiscalitaSectionsDone.filter((id) => id !== sec.id);
      }
      saveJSON(LS_KEYS.fiscalitaSectionsDone, fiscalitaSectionsDone);
      renderFiscalitaProgress();
    });
    list.appendChild(row);
  });
}

document.querySelectorAll(".subnav button[data-fiscalitamode]").forEach((btn) => {
  btn.addEventListener("click", () => {
    fiscalitaMode = btn.dataset.fiscalitamode;
    document.querySelectorAll(".subnav button[data-fiscalitamode]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderFiscalitaMode();
  });
});

function renderFiscalitaMode() {
  const area = document.getElementById("fiscalita-quiz-area");
  area.innerHTML = "";
  if (fiscalitaMode === "flashcard") renderFlashcard("fiscalita", area);
  else if (fiscalitaMode === "mc") renderMultipleChoice("fiscalita", area);
  else if (fiscalitaMode === "stats") renderStats("fiscalita", area);
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

// ---------- Precisione: esercizi di attenzione al dettaglio, indipendenti dallo studio ----------
const PRECISION_EXERCISES = [
  { id: "confronto", label: "🔍 Confronto dati", meta: "Trova la riga diversa (o riconosci che sono identiche)" },
  { id: "trascrizione", label: "⌨️ Trascrizione esatta", meta: "Ricopia un codice esattamente com'è" },
  { id: "correzione", label: "✏️ Correggi l'errore", meta: "Individua la parola o il numero sbagliato" },
];
let precisionMode = "quiz"; // "quiz" | "stats"

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mutateDigit(str) {
  const positions = [];
  for (let i = 0; i < str.length; i++) if (/\d/.test(str[i])) positions.push(i);
  if (positions.length === 0) return str;
  const pos = positions[randInt(0, positions.length - 1)];
  let newDigit;
  do { newDigit = String(randInt(0, 9)); } while (newDigit === str[pos]);
  return str.slice(0, pos) + newDigit + str.slice(pos + 1);
}

function getPrecisionStreak(exerciseId) {
  return precisionStreak[exerciseId] || { current: 0, best: 0 };
}

function bumpPrecisionStreak(exerciseId, correct) {
  const s = getPrecisionStreak(exerciseId);
  if (correct) {
    s.current++;
    if (s.current > s.best) s.best = s.current;
  } else {
    s.current = 0;
  }
  precisionStreak[exerciseId] = s;
  saveJSON(LS_KEYS.precisionStreak, precisionStreak);
}

function recordPrecisionResult(exerciseId, correct) {
  const s = precisionStats[exerciseId] || { attempts: 0, correct: 0 };
  s.attempts++;
  if (correct) s.correct++;
  precisionStats[exerciseId] = s;
  saveJSON(LS_KEYS.precisionStats, precisionStats);
  bumpPrecisionStreak(exerciseId, correct);
  renderPrecisionStreakLabel();
  bumpDailyActivity();
}

function finishPrecisionRound(card, correct, explanation) {
  const fb = document.createElement("div");
  fb.className = "feedback " + (correct ? "ok" : "bad");
  fb.textContent = (correct ? "Corretto! " : "Non esatto. ") + explanation;
  card.appendChild(fb);
  const nextBtn = document.createElement("button");
  nextBtn.className = "precision-next";
  nextBtn.textContent = "Prossimo esercizio";
  nextBtn.addEventListener("click", renderPrecisionView);
  card.appendChild(nextBtn);
}

function renderPrecisionStreakLabel() {
  const s = getPrecisionStreak(precisionExercise);
  document.getElementById("precision-streak-label").innerHTML =
    `<span class="precision-streak-label">Serie attuale: <strong>${s.current}</strong> · Record: <strong>${s.best}</strong> risposte giuste di fila (senza sbagliarne una)</span>`;
}

function renderPrecisionExercises() {
  const wrap = document.getElementById("precision-exercises");
  wrap.innerHTML = "";
  PRECISION_EXERCISES.forEach((ex) => {
    const btn = document.createElement("button");
    btn.className = ex.id === precisionExercise ? "active" : "";
    btn.innerHTML = `${ex.label}<span class="badge-meta">${ex.meta}</span>`;
    btn.addEventListener("click", () => {
      precisionExercise = ex.id;
      saveJSON(LS_KEYS.precisionExercise, precisionExercise);
      renderPrecisionExercises();
      renderPrecisionStreakLabel();
      renderPrecisionView();
    });
    wrap.appendChild(btn);
  });
}

document.querySelectorAll(".subnav button[data-precisionmode]").forEach((btn) => {
  btn.addEventListener("click", () => {
    precisionMode = btn.dataset.precisionmode;
    document.querySelectorAll(".subnav button[data-precisionmode]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPrecisionView();
  });
});

// --- Esercizio 1: Confronto dati ---
const CONFRONTO_FIELDS = [
  { label: "Importo fattura", gen: () => "€ " + (randInt(1000, 4899999) / 100).toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) },
  { label: "Data emissione", gen: () => `${String(randInt(1, 28)).padStart(2, "0")}/${String(randInt(1, 12)).padStart(2, "0")}/${randInt(2022, 2026)}` },
  { label: "N. riferimento", gen: () => `FT-${randInt(2022, 2026)}-${String(randInt(1, 99999)).padStart(5, "0")}` },
  { label: "Quantità", gen: () => `${randInt(1, 9999)} pz` },
  { label: "Aliquota IVA", gen: () => (randInt(0, 2200) / 100).toLocaleString("it-IT", { minimumFractionDigits: 2 }) + "%" },
  { label: "Codice cliente", gen: () => `CL-${randInt(10000, 99999)}` },
];
let currentConfronto = null;

function generateConfronto() {
  const chosen = shuffle(CONFRONTO_FIELDS.slice()).slice(0, randInt(4, 5));
  const rowsA = chosen.map((f) => ({ label: f.label, value: f.gen() }));
  const identical = Math.random() < 0.25;
  const diffIndex = identical ? null : randInt(0, rowsA.length - 1);
  const rowsB = rowsA.map((r, i) => ({ label: r.label, value: i === diffIndex ? mutateDigit(r.value) : r.value }));
  return { rowsA, rowsB, diffIndex };
}

function renderConfrontoExercise(area) {
  currentConfronto = generateConfronto();
  const { rowsA, rowsB } = currentConfronto;
  const card = document.createElement("div");
  card.className = "card quiz-question";
  card.innerHTML = `
    <div class="precision-tip">Confronta i due blocchi con calma: sono quasi identici, ma potrebbe esserci un valore diverso in una sola riga.</div>
    <div class="confronto-grid">
      <div class="confronto-col">
        <div class="confronto-col-label">Blocco A</div>
        ${rowsA.map((r) => `<div class="confronto-row"><span>${r.label}</span><strong>${r.value}</strong></div>`).join("")}
      </div>
      <div class="confronto-col">
        <div class="confronto-col-label">Blocco B</div>
        ${rowsB.map((r) => `<div class="confronto-row"><span>${r.label}</span><strong>${r.value}</strong></div>`).join("")}
      </div>
    </div>
  `;
  const optWrap = document.createElement("div");
  optWrap.className = "quiz-options";
  rowsA.forEach((r, i) => {
    const b = document.createElement("button");
    b.textContent = r.label;
    b.addEventListener("click", () => answerConfronto(i, card, optWrap));
    optWrap.appendChild(b);
  });
  const identicalBtn = document.createElement("button");
  identicalBtn.textContent = "Sono identici";
  identicalBtn.addEventListener("click", () => answerConfronto(null, card, optWrap));
  optWrap.appendChild(identicalBtn);
  card.appendChild(optWrap);
  area.appendChild(card);
}

function answerConfronto(answerIndex, card, optWrap) {
  const { rowsA, rowsB, diffIndex } = currentConfronto;
  const correct = answerIndex === diffIndex;
  optWrap.querySelectorAll("button").forEach((b) => (b.disabled = true));
  recordPrecisionResult("confronto", correct);
  const explanation = diffIndex === null
    ? "I due blocchi erano identici."
    : `La riga diversa era "${rowsA[diffIndex].label}": Blocco A = ${rowsA[diffIndex].value}, Blocco B = ${rowsB[diffIndex].value}.`;
  finishPrecisionRound(card, correct, explanation);
}

// --- Esercizio 2: Trascrizione esatta ---
function genTrascrizioneCode() {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const DIGITS = "0123456789";
  const seq = (n, pool) => Array.from({ length: n }, () => pool[randInt(0, pool.length - 1)]).join("");
  if (Math.random() < 0.5) return `${seq(2, LETTERS)}-${seq(4, DIGITS)}-${seq(4, LETTERS + DIGITS)}`;
  return `IT${randInt(10, 99)}${seq(1, LETTERS)} ${seq(4, DIGITS)} ${seq(4, DIGITS)} ${seq(4, DIGITS)}`;
}

function renderCharDiff(expected, typed) {
  const len = Math.max(expected.length, typed.length);
  let html = "";
  for (let i = 0; i < len; i++) {
    const e = expected[i];
    const t = typed[i];
    if (e === t) html += `<span class="diff-ok">${escapeHtml(t)}</span>`;
    else if (t === undefined) html += `<span class="diff-missing">${escapeHtml(e)}</span>`;
    else html += `<span class="diff-wrong">${escapeHtml(t)}</span>`;
  }
  return html;
}

let currentTrascrizioneCode = "";

function renderTrascrizioneExercise(area) {
  currentTrascrizioneCode = genTrascrizioneCode();
  const card = document.createElement("div");
  card.className = "card quiz-question";
  card.innerHTML = `
    <div class="precision-tip">Ricopia il codice esattamente come lo vedi, spazi e trattini compresi. Rileggi prima di confermare.</div>
    <div class="trascrizione-code">${currentTrascrizioneCode}</div>
    <input type="text" id="trascrizione-input" class="trascrizione-input" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Ricopia qui...">
  `;
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "precision-confirm";
  confirmBtn.textContent = "Conferma";
  confirmBtn.addEventListener("click", () => {
    const input = card.querySelector("#trascrizione-input");
    const typed = input.value;
    const correct = typed === currentTrascrizioneCode;
    input.disabled = true;
    confirmBtn.disabled = true;
    confirmBtn.style.display = "none";
    recordPrecisionResult("trascrizione", correct);
    const fb = document.createElement("div");
    fb.className = "feedback " + (correct ? "ok" : "bad");
    fb.innerHTML = correct
      ? "Corretto, copiato esattamente!"
      : `Non esatto. Confronto carattere per carattere:<div class="trascrizione-diff">${renderCharDiff(currentTrascrizioneCode, typed)}</div>`;
    card.appendChild(fb);
    const nextBtn = document.createElement("button");
    nextBtn.className = "precision-next";
    nextBtn.textContent = "Prossimo esercizio";
    nextBtn.addEventListener("click", renderPrecisionView);
    card.appendChild(nextBtn);
  });
  card.appendChild(confirmBtn);
  area.appendChild(card);
  card.querySelector("#trascrizione-input").focus();
}

// --- Esercizio 3: Correggi l'errore ---
const CORREZIONE_TEMPLATES = [
  "Il pagamento di 1.250 euro è arrivato il 3 giugno 2026.",
  "La riunione con il cliente è fissata per le 15:30 di giovedì 12.",
  "Il fornitore ha inviato 48 unità con la fattura n. 00219.",
  "Il contratto ha una durata di 24 mesi, rinnovabile una volta.",
  "L'ufficio protocollo ha registrato la pratica con il numero 7734.",
  "Il rimborso spese ammonta a 312,40 euro, da liquidare entro 30 giorni.",
  "La sede secondaria si trova al piano 3, stanza 108.",
  "Il preventivo prevede uno sconto del 15% sul totale.",
];
let currentCorrezione = null;

function pickCorrezioneTemplate() {
  const sentence = CORREZIONE_TEMPLATES[randInt(0, CORREZIONE_TEMPLATES.length - 1)];
  const words = sentence.split(" ");
  const candidates = words.map((w, i) => (/\d/.test(w) ? i : -1)).filter((i) => i !== -1);
  const targetIndex = candidates[randInt(0, candidates.length - 1)];
  const identical = Math.random() < 0.3;
  const errorIndex = identical ? null : targetIndex;
  const displayWords = words.slice();
  if (errorIndex !== null) displayWords[errorIndex] = mutateDigit(words[errorIndex]);
  return { words, displayWords, errorIndex };
}

function renderCorrezioneExercise(area) {
  currentCorrezione = pickCorrezioneTemplate();
  const { displayWords } = currentCorrezione;
  const card = document.createElement("div");
  card.className = "card quiz-question";
  card.innerHTML = `<div class="precision-tip">Leggi con attenzione: potrebbe esserci un numero sbagliato. Clicca sulla parola sbagliata, oppure su "Nessun errore" se la frase è corretta.</div>`;
  const sentenceEl = document.createElement("div");
  sentenceEl.className = "correzione-sentence";
  displayWords.forEach((w, i) => {
    const span = document.createElement("span");
    span.className = "correzione-word";
    span.textContent = w + " ";
    span.addEventListener("click", () => answerCorrezione(i, card, sentenceEl, noErrBtn));
    sentenceEl.appendChild(span);
  });
  card.appendChild(sentenceEl);
  const noErrBtn = document.createElement("button");
  noErrBtn.className = "precision-confirm";
  noErrBtn.textContent = "Nessun errore";
  noErrBtn.addEventListener("click", () => answerCorrezione(null, card, sentenceEl, noErrBtn));
  card.appendChild(noErrBtn);
  area.appendChild(card);
}

function answerCorrezione(clickedIndex, card, sentenceEl, noErrBtn) {
  const { errorIndex, words, displayWords } = currentCorrezione;
  const correct = clickedIndex === errorIndex;
  sentenceEl.querySelectorAll(".correzione-word").forEach((el, i) => {
    el.style.pointerEvents = "none";
    if (i === errorIndex) el.classList.add(correct ? "diff-ok" : "diff-wrong");
    else if (i === clickedIndex) el.classList.add("diff-missing");
  });
  noErrBtn.disabled = true;
  noErrBtn.style.display = "none";
  recordPrecisionResult("correzione", correct);
  const explanation = errorIndex === null
    ? "La frase era corretta, nessun errore."
    : `La parola corretta era "${words[errorIndex].trim()}" (scritta come "${displayWords[errorIndex].trim()}").`;
  finishPrecisionRound(card, correct, explanation);
}

// --- Statistiche ---
function renderPrecisionStats(area) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h2>Statistiche — Precisione</h2>
    <table class="stats-table">
      <tr><th>Esercizio</th><th>Tentativi</th><th>% corrette</th><th>Serie record</th></tr>
      ${PRECISION_EXERCISES.map((ex) => {
        const s = precisionStats[ex.id] || { attempts: 0, correct: 0 };
        const acc = s.attempts ? Math.round((s.correct / s.attempts) * 100) : null;
        const streak = getPrecisionStreak(ex.id);
        return `<tr><td>${ex.label}</td><td>${s.attempts}</td><td>${acc === null ? "—" : acc + "%"}</td><td>${streak.best}</td></tr>`;
      }).join("")}
    </table>
  `;
  area.appendChild(card);
}

function renderPrecisionView() {
  const area = document.getElementById("precision-quiz-area");
  area.innerHTML = "";
  if (precisionMode === "stats") {
    renderPrecisionStats(area);
    return;
  }
  if (precisionExercise === "confronto") renderConfrontoExercise(area);
  else if (precisionExercise === "trascrizione") renderTrascrizioneExercise(area);
  else if (precisionExercise === "correzione") renderCorrezioneExercise(area);
}

// ---------- Panoramica: vista d'insieme cross-sezione ----------
function accumulate(items, stats, keyFn) {
  let attempted = 0, attempts = 0, correct = 0;
  items.forEach((it) => {
    const s = stats[keyFn(it)];
    if (s) {
      attempted++;
      attempts += s.attempts;
      correct += s.correct;
    }
  });
  return { total: items.length, attempted, attempts, correct };
}

function mergeAcc(a, b) {
  return {
    total: a.total + b.total,
    attempted: a.attempted + b.attempted,
    attempts: a.attempts + b.attempts,
    correct: a.correct + b.correct,
  };
}

function toOverviewRow(label, acc) {
  const coverage = acc.total ? Math.round((acc.attempted / acc.total) * 100) : null;
  const accuracy = acc.attempts ? Math.round((acc.correct / acc.attempts) * 100) : null;
  return { label, coverage, accuracy, attempts: acc.attempts };
}

function renderOverview() {
  const area = document.getElementById("overview-area");
  area.innerHTML = "";

  const readingAcc = accumulate(itemsFor("reading"), readingStats, (it) => it.id);
  const hiraganaAcc = accumulate(HIRAGANA, hiraganaStats, (it) => it.char);
  const wikiAcc = accumulate(fullWiki(), wikiStats, (it) => it.id);
  const careerAcc = accumulate(CAREER_QUIZ, careerStats, (it) => it.id);
  const fiscalitaAcc = accumulate(FISCALITA_QUIZ, fiscalitaStats, (it) => it.id);
  let precAttempts = 0, precCorrect = 0;
  PRECISION_EXERCISES.forEach((ex) => {
    const s = precisionStats[ex.id];
    if (s) { precAttempts += s.attempts; precCorrect += s.correct; }
  });
  const precisionRow = {
    label: "🎯 Precisione",
    coverage: null,
    accuracy: precAttempts ? Math.round((precCorrect / precAttempts) * 100) : null,
    attempts: precAttempts,
  };

  const rows = [
    toOverviewRow("📖 Lettura", readingAcc),
    toOverviewRow("🇯🇵 Giapponese", mergeAcc(hiraganaAcc, wikiAcc)),
    toOverviewRow("💼 Carriera", careerAcc),
    toOverviewRow("🧾 Fiscalità", fiscalitaAcc),
    precisionRow,
  ];

  const streak = computeStreak();
  const todayCount = dailyActivity[todayKey()] || 0;
  const weakest = rows
    .filter((r) => r.attempts >= 5 && r.accuracy !== null)
    .sort((a, b) => a.accuracy - b.accuracy)[0];

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>Panoramica</h2>
    <p class="muted">🔥 Streak: ${streak} ${streak === 1 ? "giorno" : "giorni"} · Oggi: ${todayCount}/${dailyGoal} risposte</p>
    <table class="stats-table">
      <tr><th>Sezione</th><th>Copertura</th><th>% corrette</th><th>Risposte date</th></tr>
      ${rows.map((r) => `<tr><td>${r.label}</td><td>${r.coverage === null ? "—" : r.coverage + "%"}</td><td>${r.accuracy === null ? "—" : r.accuracy + "%"}</td><td>${r.attempts}</td></tr>`).join("")}
    </table>
    ${weakest ? `<p class="muted" style="margin-top:10px">💡 Suggerimento: la sezione più debole al momento è <strong>${weakest.label}</strong> (${weakest.accuracy}% corrette) — potrebbe valere la pena ripassarla oggi.</p>` : ""}
  `;
  area.appendChild(card);
}

// ---------- Init ----------
renderDailyBanner();
renderOverview();
renderReadingProgress();
renderReadMode();
renderProgramReference();
renderCareerProgress();
renderCareerBadges();
renderCareerMode();
renderFiscalitaProgress();
renderFiscalitaBadges();
renderFiscalitaMode();
renderDatasetToggle();
renderJpMode();
renderPrecisionExercises();
renderPrecisionStreakLabel();
renderPrecisionView();

// ---------- PWA: service worker (cache offline per l'uso da telefono) ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
