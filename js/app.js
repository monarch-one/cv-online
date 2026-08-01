/**
 * CV Online — interactions + i18n
 * Edit CONTENT to replace placeholders with your data.
 */

const CONTENT = {
  name: "Mauricio Appiolaza",
  // vacío a propósito (privacidad): se oculta el botón de email hasta que pongas uno
  email: "",
  githubUrl: "https://github.com/monarch-one",
  location: {
    es: "Luján de Cuyo, Mendoza",
    en: "Luján de Cuyo, Mendoza",
  },
  meta: {
    es: { loc: "Luján de Cuyo, Mendoza", tz: "UTC−3", stack: "monarch · software" },
    en: { loc: "Luján de Cuyo, Mendoza", tz: "UTC−3", stack: "monarch · software" },
  },
  roles: {
    es: [
      "Founder · monarch",
      "Software Engineer",
      "Product builder",
    ],
    en: [
      "Founder · monarch",
      "Software Engineer",
      "Product builder",
    ],
  },
  experience: {
    es: [
      {
        hash: "m0n4rch",
        role: "Founder & engineer",
        company: "monarch",
        period: "presente",
        desc: "Mi estudio personal de desarrollo de software: producto web, interfaces y herramientas local-first. Diseño, implementación y deploy end-to-end — clientes y proyectos propios.",
      },
    ],
    en: [
      {
        hash: "m0n4rch",
        role: "Founder & engineer",
        company: "monarch",
        period: "present",
        desc: "My personal software studio: web products, interfaces, and local-first tools. Design, implementation, and deploy end-to-end — clients and own projects.",
      },
    ],
  },
  skills: {
    es: [
      {
        title: "languages",
        items: ["TypeScript", "JavaScript", "HTML/CSS", "Shell"],
      },
      {
        title: "platform",
        items: ["React", "Vite", "Browser extensions", "Static sites"],
      },
      {
        title: "craft",
        items: ["UI engineering", "Local-first", "Privacy-minded", "Product design"],
      },
    ],
    en: [
      {
        title: "languages",
        items: ["TypeScript", "JavaScript", "HTML/CSS", "Shell"],
      },
      {
        title: "platform",
        items: ["React", "Vite", "Browser extensions", "Static sites"],
      },
      {
        title: "craft",
        items: ["UI engineering", "Local-first", "Privacy-minded", "Product design"],
      },
    ],
  },
  /**
   * Showcase curado (solo estos aparecen).
   * - desc local siempre (seguro, bilingüe, controlado)
   * - si el repo se hace público, se enriquecen lang/stars/url de GitHub
   * - si hay homepage, el CTA principal apunta ahí (ideal si sigue privado)
   * Orden = orden en la grilla.
   */
  github: {
    user: "monarch-one",
    showcase: [
      {
        repo: "appiolaza-net",
        title: "appiolaza.com",
        desc: {
          es: "Encargo de monarch: sitio institucional en producción (React + TypeScript). Diseño limpio, stack moderno, deploy en vivo.",
          en: "monarch client work: institutional site in production (React + TypeScript). Clean design, modern stack, live deploy.",
        },
        tags: ["React", "TypeScript", "Vite", "Client · monarch"],
        homepage: "https://appiolaza.com",
      },
      {
        repo: "kami",
        title: "Kami 紙",
        desc: {
          es: "Nueva pestaña = página en blanco. Notas + fotos locales, sin cuentas ni tracking. Estética japonesa minimal.",
          en: "New tab = blank page. Local notes + photos, no accounts, no tracking. Minimal Japanese aesthetic.",
        },
        tags: ["Extension", "JavaScript", "Privacy"],
        homepage: null,
      },
      {
        repo: "shunbun",
        title: "Shunbun 瞬文",
        desc: {
          es: "Expansor de texto estilo fzf para Firefox/Chrome. Trigger configurable, variables dinámicas, UI CRT.",
          en: "fzf-style text expander for Firefox/Chrome. Configurable trigger, dynamic variables, CRT UI.",
        },
        tags: ["Extension", "JavaScript", "UX"],
        homepage: null,
      },
      {
        repo: "kagami",
        title: "Kagami 鏡",
        desc: {
          es: "Historial local de portapapeles para Firefox/LibreWolf. Pins, búsqueda, sin nube. XPI firmado.",
          en: "Local clipboard history for Firefox/LibreWolf. Pins, search, no cloud. Signed XPI.",
        },
        tags: ["Extension", "JavaScript", "Privacy"],
        homepage: null,
      },
      {
        repo: "yomi",
        title: "Yomi 読",
        desc: {
          es: "Reader mode CRT: limpia el artículo y exporta .md listo para Kami. Parte de la suite local-first.",
          en: "CRT reader mode: cleans the article and exports .md for Kami. Part of the local-first suite.",
        },
        tags: ["Extension", "JavaScript", "Reader"],
        homepage: null,
      },
      {
        repo: "ancap-screensaver",
        title: "ANCAP Screensaver",
        desc: {
          es: "Screensaver multiplataforma de citas. Instaladores nativos macOS / Linux / Windows.",
          en: "Cross-platform quotes screensaver. Native installers for macOS / Linux / Windows.",
        },
        tags: ["HTML", "Desktop", "Open source"],
        homepage: null,
      },
    ],
  },
};

