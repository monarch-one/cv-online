/**
 * CV Online — interactions + i18n
 * Edit CONTENT to replace placeholders with your data.
 */

const CONTENT = {
  name: "Your Name",
  email: "hello@yourname.dev",
  location: { es: "Madrid, ES", en: "Madrid, ES" },
  meta: {
    es: { loc: "Madrid, ES", tz: "UTC+1", stack: "TypeScript · Systems" },
    en: { loc: "Madrid, ES", tz: "UTC+1", stack: "TypeScript · Systems" },
  },
  roles: {
    es: [
      "Software Engineer",
      "Product-minded builder",
      "Systems & interfaces",
    ],
    en: [
      "Software Engineer",
      "Product-minded builder",
      "Systems & interfaces",
    ],
  },
  experience: {
    es: [
      {
        hash: "a3f2c1",
        role: "Senior Software Engineer",
        company: "Acme Labs",
        period: "2023 — presente",
        desc: "Lidero el diseño de sistemas de producto. Arquitectura frontend, DX y calidad de entrega end-to-end.",
      },
      {
        hash: "91b0e4",
        role: "Software Engineer",
        company: "Northwind",
        period: "2020 — 2023",
        desc: "Construí plataformas internas y APIs de alto tráfico. Reduje latencia p95 un 40% en flujos críticos.",
      },
      {
        hash: "77c8d2",
        role: "Frontend Engineer",
        company: "Studio Pixel",
        period: "2018 — 2020",
        desc: "Interfaces de alta fidelidad para clientes de producto. Design systems y performance web.",
      },
    ],
    en: [
      {
        hash: "a3f2c1",
        role: "Senior Software Engineer",
        company: "Acme Labs",
        period: "2023 — present",
        desc: "Lead product systems design. Frontend architecture, DX, and end-to-end delivery quality.",
      },
      {
        hash: "91b0e4",
        role: "Software Engineer",
        company: "Northwind",
        period: "2020 — 2023",
        desc: "Built internal platforms and high-traffic APIs. Cut p95 latency by 40% on critical paths.",
      },
      {
        hash: "77c8d2",
        role: "Frontend Engineer",
        company: "Studio Pixel",
        period: "2018 — 2020",
        desc: "High-fidelity interfaces for product clients. Design systems and web performance.",
      },
    ],
  },
  skills: {
    es: [
      {
        title: "languages",
        items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"],
      },
      {
        title: "platform",
        items: ["React", "Node.js", "Next.js", "PostgreSQL", "AWS"],
      },
      {
        title: "craft",
        items: ["System design", "UI engineering", "DX", "Performance", "Testing"],
      },
    ],
    en: [
      {
        title: "languages",
        items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"],
      },
      {
        title: "platform",
        items: ["React", "Node.js", "Next.js", "PostgreSQL", "AWS"],
      },
      {
        title: "craft",
        items: ["System design", "UI engineering", "DX", "Performance", "Testing"],
      },
    ],
  },
  projects: {
    es: [
      {
        title: "Signal Desk",
        desc: "Dashboard de observabilidad con latencia sub-100ms y diseño de densidad editorial.",
        tags: ["TypeScript", "WebSockets", "Design system"],
        href: "#",
      },
      {
        title: "Lattice API",
        desc: "Gateway de servicios con contratos tipados, versionado semántico y docs generadas.",
        tags: ["Go", "OpenAPI", "Postgres"],
        href: "#",
      },
      {
        title: "Mono Kit",
        desc: "Kit de componentes open source: tokens, accesibilidad y motion tokens unificados.",
        tags: ["React", "CSS", "A11y"],
        href: "#",
      },
      {
        title: "Trace CLI",
        desc: "Herramienta de terminal para inspeccionar trazas distribuidas con UX de TUI.",
        tags: ["Rust", "TUI", "Observability"],
        href: "#",
      },
    ],
    en: [
      {
        title: "Signal Desk",
        desc: "Observability dashboard with sub-100ms latency and editorial-density design.",
        tags: ["TypeScript", "WebSockets", "Design system"],
        href: "#",
      },
      {
        title: "Lattice API",
        desc: "Service gateway with typed contracts, semantic versioning, and generated docs.",
        tags: ["Go", "OpenAPI", "Postgres"],
        href: "#",
      },
      {
        title: "Mono Kit",
        desc: "Open-source component kit: tokens, accessibility, and unified motion primitives.",
        tags: ["React", "CSS", "A11y"],
        href: "#",
      },
      {
        title: "Trace CLI",
        desc: "Terminal tool for inspecting distributed traces with a TUI-first UX.",
        tags: ["Rust", "TUI", "Observability"],
        href: "#",
      },
    ],
  },
};

