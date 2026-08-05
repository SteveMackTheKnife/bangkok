const STORAGE_KEY = "bangkok-expense-v1";
const RATE_KEY = "bangkok-expense-rate";

const CATEGORY_META = {
  transport: { label: "교통", color: "var(--exp-transport)" },
  food: { label: "식비", color: "var(--exp-food)" },
  shopping: { label: "쇼핑", color: "var(--exp-shopping)" },
  lodging: { label: "숙박", color: "var(--exp-lodging)" },
  flight: { label: "항공", color: "var(--exp-flight)" },
  other: { label: "기타", color: "var(--exp-other)" }
};
const CATEGORY_ORDER = ["transport", "food", "shopping", "lodging", "flight", "other"];

function esc(s) { const d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }
function fmtKRW(n) { return Math.round(n).toLocaleString("ko-KR") + "원"; }
function fmtTHB(n) { return n.toLocaleString("ko-KR", { maximumFractionDigits: 2 }) + " THB"; }
function weekday(dateStr) { return ["일", "월", "화", "수", "목", "금", "토"][new Date(dateStr + "T00:00:00").getDay()]; }
function fmtDateLabel(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${Number(m)}월 ${Number(d)}일 (${weekday(dateStr)})`;
}

function getRate() { return Number(localStorage.getItem(RATE_KEY)) || THB_TO_KRW_RATE; }
function setRate(v) { localStorage.setItem(RATE_KEY, String(v)); }

function loadExpenses() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = SEED_EXPENSES.map((r, i) => Object.assign({ id: "seed-" + i, isSeed: true }, r));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
  return JSON.parse(raw);
}
function saveExpenses(list) { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
function resetToSeed() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(RATE_KEY);
  expenses = loadExpenses();
  renderAll();
}

let expenses = loadExpenses();

function renderStats() {
  const rate = getRate();
  const totalKRW = expenses.reduce((s, e) => s + e.krw, 0);
  const totalTHB = expenses.reduce((s, e) => s + (e.thb || 0), 0);
  const cashTHB = expenses.reduce((s, e) => s + (e.thb != null && e.method === "현금" ? e.thb : 0), 0);
  const remainingTHB = TRIP_BUDGET_THB - cashTHB;
  const remainingKRW = remainingTHB * rate;
  const dates = [...new Set(expenses.map(e => e.date))].sort();
  const dayCount = Math.max(dates.length, 1);
  const avgPerDay = totalKRW / dayCount;

  const cards = [
    { label: "총 지출 (KRW)", value: fmtKRW(totalKRW), sub: fmtTHB(totalTHB) + " · 현지통화 합계" },
    { label: "환전 예산 잔액", value: fmtKRW(remainingKRW), sub: fmtTHB(remainingTHB) + " 남음 (예산 " + fmtTHB(TRIP_BUDGET_THB) + ")", warn: remainingTHB < 0 },
    { label: "일 평균 지출", value: fmtKRW(avgPerDay), sub: dayCount + "일 기준" },
    { label: "지출 건수", value: expenses.length + "건", sub: dates.length ? (dates[0] + " ~ " + dates[dates.length - 1]) : "-" }
  ];
  document.getElementById("exp-summary-grid").innerHTML = cards.map(c => `
    <div class="exp-stat-card">
      <div class="label">${esc(c.label)}</div>
      <div class="value${c.warn ? " warn" : ""}">${c.value}</div>
      <div class="sub">${esc(c.sub)}</div>
    </div>`).join("");
}

function renderBars() {
  const sums = {};
  CATEGORY_ORDER.forEach(c => sums[c] = { krw: 0, count: 0 });
  expenses.forEach(e => { sums[e.category].krw += e.krw; sums[e.category].count += 1; });
  const max = Math.max(1, ...CATEGORY_ORDER.map(c => sums[c].krw));
  const sorted = [...CATEGORY_ORDER].sort((a, b) => sums[b].krw - sums[a].krw);

  document.getElementById("exp-bars").innerHTML = sorted.map(cat => {
    const meta = CATEGORY_META[cat];
    const v = sums[cat];
    const pct = Math.max(1.5, (v.krw / max) * 100);
    return `
    <div class="exp-bar-row">
      <div class="cat-label"><span class="cat-dot" style="background:${meta.color}"></span>${meta.label}</div>
      <div class="exp-bar-track"><div class="exp-bar-fill" style="width:${pct}%; background:${meta.color}"></div></div>
      <div class="cat-value"><b>${fmtKRW(v.krw)}</b> · ${v.count}건</div>
    </div>`;
  }).join("");
}

function renderDays() {
  const byDate = {};
  expenses.forEach(e => { (byDate[e.date] = byDate[e.date] || []).push(e); });
  const dates = Object.keys(byDate).sort();

  document.getElementById("exp-count").textContent = expenses.length + "건의 지출 기록";

  document.getElementById("exp-days").innerHTML = dates.map(date => {
    const rows = byDate[date];
    const dayTotal = rows.reduce((s, e) => s + e.krw, 0);
    const rowsHtml = rows.map(e => {
      const meta = CATEGORY_META[e.category];
      return `
      <div class="exp-row">
        <div class="exp-main">
          <div class="exp-place"><span class="cat-pill" style="background:${meta.color}"></span>${esc(e.place)}</div>
          ${e.detail ? `<div class="exp-detail">${esc(e.detail)}</div>` : ""}
          ${e.note ? `<div class="exp-note">${esc(e.note)}</div>` : ""}
        </div>
        <div class="exp-amt">
          <span class="krw">${fmtKRW(e.krw)}</span>
          ${e.thb != null ? `<span class="thb">${fmtTHB(e.thb)}</span>` : ""}
        </div>
        <div class="exp-method">${esc(e.method)}</div>
        <button class="exp-del" type="button" title="삭제" data-id="${esc(e.id)}">✕</button>
      </div>`;
    }).join("");

    return `
    <div class="day-group open">
      <div class="day-header">
        <div class="day-title">${fmtDateLabel(date)} <span class="wd">${rows.length}건</span></div>
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="day-total">${fmtKRW(dayTotal)}</div>
          <span class="chev">▾</span>
        </div>
      </div>
      <div class="day-rows">${rowsHtml}</div>
    </div>`;
  }).join("");

  document.querySelectorAll(".day-header").forEach(h => {
    h.addEventListener("click", () => h.closest(".day-group").classList.toggle("open"));
  });
  document.querySelectorAll(".exp-del").forEach(btn => {
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const id = btn.dataset.id;
      expenses = expenses.filter(e => e.id !== id);
      saveExpenses(expenses);
      renderAll();
    });
  });
}

function renderAll() {
  renderStats();
  renderBars();
  renderDays();
}

function initExpensePage() {
  const rateInput = document.getElementById("f-rate");
  rateInput.value = getRate();
  rateInput.addEventListener("change", () => {
    const v = Number(rateInput.value);
    if (v > 0) { setRate(v); renderAll(); }
  });

  document.getElementById("f-date").value = new Date().toISOString().slice(0, 10);

  document.getElementById("exp-form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const date = document.getElementById("f-date").value;
    const category = document.getElementById("f-category").value;
    const place = document.getElementById("f-place").value.trim();
    const detail = document.getElementById("f-detail").value.trim();
    const method = document.getElementById("f-method").value;
    const note = document.getElementById("f-note").value.trim();
    const amount = Number(document.getElementById("f-amount").value);
    const currency = document.getElementById("f-currency").value;
    if (!date || !place || !(amount > 0)) return;

    const rate = getRate();
    const thb = currency === "THB" ? amount : null;
    const krw = currency === "THB" ? Math.round(amount * rate * 100) / 100 : amount;

    expenses.push({
      id: "u-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7),
      date, category, place, detail, thb, krw, method, note, isSeed: false
    });
    saveExpenses(expenses);
    renderAll();

    ev.target.reset();
    document.getElementById("f-date").value = date;
    document.getElementById("f-category").value = category;
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("직접 입력한 지출 기록이 모두 삭제되고 2023년 기본 데이터로 초기화됩니다. 계속할까요?")) {
      resetToSeed();
    }
  });

  renderAll();
}

initExpensePage();
