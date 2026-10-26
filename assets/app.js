// Router: #page loads content/<page>.md, renders it with marked, then draws mermaid diagrams.
const PAGES = ["home", "analysis", "pyqs", "style", "unit1", "unit2", "unit3", "unit4", "unit5", "mock1", "mock2", "mock3", "lastnight"];
const doc = document.getElementById("doc");
const nav = document.getElementById("nav");
const cache = {};

function isDark() {
  const t = document.documentElement.dataset.theme;
  return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
}

function initMermaid() {
  mermaid.initialize({ startOnLoad: false, theme: isDark() ? "dark" : "neutral", securityLevel: "strict", flowchart: { htmlLabels: false } });
}

// ```mermaid fences become <pre class="mermaid">; ::: ans / ::: tip blocks become styled boxes.
// On phones, left-to-right flowcharts are redrawn top-to-bottom so their labels stay readable.
const renderer = new marked.Renderer();
const baseCode = renderer.code.bind(renderer);
renderer.code = (code, lang, esc) => {
  if (lang !== "mermaid") return baseCode(code, lang, esc);
  // Mermaid shows a literal "&amp;" for "&" in labels, so spell it out.
  let src = code.replace(/\s*&\s*/g, " and ");
  if (innerWidth < 700) src = src.replace(/^(flowchart|graph)\s+LR/m, "$1 TB");
  return `<div class="diagram"><pre class="mermaid">${src.replace(/</g, "&lt;")}</pre></div>`;
};
marked.use({ renderer, gfm: true });

function boxes(md) {
  return md.replace(/^::: ?(\w+)(?: (.*))?\n([\s\S]*?)^:::[ \t]*$/gm, (_, kind, title, body) =>
    `<div class="box box-${kind}">${title ? `<p class="box-t">${title}</p>` : ""}\n\n${body}\n\n</div>`);
}

async function show(page) {
  if (!PAGES.includes(page)) page = "home";
  nav.querySelectorAll("a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + page));
  nav.classList.remove("open");
  document.getElementById("menuBtn").setAttribute("aria-expanded", "false");
  try {
    cache[page] ??= await fetch(`content/${page}.md`, { cache: "no-cache" }).then(r => { if (!r.ok) throw r.status; return r.text(); });
    doc.innerHTML = marked.parse(boxes(cache[page]));
  } catch (e) {
    doc.innerHTML = `<p>Could not load this page (${e}). Check your connection and reload.</p>`;
    return;
  }
  doc.querySelectorAll("h2, h3").forEach(h => { if (!h.id) h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60); });
  window.scrollTo(0, 0);
  initMermaid();
  try { await mermaid.run({ nodes: doc.querySelectorAll("pre.mermaid") }); } catch (e) { console.warn(e); }
  const title = doc.querySelector("h1");
  document.title = (title ? title.textContent + " · " : "") + "DIP End-Sem Prep";
}

function route() { show(location.hash.slice(1).split("/")[0] || "home"); }

document.getElementById("menuBtn").onclick = e => {
  const open = nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", String(open));
};
document.getElementById("themeBtn").onclick = () => {
  const next = isDark() ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("dip-theme", next); } catch (e) {}
  route();
};
addEventListener("hashchange", route);
route();