const I18N = {
  es: {
    status: "disponible para proyectos",
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.skills": "skills",
    "nav.projects": "projects",
    "nav.contact": "contact",
    "hero.eyebrow": "curriculum vitae · v1.0.0",
    "hero.lead":
      "Diseño y construyo productos digitales con precisión de ingeniería. Interfaces claras, sistemas fiables, detalle obsesivo.",
    "hero.cta": "iniciar conversación",
    "hero.ctaSecondary": "ver trabajo",
    "about.label": "about",
    "about.title": "quién soy",
    "about.p1":
      "Ingeniero de software con foco en producto. Combino pensamiento de sistemas con criterio de diseño: cada interfaz, cada API, cada decisión de arquitectura debe sentirse inevitable.",
    "about.p2":
      "Trabajo en la intersección entre código limpio y experiencia de usuario. Prefiero menos features, mejor ejecutadas. El minimalismo no es estética: es disciplina.",
    "experience.label": "experience",
    "experience.title": "trayectoria",
    "skills.label": "skills",
    "skills.title": "stack & craft",
    "projects.label": "projects",
    "projects.title": "selección de trabajo",
    "contact.label": "contact",
    "contact.title": "hablemos",
    "contact.lead":
      "Abierto a roles remotos, colaboraciones selectas y proyectos con ambición de diseño.",
    "contact.copy": "copiar email",
    "contact.copied": "copiado ✓",
    "contact.hintBefore": "tip: pulsa",
    "contact.hintAfter": "para copiar el email",
    "footer.built": "built with care · no frameworks",
    "project.link": "ver proyecto →",
  },
  en: {
    status: "open to projects",
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.skills": "skills",
    "nav.projects": "projects",
    "nav.contact": "contact",
    "hero.eyebrow": "curriculum vitae · v1.0.0",
    "hero.lead":
      "I design and build digital products with engineering precision. Clear interfaces, reliable systems, obsessive detail.",
    "hero.cta": "start a conversation",
    "hero.ctaSecondary": "see work",
    "about.label": "about",
    "about.title": "who I am",
    "about.p1":
      "Product-focused software engineer. I combine systems thinking with design judgment: every interface, every API, every architecture call should feel inevitable.",
    "about.p2":
      "I work at the intersection of clean code and user experience. Fewer features, better executed. Minimalism is not aesthetics — it is discipline.",
    "experience.label": "experience",
    "experience.title": "trajectory",
    "skills.label": "skills",
    "skills.title": "stack & craft",
    "projects.label": "projects",
    "projects.title": "selected work",
    "contact.label": "contact",
    "contact.title": "let's talk",
    "contact.lead":
      "Open to remote roles, selective collaborations, and projects with design ambition.",
    "contact.copy": "copy email",
    "contact.copied": "copied ✓",
    "contact.hintBefore": "tip: press",
    "contact.hintAfter": "to copy email",
    "footer.built": "built with care · no frameworks",
    "project.link": "view project →",
  },
};

const BOOT_LINES = {
  es: [
    { text: "> boot cv.runtime …", cls: "dim-line" },
    { text: "> load fonts: Outfit, IBM Plex Mono", cls: "dim-line" },
    { text: "> init i18n [es|en]", cls: "dim-line" },
    { text: "> hydrate profile.ts", cls: "dim-line" },
    { text: "✓ system ready", cls: "ok" },
  ],
  en: [
    { text: "> boot cv.runtime …", cls: "dim-line" },
    { text: "> load fonts: Outfit, IBM Plex Mono", cls: "dim-line" },
    { text: "> init i18n [es|en]", cls: "dim-line" },
    { text: "> hydrate profile.ts", cls: "dim-line" },
    { text: "✓ system ready", cls: "ok" },
  ],
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = localStorage.getItem("cv-lang") || (navigator.language?.startsWith("en") ? "en" : "es");
let typewriterTimer = null;
let typewriterIndex = 0;
let typewriterChar = 0;
let typewriterDeleting = false;

/* ── Boot ─────────────────────────────────── */

async function runBoot() {
  const boot = document.getElementById("boot");
  const log = document.getElementById("boot-log");
  if (!boot || !log) return;

  if (reducedMotion || sessionStorage.getItem("cv-booted")) {
    boot.classList.add("is-done");
    return;
  }

  document.body.classList.add("is-booting");
  log.innerHTML = "";

  for (const line of BOOT_LINES[lang]) {
    const span = document.createElement("span");
    span.className = line.cls;
    span.textContent = line.text + "\n";
    log.appendChild(span);
    await wait(reducedMotion ? 0 : 180 + Math.random() * 120);
  }

  await wait(320);
  boot.classList.add("is-done");
  document.body.classList.remove("is-booting");
  sessionStorage.setItem("cv-booted", "1");
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/* ── i18n ─────────────────────────────────── */

function t(key) {
  return I18N[lang][key] ?? I18N.en[key] ?? key;
}

function applyI18n() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  renderExperience();
  renderSkills();
  renderProjects();
  restartTypewriter();
}

function setLang(next) {
  if (next === lang) return;
  lang = next;
  localStorage.setItem("cv-lang", lang);
  applyI18n();
}

/* ── Typewriter ───────────────────────────── */

function restartTypewriter() {
  if (typewriterTimer) clearTimeout(typewriterTimer);
  typewriterIndex = 0;
  typewriterChar = 0;
  typewriterDeleting = false;
  const el = document.getElementById("typewriter");
  if (el) el.textContent = "";
  if (reducedMotion) {
    const roles = CONTENT.roles[lang];
    if (el) el.textContent = roles[0] ?? "";
    return;
  }
  tickTypewriter();
}

function tickTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const roles = CONTENT.roles[lang];
  const current = roles[typewriterIndex % roles.length];

  if (!typewriterDeleting) {
    typewriterChar += 1;
    el.textContent = current.slice(0, typewriterChar);
    if (typewriterChar >= current.length) {
      typewriterDeleting = true;
      typewriterTimer = setTimeout(tickTypewriter, 1600);
      return;
    }
    typewriterTimer = setTimeout(tickTypewriter, 42 + Math.random() * 40);
  } else {
    typewriterChar -= 1;
    el.textContent = current.slice(0, typewriterChar);
    if (typewriterChar <= 0) {
      typewriterDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % roles.length;
      typewriterTimer = setTimeout(tickTypewriter, 320);
      return;
    }
    typewriterTimer = setTimeout(tickTypewriter, 28);
  }
}