/** Cache live GitHub data: repo name → api payload (or null if private/missing) */
let githubLive = {};

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
      "Construyo software con foco en producto: interfaces claras, herramientas locales y detalle de ejecución. Menos superficie pública, más craft.",
    "hero.cta": "iniciar conversación",
    "hero.ctaSecondary": "ver trabajo",
    "about.label": "about",
    "about.title": "quién soy",
    "about.p1":
      "Soy Mauricio. Desde monarch — mi estudio personal de desarrollo — diseño y construyo producto web, interfaces y herramientas local-first. Claridad, control del usuario y código que se sostiene solo.",
    "about.p2":
      "Prefiero menos features, bien hechas. El minimalismo no es pose: es disciplina. Trabajo en la intersección entre UI cuidadosa y software que no necesita cloud para ser útil.",
    "experience.label": "experience",
    "experience.title": "trayectoria",
    "skills.label": "skills",
    "skills.title": "stack & craft",
    "projects.label": "projects",
    "projects.title": "selección de trabajo",
    "contact.label": "contact",
    "contact.title": "hablemos",
    "contact.lead":
      "Abierto a colaboraciones selectas y proyectos con ambición de diseño. Contacto preferente por GitHub.",
    "contact.copy": "copiar email",
    "contact.copied": "copiado ✓",
    "contact.hintBefore": "tip: pulsa",
    "contact.hintAfter": "para copiar el email",
    "contact.viaGithub": "escribir en GitHub →",
    "footer.built": "built with care · no frameworks",
    "project.link": "ver proyecto →",
    "project.live": "ver sitio →",
    "project.github": "ver código →",
    "project.badge.live": "live",
    "project.badge.public": "public",
    "project.badge.selected": "selected",
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
      "I build product-minded software: clear interfaces, local-first tools, and careful execution. Less public surface, more craft.",
    "hero.cta": "start a conversation",
    "hero.ctaSecondary": "see work",
    "about.label": "about",
    "about.title": "who I am",
    "about.p1":
      "I'm Mauricio. Through monarch — my personal software studio — I design and ship web products, interfaces, and local-first tools. Clarity, user control, and code that holds up.",
    "about.p2":
      "Fewer features, better executed. Minimalism is discipline, not a pose. I work where careful UI meets software that does not need a cloud to be useful.",
    "experience.label": "experience",
    "experience.title": "trajectory",
    "skills.label": "skills",
    "skills.title": "stack & craft",
    "projects.label": "projects",
    "projects.title": "selected work",
    "contact.label": "contact",
    "contact.title": "let's talk",
    "contact.lead":
      "Open to selective collaborations and projects with design ambition. Prefer contact via GitHub.",
    "contact.copy": "copy email",
    "contact.copied": "copied ✓",
    "contact.hintBefore": "tip: press",
    "contact.hintAfter": "to copy email",
    "contact.viaGithub": "message on GitHub →",
    "footer.built": "built with care · no frameworks",
    "project.link": "view project →",
    "project.live": "view site →",
    "project.github": "view code →",
    "project.badge.live": "live",
    "project.badge.public": "public",
    "project.badge.selected": "selected",
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

  const meta = CONTENT.meta?.[lang] || CONTENT.meta?.es;
  if (meta) {
    const loc = document.getElementById("meta-loc");
    const tz = document.getElementById("meta-tz");
    const stack = document.getElementById("meta-stack");
    if (loc) loc.textContent = meta.loc;
    if (tz) tz.textContent = meta.tz;
    if (stack) stack.textContent = meta.stack;
  }

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

