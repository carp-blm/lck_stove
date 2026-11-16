(function () {
  const D = window.STOVE;
  const POS_ORDER = { TOP: 0, JGL: 1, MID: 2, BOT: 3, SUP: 4 };
  const STAFF_ORDER = { "감독": 0, "코치": 1, "전략코치": 1, "전력분석관": 2 };
  // 계약 종료 연도가 이 값 이하이면 FA (기본: 다음 시즌 - 1)
  const FA_YEAR = D.season - 1;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function status(until) {
    if (until == null || until === "") return { cls: "", label: "–" };
    const left = Number(until) - FA_YEAR;
    if (left <= 0) return { cls: "fa", label: "FA" };
    if (left === 1) return { cls: "y1", label: "1년" };
    if (left === 2) return { cls: "y2", label: "2년" };
    return { cls: "y3", label: left + "년" };
  }

  function row(p, label) {
    const st = status(p.until);
    const classes = ["row"];
    if (st.cls) classes.push("st-" + st.cls);
    if (p.rumor) classes.push("rumor");
    const until = p.until && st.cls !== "fa" ? `<span class="until">~${esc(p.until)}</span>` : "";
    const chip = st.cls ? `<span class="chip ${st.cls}">${st.label}</span>` : `<span class="chip" style="color:var(--dim)">–</span>`;
    return `<div class="${classes.join(" ")}">
      <span class="pos">${esc(label)}</span>
      <span class="who">
        <span class="nick">${esc(p.nick)}</span>
        ${p.name ? `<span class="real">${esc(p.name)}</span>` : ""}
        ${p.note ? `<span class="note">${esc(p.note)}</span>` : ""}
      </span>
      <span class="ct">${until}${chip}</span>
    </div>`;
  }

  const byPos = (a, b) => (POS_ORDER[a.pos] ?? 9) - (POS_ORDER[b.pos] ?? 9);
  const byRole = (a, b) => (STAFF_ORDER[a.role] ?? 9) - (STAFF_ORDER[b.role] ?? 9);

  let secondName = "";
  function group(title, list, kind, cls) {
    if (!list || !list.length) return "";
    const sorted = [...list].sort(kind === "staff" ? byRole : byPos);
    const rows = sorted.map((p) => row(p, kind === "staff" ? p.role : p.pos)).join("");
    const sub = cls === "second" && secondName ? ` · ${esc(secondName)}` : "";
    return `<section class="group ${cls}"><div class="group-title">${esc(title)}${sub}</div>${rows}</section>`;
  }

  function counts(list) {
    let fa = 0, ok = 0;
    (list || []).forEach((p) => {
      if (p.rumor) return;
      const s = status(p.until).cls;
      if (s === "fa") fa++; else if (s) ok++;
    });
    return { fa, ok };
  }

  function render() {
    const root = document.getElementById("teams");
    let totFa = 0, totOk = 0;
    root.innerHTML = D.teams.map((t) => {
      const c = counts(t.players);
      secondName = t.second ? t.second.name : "";
      totFa += c.fa; totOk += c.ok;
      return `<article class="team" style="--team:${esc(t.color || "#888")}" id="${esc(t.id)}">
        <header class="team-head">
          <img class="team-logo" src="${esc(t.logo)}" alt="${esc(t.name)}" loading="lazy"
               onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'team-logo fallback',textContent:'${esc(t.id.toUpperCase())}'}))">
          <div>
            <div class="team-name">${esc(t.name)}</div>
          </div>
          <div class="team-count">
            <span class="chip fa">FA ${c.fa}</span>
            <span class="chip y2">계약 ${c.ok}</span>
          </div>
        </header>
        ${group("1군", t.players, "player", "first")}
        ${group("코치진", t.staff, "staff", "staff")}
        ${t.second ? group("2군", t.second.players, "player", "second") : ""}
        ${t.second ? group("2군 코치진", t.second.staff, "staff", "staff second") : ""}
      </article>`;
    }).join("");

    document.getElementById("season").textContent = D.season;
    document.getElementById("summary").innerHTML =
      `<span class="s-fa">1군 FA<b>${totFa}</b></span><span>계약 유지<b>${totOk}</b></span>`;
    document.getElementById("updated").textContent = D.updated ? `업데이트 ${D.updated}` : "";
  }

  // ---------- 토글 (상태는 브라우저에 저장) ----------
  const OPTS = { "opt-rumor": "show-rumor", "opt-staff": "show-staff", "opt-name": "show-name", "opt-second": "show-second", "opt-fa": "only-fa" };
  const KEY = "lck-stove-opts";
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { saved = {}; }

  Object.entries(OPTS).forEach(([id, cls]) => {
    const el = document.getElementById(id);
    if (id in saved) el.checked = !!saved[id];
    const apply = () => document.body.classList.toggle(cls, el.checked);
    apply();
    el.addEventListener("change", () => {
      apply();
      saved[id] = el.checked;
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) { /* ignore */ }
    });
  });

  render();
})();