/* ── Render dynamic blocks ────────────────── */

function renderExperience() {
  const root = document.getElementById("timeline");
  if (!root) return;
  const items = CONTENT.experience[lang];

  root.innerHTML = items
    .map(
      (item) => `
    <li class="timeline__item">
      <span class="timeline__hash">#${item.hash}</span>
      <h3 class="timeline__role">
        ${escapeHtml(item.role)}
        <span class="timeline__company">@ ${escapeHtml(item.company)}</span>
      </h3>
      <p class="timeline__meta">${escapeHtml(item.period)}</p>
      <p class="timeline__desc">${escapeHtml(item.desc)}</p>
    </li>`
    )
    .join("");
}

function renderSkills() {
  const root = document.getElementById("skills-grid");
  if (!root) return;
  const groups = CONTENT.skills[lang];

  root.innerHTML = groups
    .map(
      (group) => `
    <article class="skill-card">
      <h3 class="skill-card__title">// ${escapeHtml(group.title)}</h3>
      <ul class="skill-card__list">
        ${group.items
          .map((item) => `<li class="skill-tag">${escapeHtml(item)}</li>`)
          .join("")}
      </ul>
    </article>`
    )
    .join("");
}

function renderProjects() {
  const root = document.getElementById("projects-grid");
  if (!root) return;
  const items = CONTENT.projects[lang];
  const linkLabel = t("project.link");

  root.innerHTML = items
    .map(
      (item, i) => `
    <article class="project-card">
      <div class="project-card__top">
        <h3 class="project-card__title">${escapeHtml(item.title)}</h3>
        <span class="project-card__index">0${i + 1}</span>
      </div>
      <p class="project-card__desc">${escapeHtml(item.desc)}</p>
      <div class="project-card__tags">
        ${item.tags.map((tag) => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <a class="project-card__link" href="${escapeAttr(item.href)}" ${
        item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""
      }>${escapeHtml(linkLabel)}</a>
    </article>`
    )
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll("'", "&#39;");
}

/* ── Reveal on scroll ─────────────────────── */

function initReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (reducedMotion) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((n) => io.observe(n));
}

/* ── Copy email ───────────────────────────── */

function initCopyEmail() {
  const btn = document.getElementById("copy-email");
  if (!btn) return;

  btn.dataset.email = CONTENT.email;

  const copy = async () => {
    const email = btn.dataset.email || CONTENT.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    btn.classList.add("is-copied");
    window.setTimeout(() => btn.classList.remove("is-copied"), 1600);
  };

  btn.addEventListener("click", copy);

  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "e" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      copy();
    }
  });
}

/* ── Lang controls ────────────────────────── */

function initLang() {
  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

/* ── Init ─────────────────────────────────── */

function applyStaticContent() {
  document.querySelector(".hero__name-text").textContent = CONTENT.name;
  document.title = `CV · ${CONTENT.name}`;
  document.getElementById("year").textContent = String(new Date().getFullYear());

  const copyBtn = document.getElementById("copy-email");
  if (copyBtn) copyBtn.dataset.email = CONTENT.email;
}

async function main() {
  applyStaticContent();
  applyI18n();
  initLang();
  initReveal();
  initCopyEmail();
  await runBoot();
}

main();