function resolveShowcaseItem(entry) {
  const live = githubLive[entry.repo];
  const publicRepo = Boolean(live && !live.private);
  const homepage = entry.homepage || live?.homepage || null;
  const githubUrl = publicRepo ? live.html_url : null;
  const langName = live?.language || null;
  const stars = publicRepo ? live.stargazers_count ?? 0 : null;

  const tags = [...entry.tags];
  if (langName && !tags.some((x) => x.toLowerCase() === langName.toLowerCase())) {
    tags.unshift(langName);
  }

  let badge = "selected";
  if (homepage) badge = "live";
  else if (publicRepo) badge = "public";

  let href = homepage || githubUrl || null;
  let linkKey = homepage ? "project.live" : publicRepo ? "project.github" : "project.link";

  return {
    title: entry.title,
    desc: entry.desc[lang] || entry.desc.es || entry.desc.en || "",
    tags,
    href,
    linkKey,
    badge,
    stars,
    repo: entry.repo,
    githubUrl,
    homepage,
  };
}

function renderProjects() {
  const root = document.getElementById("projects-grid");
  if (!root) return;

  const items = (CONTENT.github?.showcase || []).map(resolveShowcaseItem);

  root.innerHTML = items
    .map((item, i) => {
      const badgeLabel = t(`project.badge.${item.badge}`);
      const linkLabel = t(item.linkKey);
      const external = item.href && item.href.startsWith("http");
      const starsHtml =
        item.stars != null
          ? `<span class="project-card__stars" title="stars">★ ${item.stars}</span>`
          : "";
      const linkHtml = item.href
        ? `<a class="project-card__link" href="${escapeAttr(item.href)}" ${
            external ? 'target="_blank" rel="noopener noreferrer"' : ""
          }>${escapeHtml(linkLabel)}</a>`
        : `<span class="project-card__link project-card__link--muted mono">${escapeHtml(
            item.repo
          )}</span>`;
      const ghExtra =
        item.githubUrl && item.homepage
          ? `<a class="project-card__link project-card__link--secondary" href="${escapeAttr(
              item.githubUrl
            )}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("project.github"))}</a>`
          : "";

      return `
    <article class="project-card" data-repo="${escapeAttr(item.repo)}">
      <div class="project-card__top">
        <h3 class="project-card__title">${escapeHtml(item.title)}</h3>
        <span class="project-card__index">0${i + 1}</span>
      </div>
      <div class="project-card__meta mono">
        <span class="project-badge project-badge--${escapeAttr(item.badge)}">${escapeHtml(
          badgeLabel
        )}</span>
        ${starsHtml}
      </div>
      <p class="project-card__desc">${escapeHtml(item.desc)}</p>
      <div class="project-card__tags">
        ${item.tags.map((tag) => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="project-card__actions">
        ${linkHtml}
        ${ghExtra}
      </div>
    </article>`;
    })
    .join("");
}

async function loadGithubShowcase() {
  const user = CONTENT.github?.user;
  const list = CONTENT.github?.showcase || [];
  if (!user || !list.length) {
    renderProjects();
    return;
  }

  // Fetch only allowlisted repos (avoids dumping the whole account)
  await Promise.all(
    list.map(async (entry) => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${encodeURIComponent(user)}/${encodeURIComponent(
            entry.repo
          )}`,
          {
            headers: { Accept: "application/vnd.github+json" },
          }
        );
        if (res.status === 404) {
          githubLive[entry.repo] = null; // private or missing for anonymous
          return;
        }
        if (!res.ok) return;
        githubLive[entry.repo] = await res.json();
      } catch {
        /* offline / rate limit: keep local overrides */
      }
    })
  );

  renderProjects();
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
  const hint = document.getElementById("contact-hint");
  const hasEmail = Boolean(CONTENT.email && CONTENT.email.includes("@"));

  if (!hasEmail) {
    if (btn) btn.hidden = true;
    if (hint) hint.hidden = true;
    return;
  }

  if (!btn) return;
  btn.hidden = false;
  if (hint) hint.hidden = false;
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

  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute(
      "content",
      `Curriculum vitae — ${CONTENT.name}. Software, product, local-first tools.`
    );
  }

  const gh = CONTENT.githubUrl || `https://github.com/${CONTENT.github?.user || ""}`;
  document.querySelectorAll("[data-github-link]").forEach((el) => {
    el.href = gh;
  });

  const copyBtn = document.getElementById("copy-email");
  if (copyBtn && CONTENT.email) copyBtn.dataset.email = CONTENT.email;
}

async function main() {
  applyStaticContent();
  applyI18n();
  initLang();
  initReveal();
  initCopyEmail();
  // Render showcase with local data first, then enrich from public GitHub
  renderProjects();
  const boot = runBoot();
  await Promise.all([boot, loadGithubShowcase()]);
}

main();
