<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>MetaCartão – MVP (HTML)</title>
  <style>
    :root{
      --bg:#0b0d12;
      --panel:#121622;
      --panel2:#0f1320;
      --text:#e8eefc;
      --muted:#aab4d6;
      --line:rgba(255,255,255,.08);
      --shadow: 0 10px 30px rgba(0,0,0,.35);

      --blue:#5bc0ff;
      --red:#ff5b5b;
      --green:#35d07f;
      --orange:#ffb347;
      --purple:#b58bff;
      --chip:#1a2032;
    }

    *{box-sizing:border-box}
    body{
      margin:0;
      background: radial-gradient(1200px 600px at 20% -10%, rgba(91,192,255,.25), transparent 55%),
                  radial-gradient(900px 500px at 85% 0%, rgba(181,139,255,.22), transparent 60%),
                  linear-gradient(180deg, #070910, #0b0d12 40%, #080a10);
      color:var(--text);
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Helvetica Neue", "Noto Sans";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .app{
      max-width: 1100px;
      margin: 0 auto;
      padding: 18px 14px 32px;
    }

    .topbar{
      display:flex;
      gap:12px;
      align-items:center;
      justify-content:space-between;
      margin-bottom: 14px;
    }

    .brand{
      display:flex;
      gap:10px;
      align-items:center;
    }

    .logo{
      width:38px;height:38px;border-radius:12px;
      background: linear-gradient(135deg, rgba(91,192,255,.95), rgba(181,139,255,.9));
      box-shadow: var(--shadow);
    }

    .brand h1{
      margin:0;
      font-size: 16px;
      line-height:1.1;
      letter-spacing:.2px;
    }
    .brand .sub{
      margin:2px 0 0;
      color:var(--muted);
      font-size: 12px;
    }

    .monthNav{
      display:flex;
      gap:10px;
      align-items:center;
      background: rgba(255,255,255,.04);
      border:1px solid var(--line);
      padding:8px 10px;
      border-radius: 14px;
      box-shadow: var(--shadow);
    }
    .monthNav .m{
      font-weight:700;
      letter-spacing:.4px;
    }

    .tabs{
      display:grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap:10px;
      margin-bottom: 14px;
    }

    .tabBtn{
      border:0;
      border-radius: 16px;
      padding: 14px 12px;
      font-weight: 800;
      font-size: 15px;
      cursor:pointer;
      box-shadow: var(--shadow);
      color:#0b0d12;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      transition: transform .08s ease, filter .08s ease;
      user-select:none;
    }
    .tabBtn:active{ transform: scale(.99); filter: brightness(.98); }

    .tDash{ background: linear-gradient(135deg, rgba(91,192,255,1), rgba(91,192,255,.7)); }
    .tGastos{ background: linear-gradient(135deg, rgba(255,91,91,1), rgba(255,91,91,.7)); }
    .tFixas{ background: linear-gradient(135deg, rgba(53,208,127,1), rgba(53,208,127,.7)); }
    .tRec{ background: linear-gradient(135deg, rgba(255,179,71,1), rgba(255,179,71,.75)); }
    .tCards{ background: linear-gradient(135deg, rgba(181,139,255,1), rgba(181,139,255,.75)); }

    .grid{
      display:grid;
      grid-template-columns: 1.2fr .8fr;
      gap: 14px;
    }
    @media (max-width: 920px){
      .tabs{ grid-template-columns: repeat(2, minmax(0,1fr)); }
      .grid{ grid-template-columns: 1fr; }
      .monthNav{ flex-wrap: wrap; justify-content:center; }
      .topbar{ flex-direction:column; align-items:stretch; gap:12px; }
    }

    .panel{
      background: rgba(18,22,34,.86);
      border: 1px solid var(--line);
      border-radius: 18px;
      box-shadow: var(--shadow);
      overflow:hidden;
    }
    .panelHeader{
      padding: 14px 14px 12px;
      border-bottom: 1px solid var(--line);
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
    }
    .panelTitle{
      font-size: 15px;
      font-weight: 900;
      letter-spacing:.2px;
      margin:0;
    }
    .panelSub{
      margin:2px 0 0;
      color: var(--muted);
      font-size: 12px;
    }
    .panelBody{
      padding: 14px;
    }

    .row{
      display:flex; gap:10px; align-items:center; flex-wrap:wrap;
    }

    .btn{
      border:0;
      border-radius: 14px;
      padding: 12px 14px;
      font-weight: 900;
      cursor:pointer;
      box-shadow: var(--shadow);
      user-select:none;
      display:inline-flex;
      align-items:center;
      gap:8px;
      justify-content:center;
      white-space:nowrap;
    }
    .btnSmall{ padding: 10px 12px; border-radius: 12px; font-weight: 800; }
    .btnGhost{
      background: rgba(255,255,255,.06);
      color: var(--text);
      border: 1px solid var(--line);
      box-shadow:none;
    }
    .btnGreen{ background: linear-gradient(135deg, rgba(53,208,127,1), rgba(53,208,127,.78)); color:#08110a; }
    .btnOrange{ background: linear-gradient(135deg, rgba(255,179,71,1), rgba(255,179,71,.78)); color:#140b00; }
    .btnRed{ background: linear-gradient(135deg, rgba(255,91,91,1), rgba(255,91,91,.78)); color:#140404; }
    .btnDark{
      background: rgba(10,12,18,.9);
      color: var(--text);
      border: 1px solid var(--line);
      box-shadow: none;
    }

    .kpi{
      display:grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap:10px;
    }
    @media (max-width: 700px){
      .kpi{ grid-template-columns: 1fr; }
    }
    .kpiCard{
      background: rgba(255,255,255,.04);
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 12px 12px 10px;
    }
    .kpiCard .label{ color: var(--muted); font-size: 12px; }
    .kpiCard .value{ font-size: 20px; font-weight: 950; margin-top:4px; letter-spacing:.2px; }

    .list{
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .item{
      background: rgba(255,255,255,.04);
      border:1px solid var(--line);
      border-radius: 16px;
      padding: 12px;
    }

    .itemTop{
      display:flex; gap:10px; justify-content:space-between; align-items:flex-start; flex-wrap:wrap;
    }
    .itemTitle{
      font-weight: 950;
      font-size: 14px;
      margin:0;
    }
    .itemMeta{
      margin:4px 0 0;
      color: var(--muted);
      font-size: 12px;
      line-height:1.35;
    }

    .chip{
      display:inline-flex;
      align-items:center;
      gap:6px;
      padding: 6px 10px;
      border-radius: 999px;
      background: var(--chip);
      border: 1px solid var(--line);
      color: var(--text);
      font-size: 12px;
      font-weight: 900;
      white-space:nowrap;
    }

    .progressWrap{
      margin-top:10px;
      background: rgba(255,255,255,.06);
      border:1px solid var(--line);
      border-radius: 999px;
      overflow:hidden;
      height: 12px;
    }
    .progressBar{
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, rgba(91,192,255,1), rgba(53,208,127,1));
    }

    .muted{ color: var(--muted); }
    .divider{ height:1px; background: var(--line); margin: 12px 0; }

    /* Modal */
    .modalOverlay{
      position:fixed; inset:0;
      background: rgba(0,0,0,.55);
      display:none;
      align-items:center;
      justify-content:center;
      padding: 18px;
      z-index: 1000;
    }
    .modal{
      width: min(560px, 100%);
      background: rgba(18,22,34,.95);
      border: 1px solid var(--line);
      border-radius: 18px;
      box-shadow: 0 30px 80px rgba(0,0,0,.5);
      overflow:hidden;
    }
    .modalHeader{
      padding: 14px 14px 12px;
      border-bottom: 1px solid var(--line);
      display:flex; align-items:center; justify-content:space-between; gap:12px;
    }
    .modalHeader h3{
      margin:0; font-size: 15px; font-weight: 950;
    }
    .modalBody{ padding: 14px; }
    .form{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;
    }
    @media (max-width: 520px){
      .form{ grid-template-columns: 1fr; }
    }
    label{
      display:flex; flex-direction:column; gap:6px;
      font-size: 12px; color: var(--muted); font-weight: 800;
    }
    input, select, textarea{
      width:100%;
      padding: 12px 12px;
      border-radius: 14px;
      border: 1px solid var(--line);
      background: rgba(0,0,0,.25);
      color: var(--text);
      outline:none;
      font-size: 14px;
    }
    textarea{ min-height: 44px; resize: vertical; }
    .modalFooter{
      display:flex; gap:10px; justify-content:flex-end; align-items:center;
      padding: 12px 14px 14px;
      border-top: 1px solid var(--line);
      flex-wrap:wrap;
    }

    .toast{
      position: fixed;
      left: 50%;
      bottom: 18px;
      transform: translateX(-50%);
      background: rgba(10,12,18,.95);
      color: var(--text);
      border: 1px solid var(--line);
      padding: 10px 12px;
      border-radius: 14px;
      box-shadow: var(--shadow);
      display:none;
      z-index: 1100;
      font-weight: 800;
      font-size: 13px;
    }

    .mono{ font-variant-numeric: tabular-nums; }
  </style>
</head>
<body>
  <div class="app">
    <div class="topbar">
      <div class="brand">
        <div class="logo"></div>
        <div>
          <h1>MetaCartão</h1>
          <div class="sub">MVP (HTML) • dados salvos no navegador</div>
        </div>
      </div>

      <div class="monthNav">
        <button class="btn btnSmall btnGhost" id="btnPrev">◀</button>
        <div class="m mono" id="monthLabel">00/0000</div>
        <button class="btn btnSmall btnGhost" id="btnNext">▶</button>
        <button class="btn btnSmall btnGhost" id="btnToday">Hoje</button>
        <button class="btn btnSmall btnGhost" id="btnExport">Exportar</button>
        <label class="btn btnSmall btnGhost" style="cursor:pointer;">
          Importar
          <input id="fileImport" type="file" accept="application/json" style="display:none;">
        </label>
        <button class="btn btnSmall btnGhost" id="btnReset">Reset</button>
      </div>
    </div>

    <div class="tabs">
      <button class="tabBtn tDash"  id="tabDashboard">📊 Dashboard</button>
      <button class="tabBtn tGastos" id="tabGastos">🧾 Gastos</button>
      <button class="tabBtn tFixas"  id="tabFixas">🧩 Fixas</button>
      <button class="tabBtn tRec"    id="tabReceitas">💰 Receitas</button>
      <button class="tabBtn tCards"  id="tabCartoes">💳 Cartões</button>
    </div>

    <div id="view"></div>
  </div>

  <!-- Modals -->
  <div class="modalOverlay" id="modalOverlay">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modalHeader">
        <h3 id="modalTitle">Modal</h3>
        <button class="btn btnSmall btnGhost" id="modalClose">✕</button>
      </div>
      <div class="modalBody" id="modalBody"></div>
      <div class="modalFooter" id="modalFooter"></div>
    </div>
  </div>

  <div class="toast" id="toast"></div>

<script>
(() => {
  const STORAGE_KEY = "metacartao_data_v1";

  const DEFAULT_CARDS_LIMITS = {
    "Mercado Pago": 400,
    "Caixa": 400,
    "Magalu": 400,
    "BrB": 400,
    "Nubank": 0,
    "Inter": 0
  };

  const DEFAULT_INCOME_SOURCES = [
    "Salário 1",
    "Salário 2",
    "Hora besta",
    "Vale terno",
    "Rafa",
    "Setis",
    "Velinha",
    "Velinho",
    "Tia Mali",
    "Renda extra"
  ];

  const DEFAULT_FIXED_TEMPLATES = [
    ["Água", 380.00],
    ["Luz", 450.00],
    ["Internet", 33.33],
    ["Gás", 120.00],
    ["Aluguel", 280.00],
    ["Celular Pi", 50.00],
    ["Celular Mari", 75.00],
    ["Rafael", 190.00],
    ["Ajuda Velhinhos", 410.00],
    ["Empréstimo MP", 404.62],
    ["Velhinho consignado", 222.00],
    ["Passagem", 242.00],
    ["Cartão Mercado Pago", 400.00],
    ["Cartão Caixa", 400.00],
    ["Cartão Magazine Luiza", 400.00],
    ["Cartão BrB", 400.00],
  ];

  function seed(){
    return {
      categories: { META: { "Alimentação": 900.0 } },
      expense_categories: ["Alimentação","Despesas Fixas","Outros"],
      cards: { ...DEFAULT_CARDS_LIMITS },
      fixed_templates: DEFAULT_FIXED_TEMPLATES.map(([name, amount]) => ({ name, amount })),
      incomes: [],
      income_sources: [...DEFAULT_INCOME_SOURCES],
      transactions: []
      // transactions: { date:"dd/MM/yyyy", valor:Number, cat:String, card:String, desc:String, paid:Boolean }
      // incomes: { date:"dd/MM/yyyy", valor:Number, source:String, desc:String }
    };
  }

  function safeText(x){ try { return String(x ?? ""); } catch { return ""; } }

  function normalizeData(d){
    if (!d || typeof d !== "object") d = {};
    if (!d.categories || typeof d.categories !== "object") d.categories = { META: {} };
    if (!d.categories.META || typeof d.categories.META !== "object") d.categories.META = {};
    if (!("Alimentação" in d.categories.META)) d.categories.META["Alimentação"] = 900.0;
    d.categories.META["Alimentação"] = numOr(d.categories.META["Alimentação"], 900.0);

    if (!Array.isArray(d.expense_categories)) d.expense_categories = ["Alimentação","Despesas Fixas","Outros"];
    for (const catName of Object.keys(d.categories.META)){
      if (!d.expense_categories.includes(catName)) d.expense_categories.unshift(catName);
    }
    for (const base of ["Despesas Fixas","Outros"]){
      if (!d.expense_categories.includes(base)) d.expense_categories.push(base);
    }

    if (!d.cards || typeof d.cards !== "object" || Array.isArray(d.cards)) d.cards = {};
    for (const [k,v] of Object.entries(DEFAULT_CARDS_LIMITS)){
      if (!(k in d.cards)) d.cards[k] = v;
      d.cards[k] = numOr(d.cards[k], v);
    }

    if (!Array.isArray(d.fixed_templates)) d.fixed_templates = DEFAULT_FIXED_TEMPLATES.map(([name, amount]) => ({ name, amount }));
    d.fixed_templates = d.fixed_templates
      .map(it => {
        if (!it || typeof it !== "object") return null;
        const name = safeText(it.name).trim();
        if (!name) return null;
        const amount = numOr(it.amount, 0);
        return { name, amount };
      })
      .filter(Boolean);

    if (!Array.isArray(d.income_sources) || !d.income_sources.length) d.income_sources = [...DEFAULT_INCOME_SOURCES];

    if (!Array.isArray(d.incomes)) d.incomes = [];
    d.incomes = d.incomes
      .map(it => {
        if (!it || typeof it !== "object") return null;
        const date = safeText(it.date || it.data || fmt_ddmmyyyy(today()));
        const valor = numOr(it.valor ?? it.amount, 0);
        const source = safeText(it.source || it.origem || it.nome || "Receita");
        const desc = safeText(it.desc || it.descricao || "");
        return { date, valor, source, desc };
      })
      .filter(Boolean);

    if (!Array.isArray(d.transactions)) d.transactions = [];
    d.transactions = d.transactions
      .map(t => {
        if (!t || typeof t !== "object") return null;
        const date = safeText(t.date || t.data || fmt_ddmmyyyy(today()));
        const valor = numOr(t.valor, 0);
        const cat = safeText(t.cat || t.categoria || "Outros");
        const card = safeText(t.card || t.cartao || "Mercado Pago");
        const desc = safeText(t.desc || t.descricao || "");
        const paid = t.paid === true || t.pago === true;

        if (!(card in d.cards)) d.cards[card] = 0;
        if (!d.expense_categories.includes(cat)) d.expense_categories.push(cat);

        return { date, valor, cat, card, desc, paid };
      })
      .filter(Boolean);

    return d;
  }

  function load(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return normalizeData(seed());
      return normalizeData(JSON.parse(raw));
    }catch{
      return normalizeData(seed());
    }
  }

  function save(){
    data = normalizeData(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function brl(v){
    const vv = Number(v || 0);
    return vv.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
  }

  function numOr(v, fallback){
    const n = Number(String(v).replace(/\./g,"").replace(",","."));
    return Number.isFinite(n) ? n : fallback;
  }

  function today(){
    const d = new Date();
    d.setHours(0,0,0,0);
    return d;
  }

  function pad2(n){ return String(n).padStart(2,"0"); }

  function fmt_ddmmyyyy(d){
    return `${pad2(d.getDate())}/${pad2(d.getMonth()+1)}/${d.getFullYear()}`;
  }

  function parse_ddmmyyyy(s){
    const t = String(s || "").trim();
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(t);
    if (!m) return null;
    const dd = Number(m[1]), mm = Number(m[2]), yy = Number(m[3]);
    const d = new Date(yy, mm-1, dd);
    if (d.getFullYear() !== yy || (d.getMonth()+1) !== mm || d.getDate() !== dd) return null;
    d.setHours(0,0,0,0);
    return d;
  }

  function monthYearStr(m, y){ return `${pad2(m)}/${y}`; }

  function addMonths(d, n){
    const nd = new Date(d);
    const day = nd.getDate();
    nd.setDate(1);
    nd.setMonth(nd.getMonth() + n);
    const last = new Date(nd.getFullYear(), nd.getMonth()+1, 0).getDate();
    nd.setDate(Math.min(day, last));
    nd.setHours(0,0,0,0);
    return nd;
  }

  function sameMonth(d, m, y){
    return d.getMonth()+1 === m && d.getFullYear() === y;
  }

  function parseInstallments(text){
    const t = String(text || "").trim();
    if (!t || !t.includes("/")) return [null, null];
    const parts = t.split("/");
    if (parts.length !== 2) return [null, null];
    const idx = Number(parts[0].trim());
    const tot = Number(parts[1].trim());
    if (!Number.isInteger(idx) || !Number.isInteger(tot)) return [null, null];
    if (tot <= 0 || idx <= 0 || idx > tot) return [null, null];
    return [idx, tot];
  }

  function splitInstallmentValues(total, tot){
    const base = Math.round((total / tot) * 100) / 100;
    const vals = Array(tot).fill(base);
    const last = Math.round((total - base * (tot - 1)) * 100) / 100;
    vals[tot - 1] = last;
    return vals;
  }

  function monthTotalExpenses(m, y){
    return data.transactions.reduce((acc, t) => {
      const d = parse_ddmmyyyy(t.date) || today();
      if (sameMonth(d, m, y)) acc += Number(t.valor || 0);
      return acc;
    }, 0);
  }

  function monthTotalIncomes(m, y){
    return data.incomes.reduce((acc, it) => {
      const d = parse_ddmmyyyy(it.date) || today();
      if (sameMonth(d, m, y)) acc += Number(it.valor || 0);
      return acc;
    }, 0);
  }

  function monthTotalForCategory(cat, m, y){
    return data.transactions.reduce((acc, t) => {
      if (t.cat !== cat) return acc;
      const d = parse_ddmmyyyy(t.date) || today();
      if (sameMonth(d, m, y)) acc += Number(t.valor || 0);
      return acc;
    }, 0);
  }

  function monthTotalForCard(card, m, y){
    return data.transactions.reduce((acc, t) => {
      if (t.card !== card) return acc;
      const d = parse_ddmmyyyy(t.date) || today();
      if (sameMonth(d, m, y)) acc += Number(t.valor || 0);
      return acc;
    }, 0);
  }

  function monthTransactions(m, y){
    const txs = data.transactions.filter(t => {
      const d = parse_ddmmyyyy(t.date) || today();
      return sameMonth(d, m, y);
    });
    txs.reverse();
    return txs;
  }

  function monthTransactionsForCard(card, m, y){
    const txs = data.transactions.filter(t => {
      if (t.card !== card) return false;
      const d = parse_ddmmyyyy(t.date) || today();
      return sameMonth(d, m, y);
    });
    txs.reverse();
    return txs;
  }

  function findFixedTxForMonth(fixedName){
    const name = String(fixedName || "").trim().toLowerCase();
    for (const t of data.transactions){
      const d = parse_ddmmyyyy(t.date) || today();
      if (!sameMonth(d, state.m, state.y)) continue;
      if (t.cat !== "Despesas Fixas") continue;
      const desc = String(t.desc || "").trim().toLowerCase();
      if (desc.startsWith(name)) return t;
    }
    return null;
  }

  // UI helpers
  const view = document.getElementById("view");
  const monthLabel = document.getElementById("monthLabel");

  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalFooter = document.getElementById("modalFooter");
  const modalClose = document.getElementById("modalClose");
  const toastEl = document.getElementById("toast");

  function toast(msg){
    toastEl.textContent = msg;
    toastEl.style.display = "block";
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.style.display = "none", 2200);
  }

  function openModal(title, bodyNode, footerButtons){
    modalTitle.textContent = title;
    modalBody.innerHTML = "";
    modalBody.appendChild(bodyNode);
    modalFooter.innerHTML = "";
    for (const btn of footerButtons) modalFooter.appendChild(btn);
    modalOverlay.style.display = "flex";
  }

  function closeModal(){
    modalOverlay.style.display = "none";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function el(tag, attrs={}, children=[]){
    const n = document.createElement(tag);
    for (const [k,v] of Object.entries(attrs)){
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const c of children){
      if (c == null) continue;
      if (typeof c === "string") n.appendChild(document.createTextNode(c));
      else n.appendChild(c);
    }
    return n;
  }

  function btn(text, cls, onClick){
    return el("button", { class: `btn ${cls||""}`, onclick: onClick }, [text]);
  }

  function btnSmall(text, cls, onClick){
    return el("button", { class: `btn btnSmall ${cls||""}`, onclick: onClick }, [text]);
  }

  function select(options, value){
    const s = el("select");
    for (const opt of options){
      s.appendChild(el("option", { value: opt }, [opt]));
    }
    s.value = value;
    return s;
  }

  // App state
  let data = load();
  const now = today();
  const state = { m: now.getMonth()+1, y: now.getFullYear(), route: "dashboard", cardDetail: null };

  function setMonth(m, y){
    state.m = m; state.y = y;
    monthLabel.textContent = monthYearStr(state.m, state.y);
    render();
  }

  function go(route, payload=null){
    state.route = route;
    state.cardDetail = payload;
    render();
  }

  function exportJSON(){
    const blob = new Blob([JSON.stringify(data, null, 2)], { type:"application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `metacartao_${monthYearStr(state.m, state.y).replace("/","-")}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function importJSONFile(file){
    const reader = new FileReader();
    reader.onload = () => {
      try{
        const obj = JSON.parse(String(reader.result || "{}"));
        data = normalizeData(obj);
        save();
        toast("Importado com sucesso.");
        render();
      }catch{
        toast("Arquivo inválido.");
      }
    };
    reader.readAsText(file);
  }

  // Header buttons
  document.getElementById("btnPrev").addEventListener("click", () => {
    const d = new Date(state.y, state.m-1, 1);
    const nd = addMonths(d, -1);
    setMonth(nd.getMonth()+1, nd.getFullYear());
  });
  document.getElementById("btnNext").addEventListener("click", () => {
    const d = new Date(state.y, state.m-1, 1);
    const nd = addMonths(d, +1);
    setMonth(nd.getMonth()+1, nd.getFullYear());
  });
  document.getElementById("btnToday").addEventListener("click", () => {
    const t = today();
    setMonth(t.getMonth()+1, t.getFullYear());
  });
  document.getElementById("btnExport").addEventListener("click", exportJSON);
  document.getElementById("btnReset").addEventListener("click", () => {
    if (!confirm("Resetar todos os dados?")) return;
    data = normalizeData(seed());
    save();
    toast("Dados resetados.");
    render();
  });
  document.getElementById("fileImport").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (file) importJSONFile(file);
  });

  // Tabs
  document.getElementById("tabDashboard").addEventListener("click", () => go("dashboard"));
  document.getElementById("tabGastos").addEventListener("click", () => go("gastos"));
  document.getElementById("tabFixas").addEventListener("click", () => go("fixas"));
  document.getElementById("tabReceitas").addEventListener("click", () => go("receitas"));
  document.getElementById("tabCartoes").addEventListener("click", () => go("cartoes"));

  // Popups
  function popupAddTransaction(goBack="dashboard"){
    const wrap = el("div");
    const form = el("div", { class:"form" });

    const iDate = el("input", { value: fmt_ddmmyyyy(today()), placeholder:"dd/MM/aaaa" });
    const iDesc = el("input", { placeholder:"Descrição" });
    const iVal  = el("input", { placeholder:"Valor total (ex: 1000,00)" });
    const iParc = el("input", { placeholder:"Parcelas opcional (ex: 1/10)" });

    const cats = Array.isArray(data.expense_categories) && data.expense_categories.length ? data.expense_categories : ["Outros"];
    const sCat = select(cats, cats[0]);

    const cardNames = Object.keys(data.cards || {});
    if (!cardNames.length){
      data.cards = { "Mercado Pago": 0 };
      cardNames.push("Mercado Pago");
    }
    const sCard = select(cardNames, cardNames[0]);

    form.appendChild(el("label", {}, ["Data", iDate]));
    form.appendChild(el("label", {}, ["Descrição", iDesc]));
    form.appendChild(el("label", {}, ["Valor total", iVal]));
    form.appendChild(el("label", {}, ["Parcelas (opcional)", iParc]));
    form.appendChild(el("label", {}, ["Categoria", sCat]));
    form.appendChild(el("label", {}, ["Cartão", sCard]));

    wrap.appendChild(form);

    const bCancel = btnSmall("Cancelar", "btnGhost", () => closeModal());
    const bSave = btnSmall("Salvar", "btnGreen", () => {
      const d = parse_ddmmyyyy(iDate.value) || today();
      const total = numOr(iVal.value, NaN);
      const desc = String(iDesc.value || "").trim();
      const cat = sCat.value;
      const card = sCard.value;

      if (!Number.isFinite(total) || !desc){
        toast("Preencha valor e descrição.");
        return;
      }

      const [idx, tot] = parseInstallments(iParc.value);

      if (tot == null){
        data.transactions.push({
          date: fmt_ddmmyyyy(d),
          valor: Number(total),
          cat, card, desc,
          paid: false
        });
      }else{
        const vals = splitInstallmentValues(Number(total), tot);
        const startIndex = idx;
        const remaining = tot - startIndex + 1;

        for (let i=0; i<remaining; i++){
          const parcelaNum = startIndex + i;
          const dd = addMonths(d, i);
          data.transactions.push({
            date: fmt_ddmmyyyy(dd),
            valor: Number(vals[parcelaNum - 1]),
            cat, card,
            desc: `${desc} (${parcelaNum}/${tot})`,
            paid: false
          });
        }
      }

      save();
      closeModal();
      go(goBack);
      toast("Gasto salvo.");
    });

    openModal("Novo gasto", wrap, [bCancel, bSave]);
  }

  function popupAddIncome(goBack="dashboard"){
    const wrap = el("div");
    const form = el("div", { class:"form" });

    const iDate = el("input", { value: fmt_ddmmyyyy(today()), placeholder:"dd/MM/aaaa" });
    const sources = Array.isArray(data.income_sources) && data.income_sources.length ? data.income_sources : ["Salário 1"];
    const sSrc = select(sources, sources[0]);

    const iVal  = el("input", { placeholder:"Valor (ex: 2500,00)" });
    const iDesc = el("input", { placeholder:"Observação (opcional)" });

    form.appendChild(el("label", {}, ["Data", iDate]));
    form.appendChild(el("label", {}, ["Fonte", sSrc]));
    form.appendChild(el("label", {}, ["Valor", iVal]));
    form.appendChild(el("label", {}, ["Obs (opcional)", iDesc]));

    wrap.appendChild(form);

    const bCancel = btnSmall("Cancelar", "btnGhost", () => closeModal());
    const bSave = btnSmall("Salvar", "btnOrange", () => {
      const d = parse_ddmmyyyy(iDate.value) || today();
      const v = numOr(iVal.value, NaN);
      if (!Number.isFinite(v)){
        toast("Preencha o valor.");
        return;
      }
      data.incomes.push({
        date: fmt_ddmmyyyy(d),
        valor: Number(v),
        source: sSrc.value,
        desc: String(iDesc.value || "").trim()
      });
      save();
      closeModal();
      go(goBack);
      toast("Receita salva.");
    });

    openModal("Nova receita", wrap, [bCancel, bSave]);
  }

  // Views
  function render(){
    save();
    monthLabel.textContent = monthYearStr(state.m, state.y);
    view.innerHTML = "";

    if (state.route === "dashboard") view.appendChild(renderDashboard());
    else if (state.route === "gastos") view.appendChild(renderGastos());
    else if (state.route === "fixas") view.appendChild(renderFixas());
    else if (state.route === "receitas") view.appendChild(renderReceitas());
    else if (state.route === "cartoes") view.appendChild(renderCartoes());
    else if (state.route === "card_detail") view.appendChild(renderCardDetail(state.cardDetail));
    else view.appendChild(renderDashboard());
  }

  function renderDashboard(){
    const root = el("div", { class:"grid" });

    // Left: metas por categoria + resumo
    const p1 = el("div", { class:"panel" });
    p1.appendChild(
      el("div", { class:"panelHeader" }, [
        el("div", {}, [
          el("div", { class:"panelTitle" }, ["📊 Dashboard • ", monthYearStr(state.m, state.y)]),
          el("div", { class:"panelSub" }, ["Resumo mensal + metas"])
        ]),
        el("div", { class:"row" }, [
          btnSmall("+ Gasto", "btnGreen", () => popupAddTransaction("dashboard")),
          btnSmall("+ Receita", "btnOrange", () => popupAddIncome("dashboard")),
        ])
      ])
    );

    const inc = monthTotalIncomes(state.m, state.y);
    const exp = monthTotalExpenses(state.m, state.y);
    const saldo = inc - exp;

    const body = el("div", { class:"panelBody" });

    body.appendChild(el("div", { class:"kpi" }, [
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Receitas"]),
        el("div", { class:"value mono" }, [brl(inc)])
      ]),
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Despesas"]),
        el("div", { class:"value mono" }, [brl(exp)])
      ]),
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Saldo"]),
        el("div", { class:"value mono" }, [brl(saldo)])
      ]),
    ]));

    body.appendChild(el("div", { class:"divider" }));
    body.appendChild(el("div", { class:"panelTitle" }, ["Metas por categoria"]));

    const meta = (data.categories && data.categories.META) ? data.categories.META : {};
    const list = el("div", { class:"list" });

    const keys = Object.keys(meta || {});
    if (!keys.length){
      list.appendChild(el("div", { class:"item" }, [el("div", { class:"muted" }, ["(Sem metas)"])]));
    }else{
      for (const [cat, metaValRaw] of Object.entries(meta)){
        const metaVal = numOr(metaValRaw, 0);
        const gastou = monthTotalForCategory(cat, state.m, state.y);
        const restam = metaVal - gastou;

        const pct = metaVal > 0 ? Math.max(0, Math.min(100, (gastou / metaVal) * 100)) : 0;

        const item = el("div", { class:"item" });
        const top = el("div", { class:"itemTop" }, [
          el("div", {}, [
            el("p", { class:"itemTitle" }, [cat]),
            el("div", { class:"itemMeta mono" }, [`Meta: ${brl(metaVal)} • Gastou: ${brl(gastou)}`]),
          ]),
          el("div", { class:"chip mono" }, [`Restam: ${brl(restam)}`])
        ]);

        const prog = el("div", { class:"progressWrap" }, [
          el("div", { class:"progressBar", style:`width:${pct}%;` })
        ]);

        item.appendChild(top);
        item.appendChild(prog);
        list.appendChild(item);
      }
    }

    body.appendChild(list);
    p1.appendChild(body);

    // Right: metas por cartão
    const p2 = el("div", { class:"panel" });
    p2.appendChild(
      el("div", { class:"panelHeader" }, [
        el("div", {}, [
          el("div", { class:"panelTitle" }, ["💳 Metas por cartão"]),
          el("div", { class:"panelSub" }, ["Toque para ver detalhes"])
        ])
      ])
    );

    const b2 = el("div", { class:"panelBody" });
    const list2 = el("div", { class:"list" });

    const cards = data.cards || {};
    for (const [cardName, limitRaw] of Object.entries(cards)){
      const limit = numOr(limitRaw, 0);
      const gastou = monthTotalForCard(cardName, state.m, state.y);
      const restam = limit - gastou;

      const pct = limit > 0 ? Math.max(0, Math.min(100, (gastou / limit) * 100)) : 0;

      const item = el("div", { class:"item" });
      item.appendChild(el("div", { class:"itemTop" }, [
        el("div", {}, [
          el("p", { class:"itemTitle" }, [cardName]),
          el("div", { class:"itemMeta mono" }, [`${brl(gastou)} / ${brl(limit)}`]),
        ]),
        el("button", {
          class:"btn btnSmall btnDark",
          onclick: () => go("card_detail", cardName)
        }, ["Ver"])
      ]));
      item.appendChild(el("div", { class:"progressWrap" }, [
        el("div", { class:"progressBar", style:`width:${pct}%;` })
      ]));
      item.appendChild(el("div", { class:"itemMeta mono" }, [`Restam: ${brl(restam)}`]));
      list2.appendChild(item);
    }

    b2.appendChild(list2);
    p2.appendChild(b2);

    root.appendChild(p1);
    root.appendChild(p2);

    return root;
  }

  function renderGastos(){
    const p = el("div", { class:"panel" });

    p.appendChild(
      el("div", { class:"panelHeader" }, [
        el("div", {}, [
          el("div", { class:"panelTitle" }, ["🧾 Gastos • ", monthYearStr(state.m, state.y)]),
          el("div", { class:"panelSub" }, ["Toggle Pago/Não pago"])
        ]),
        btnSmall("+ Novo", "btnGreen", () => popupAddTransaction("gastos"))
      ])
    );

    const body = el("div", { class:"panelBody" });
    const txs = monthTransactions(state.m, state.y);

    if (!txs.length){
      body.appendChild(el("div", { class:"item" }, [el("div", { class:"muted" }, ["Sem gastos neste mês."])]));
      p.appendChild(body);
      return p;
    }

    const list = el("div", { class:"list" });

    txs.forEach((t) => {
      const paid = t.paid === true;
      const paidTxt = paid ? "✅ Pago" : "⬜️ Pagar";

      const item = el("div", { class:"item" });
      item.appendChild(el("div", { class:"itemTop" }, [
        el("div", {}, [
          el("p", { class:"itemTitle mono" }, [`${t.date} • ${t.cat} • ${t.card} • ${brl(t.valor)}`]),
          el("div", { class:"itemMeta" }, [t.desc || ""])
        ]),
        el("span", { class:"chip" }, [paidTxt])
      ]));

      const actions = el("div", { class:"row", style:"margin-top:10px;" });
      actions.appendChild(
        btnSmall(paid ? "Marcar Pagar" : "Marcar Pago", paid ? "btnRed" : "btnGreen", () => {
          t.paid = !paid;
          save();
          render();
        })
      );
      actions.appendChild(
        btnSmall("Excluir", "btnGhost", () => {
          if (!confirm("Excluir este gasto?")) return;
          const idx = data.transactions.indexOf(t);
          if (idx >= 0) data.transactions.splice(idx, 1);
          save();
          render();
        })
      );

      item.appendChild(actions);
      list.appendChild(item);
    });

    body.appendChild(list);
    p.appendChild(body);
    return p;
  }

  function renderFixas(){
    const p = el("div", { class:"panel" });

    p.appendChild(
      el("div", { class:"panelHeader" }, [
        el("div", {}, [
          el("div", { class:"panelTitle" }, ["🧩 Fixas • ", monthYearStr(state.m, state.y)]),
          el("div", { class:"panelSub" }, ["Marcar pago gera/atualiza gasto do mês"])
        ]),
      ])
    );

    const body = el("div", { class:"panelBody" });
    const templates = Array.isArray(data.fixed_templates) ? data.fixed_templates : [];

    if (!templates.length){
      body.appendChild(el("div", { class:"item" }, [el("div", { class:"muted" }, ["Sem despesas fixas cadastradas."])]));
      p.appendChild(body);
      return p;
    }

    const list = el("div", { class:"list" });

    templates.forEach((it) => {
      const nm = safeText(it.name).trim();
      const amt = numOr(it.amount, 0);
      const tx = findFixedTxForMonth(nm);
      const paid = tx && tx.paid === true;

      const item = el("div", { class:"item" });
      item.appendChild(el("div", { class:"itemTop" }, [
        el("div", {}, [
          el("p", { class:"itemTitle" }, [`${nm} • ${brl(amt)}`]),
          el("div", { class:"itemMeta" }, [paid ? "✅ Pago (mês)" : "⬜️ Não pago (mês)"])
        ]),
        el("span", { class:"chip" }, [paid ? "Pago" : "Pendente"])
      ]));

      const actions = el("div", { class:"row", style:"margin-top:10px;" });
      actions.appendChild(
        btnSmall(paid ? "Marcar NÃO pago" : "Marcar PAGO", paid ? "btnRed" : "btnGreen", () => {
          const existing = findFixedTxForMonth(nm);
          if (!existing){
            data.transactions.push({
              date: fmt_ddmmyyyy(today()),
              valor: Number(amt),
              cat: "Despesas Fixas",
              card: "Mercado Pago",
              desc: nm,
              paid: true
            });
          }else{
            existing.paid = !(existing.paid === true);
          }
          save();
          render();
        })
      );
      actions.appendChild(
        btnSmall("Ver em Gastos", "btnGhost", () => go("gastos"))
      );

      item.appendChild(actions);
      list.appendChild(item);
    });

    body.appendChild(list);
    p.appendChild(body);
    return p;
  }

  function renderReceitas(){
    const p = el("div", { class:"panel" });

    p.appendChild(
      el("div", { class:"panelHeader" }, [
        el("div", {}, [
          el("div", { class:"panelTitle" }, ["💰 Receitas • ", monthYearStr(state.m, state.y)]),
          el("div", { class:"panelSub" }, ["Adicionar + listar receitas do mês"])
        ]),
        btnSmall("+ Nova receita", "btnOrange", () => popupAddIncome("receitas"))
      ])
    );

    const body = el("div", { class:"panelBody" });

    const total = monthTotalIncomes(state.m, state.y);
    body.appendChild(el("div", { class:"kpi" }, [
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Total do mês"]),
        el("div", { class:"value mono" }, [brl(total)])
      ]),
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Fontes (atalho)"]),
        el("div", { class:"value", style:"font-size:14px; font-weight:900; line-height:1.25; margin-top:6px;" }, [
          (data.income_sources || []).slice(0,4).join(" • ") || "—"
        ])
      ]),
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Dica"]),
        el("div", { class:"value", style:"font-size:14px; font-weight:900; line-height:1.25; margin-top:6px;" }, [
          "Exportar/Importar no topo"
        ])
      ]),
    ]));

    body.appendChild(el("div", { class:"divider" }));

    const incs = (data.incomes || []).filter(it => {
      const d = parse_ddmmyyyy(it.date) || today();
      return sameMonth(d, state.m, state.y);
    }).slice().reverse();

    if (!incs.length){
      body.appendChild(el("div", { class:"item" }, [el("div", { class:"muted" }, ["Sem receitas neste mês."])]));
      p.appendChild(body);
      return p;
    }

    const list = el("div", { class:"list" });

    incs.forEach((it) => {
      const item = el("div", { class:"item" });
      item.appendChild(el("div", { class:"itemTop" }, [
        el("div", {}, [
          el("p", { class:"itemTitle mono" }, [`${it.date} • ${it.source} • ${brl(it.valor)}`]),
          el("div", { class:"itemMeta" }, [it.desc || ""])
        ]),
        btnSmall("Excluir", "btnGhost", () => {
          if (!confirm("Excluir esta receita?")) return;
          const idx = data.incomes.indexOf(it);
          if (idx >= 0) data.incomes.splice(idx, 1);
          save();
          render();
        })
      ]));
      list.appendChild(item);
    });

    body.appendChild(list);
    p.appendChild(body);
    return p;
  }

  function renderCartoes(){
    const p = el("div", { class:"panel" });

    p.appendChild(
      el("div", { class:"panelHeader" }, [
        el("div", {}, [
          el("div", { class:"panelTitle" }, ["💳 Cartões • ", monthYearStr(state.m, state.y)]),
          el("div", { class:"panelSub" }, ["Toque para abrir detalhes"])
        ]),
      ])
    );

    const body = el("div", { class:"panelBody" });
    const list = el("div", { class:"list" });

    for (const [cardName, limitRaw] of Object.entries(data.cards || {})){
      const gastou = monthTotalForCard(cardName, state.m, state.y);
      const limit = numOr(limitRaw, 0);
      const rest = limit - gastou;

      const item = el("div", { class:"item" });
      item.appendChild(el("div", { class:"itemTop" }, [
        el("div", {}, [
          el("p", { class:"itemTitle" }, [cardName]),
          el("div", { class:"itemMeta mono" }, [`Gastou ${brl(gastou)} • Restam ${brl(rest)}`]),
        ]),
        btnSmall("Abrir", "btnDark", () => go("card_detail", cardName))
      ]));

      list.appendChild(item);
    }

    body.appendChild(list);
    p.appendChild(body);
    return p;
  }

  function renderCardDetail(cardName){
    const p = el("div", { class:"panel" });

    p.appendChild(
      el("div", { class:"panelHeader" }, [
        el("div", { class:"row" }, [
          btnSmall("← Voltar", "btnGhost", () => go("dashboard")),
          el("div", {}, [
            el("div", { class:"panelTitle" }, [`${cardName} • ${monthYearStr(state.m, state.y)}`]),
            el("div", { class:"panelSub" }, ["Compras do mês neste cartão"])
          ])
        ]),
        btnSmall("+ Gasto", "btnGreen", () => popupAddTransaction("card_detail"))
      ])
    );

    const body = el("div", { class:"panelBody" });
    const total = monthTotalForCard(cardName, state.m, state.y);

    body.appendChild(el("div", { class:"kpi" }, [
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Total do mês"]),
        el("div", { class:"value mono" }, [brl(total)])
      ]),
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Limite"]),
        el("div", { class:"value mono" }, [brl(numOr((data.cards||{})[cardName], 0))])
      ]),
      el("div", { class:"kpiCard" }, [
        el("div", { class:"label" }, ["Restante"]),
        el("div", { class:"value mono" }, [brl(numOr((data.cards||{})[cardName], 0) - total)])
      ]),
    ]));

    body.appendChild(el("div", { class:"divider" }));

    const txs = monthTransactionsForCard(cardName, state.m, state.y);
    if (!txs.length){
      body.appendChild(el("div", { class:"item" }, [el("div", { class:"muted" }, ["Sem compras nesse cartão no mês."])]));
      p.appendChild(body);
      return p;
    }

    const list = el("div", { class:"list" });

    txs.forEach((t) => {
      const paid = t.paid === true;
      const tag = paid ? "✅" : "⬜️";

      const item = el("div", { class:"item" });
      item.appendChild(el("div", { class:"itemTop" }, [
        el("div", {}, [
          el("p", { class:"itemTitle mono" }, [`${tag} ${t.date} • ${t.cat} • ${brl(t.valor)}`]),
          el("div", { class:"itemMeta" }, [t.desc || ""])
        ]),
        btnSmall(paid ? "Marcar Pagar" : "Marcar Pago", paid ? "btnRed" : "btnGreen", () => {
          t.paid = !paid;
          save();
          render();
        })
      ]));
      list.appendChild(item);
    });

    body.appendChild(list);
    p.appendChild(body);
    return p;
  }

  // Initial
  setMonth(state.m, state.y);
  go("dashboard");

})();
</script>
</body>
</html>