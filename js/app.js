/**
 * CV Online — interactions + i18n
 * Edit CONTENT to replace placeholders with your data.
 */

const CONTENT = {
  name: "Mauricio Appiolaza",
  /**
   * Email ofuscado (no texto plano en el repo).
   * Se decodifica solo en memoria al copiar — frena scrapers tontos.
   * No evita un humano/bot que ejecute el JS a propósito.
   */
  emailParts: {
    // btoa("mauricio_appiolaza") / btoa("micorreo.uk") — regenerar si cambiás mail
    u: "bWF1cmljaW9fYXBwaW9sYXph",
    d: "bWljb3JyZW8udWs=",
  },
  githubUrl: "https://github.com/monarch-one",
  /**
   * Username de Signal (sin @). Ej: "nombre.12"
   * Al clic: copia el usuario y abre deep link.
   * Opcional: signalLink = URL completa de Signal (Ajustes → QR o enlace, formato #eu/…)
   * Vacío username = botón oculto.
   */
  signalUsername: "USER1.61803",
  signalLink: "",
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
      "Software & design",
      "Diseñador gráfico industrial · UNCuyo",
    ],
    en: [
      "Founder · monarch",
      "Software & design",
      "Industrial graphic designer · UNCuyo",
    ],
  },
  experience: {
    es: [
      {
        hash: "m0n4rch",
        role: "Founder & engineer",
        company: "monarch",
        period: "presente",
        desc: "Estudio personal de software: producto web, interfaces y herramientas local-first. Diseño + implementación + deploy end-to-end para clientes y proyectos propios.",
      },
      {
        hash: "g10m1n",
        role: "Stage · diseño y new media",
        company: "Giò Minola",
        period: "2008",
        desc: "Pasantía en agencia de comunicación y packaging (Torino). Propuestas web y piezas de comunicación — AIGEST, Il Poggio di Teo y otros encargos.",
      },
      {
        hash: "fr33ln",
        role: "Diseño gráfico freelance",
        company: "independiente",
        period: "2001 — 2008",
        desc: "Identidad visual, logotipos, piezas gráficas y CD multimedia. Clientes y proyectos propios en Mendoza y colaboraciones en Italia.",
      },
      {
        hash: "p0nc3",
        role: "Producción gráfica",
        company: "Impresos Ponce",
        period: "1999 — 2001",
        desc: "Trabajo part-time en imprenta: producción y oficios de la cadena gráfica.",
      },
    ],
    en: [
      {
        hash: "m0n4rch",
        role: "Founder & engineer",
        company: "monarch",
        period: "present",
        desc: "Personal software studio: web products, interfaces, and local-first tools. Design + build + deploy end-to-end for clients and own projects.",
      },
      {
        hash: "g10m1n",
        role: "Internship · design & new media",
        company: "Giò Minola",
        period: "2008",
        desc: "Internship at a communication and packaging agency (Turin). Web proposals and brand pieces — AIGEST, Il Poggio di Teo, and other briefs.",
      },
      {
        hash: "fr33ln",
        role: "Freelance graphic design",
        company: "independent",
        period: "2001 — 2008",
        desc: "Visual identity, logos, print, and multimedia CDs. Clients and own projects in Mendoza, plus collaborations in Italy.",
      },
      {
        hash: "p0nc3",
        role: "Print production",
        company: "Impresos Ponce",
        period: "1999 — 2001",
        desc: "Part-time print shop work: production and the craft of the print pipeline.",
      },
    ],
  },
  education: {
    es: [
      {
        hash: "uncuyo",
        role: "Diseñador Gráfico Industrial",
        company: "Universidad Nacional de Cuyo",
        period: "2008",
        desc: "Facultad de Artes y Diseño. Título: Diseñador Gráfico Industrial.",
      },
    ],
    en: [
      {
        hash: "uncuyo",
        role: "Industrial Graphic Designer",
        company: "Universidad Nacional de Cuyo",
        period: "2008",
        desc: "School of Arts and Design. Degree: Industrial Graphic Designer.",
      },
    ],
  },
  skills: {
    es: [
      {
        title: "code",
        items: ["TypeScript", "JavaScript", "HTML/CSS", "Shell"],
      },
      {
        title: "platform",
        items: ["React", "Vite", "Browser extensions", "Static sites"],
      },
      {
        title: "design",
        items: ["Illustrator", "Photoshop", "InDesign", "UI / product"],
      },
      {
        title: "idiomas",
        items: ["Español nativo", "Inglés alto", "Italiano medio"],
      },
      {
        title: "craft",
        items: ["Local-first", "Privacy-minded", "Identidad visual", "Web production"],
      },
    ],
    en: [
      {
        title: "code",
        items: ["TypeScript", "JavaScript", "HTML/CSS", "Shell"],
      },
      {
        title: "platform",
        items: ["React", "Vite", "Browser extensions", "Static sites"],
      },
      {
        title: "design",
        items: ["Illustrator", "Photoshop", "InDesign", "UI / product"],
      },
      {
        title: "languages",
        items: ["Spanish native", "English high", "Italian intermediate"],
      },
      {
        title: "craft",
        items: ["Local-first", "Privacy-minded", "Visual identity", "Web production"],
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
      "Diseñador gráfico industrial + software. Desde monarch construyo producto web, interfaces y herramientas local-first — con el oficio de quien viene del diseño y la producción real.",
    "hero.cta": "iniciar conversación",
    "hero.ctaSecondary": "ver trabajo",
    "about.label": "about",
    "about.title": "quién soy",
    "about.p1":
      "Soy Mauricio. Diseñador gráfico industrial (UNCuyo, 2008) y builder de software. Desde monarch — mi estudio personal — diseño y desarrollo producto web, interfaces y herramientas local-first.",
    "about.p2":
      "Empecé en imprenta y freelance gráfico (Mendoza), pasé por new media en Torino (Giò Minola) y hoy cierro el loop: craft visual + código. Menos features, bien hechas. Claridad y control del usuario.",
    "experience.label": "experience",
    "experience.title": "trayectoria",
    "education.label": "education",
    "education.title": "formación",
    "skills.label": "skills",
    "skills.title": "stack & craft",
    "projects.label": "projects",
    "projects.title": "selección de trabajo",
    "nav.education": "education",
    "contact.label": "contact",
    "contact.title": "hablemos",
    "contact.lead":
      "Abierto a colaboraciones selectas y proyectos con ambición de diseño. Preferí Signal o mail.",
    "contact.copy": "copiar email",
    "contact.copied": "copiado ✓",
    "contact.hintBefore": "tip: pulsa",
    "contact.hintAfter": "para copiar el email",
    "contact.viaGithub": "GitHub →",
    "contact.viaSignal": "Signal",
    "contact.signalCopied": "usuario copiado ✓",
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
      "Industrial graphic designer + software. Through monarch I build web products, interfaces, and local-first tools — with the craft of someone who comes from design and real production.",
    "hero.cta": "start a conversation",
    "hero.ctaSecondary": "see work",
    "about.label": "about",
    "about.title": "who I am",
    "about.p1":
      "I'm Mauricio. Industrial graphic designer (UNCuyo, 2008) and software builder. Through monarch — my personal studio — I design and ship web products, interfaces, and local-first tools.",
    "about.p2":
      "I started in print shops and freelance design (Mendoza), worked new media in Turin (Giò Minola), and now close the loop: visual craft + code. Fewer features, better executed. Clarity and user control.",
    "experience.label": "experience",
    "experience.title": "trajectory",
    "education.label": "education",
    "education.title": "education",
    "skills.label": "skills",
    "skills.title": "stack & craft",
    "projects.label": "projects",
    "projects.title": "selected work",
    "nav.education": "education",
    "contact.label": "contact",
    "contact.title": "let's talk",
    "contact.lead":
      "Open to selective collaborations and projects with design ambition. Prefer Signal or email.",
    "contact.copy": "copy email",
    "contact.copied": "copied ✓",
    "contact.hintBefore": "tip: press",
    "contact.hintAfter": "to copy email",
    "contact.viaGithub": "GitHub →",
    "contact.viaSignal": "Signal",
    "contact.signalCopied": "username copied ✓",
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
    // Signal label is set with username in applyStaticContent / initSignal
    if (el.classList.contains("signal-label") && CONTENT.signalUsername) return;
    if (el.classList.contains("btn__feedback") && el.closest("#signal-btn")) {
      const value = t("contact.signalCopied");
      if (value) el.textContent = value;
      return;
    }
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
  renderEducation();
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

function renderTimeline(rootId, items) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = (items || [])
    .map(
      (item) => `
    <li class="timeline__item">
      <span class="timeline__hash">#${escapeHtml(item.hash)}</span>
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

function renderExperience() {
  renderTimeline("timeline", CONTENT.experience[lang]);
}

function renderEducation() {
  renderTimeline("education-timeline", CONTENT.education[lang]);
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

/* ── Copy email (obfuscated) ──────────────── */

function decodeEmail() {
  const parts = CONTENT.emailParts;
  if (!parts?.u || !parts?.d) return "";
  try {
    return `${atob(parts.u)}@${atob(parts.d)}`;
  } catch {
    return "";
  }
}

function initCopyEmail() {
  const btn = document.getElementById("copy-email");
  const hint = document.getElementById("contact-hint");
  const hasEmail = Boolean(CONTENT.emailParts?.u && CONTENT.emailParts?.d);

  if (!hasEmail) {
    if (btn) btn.hidden = true;
    if (hint) hint.hidden = true;
    return;
  }

  if (!btn) return;
  btn.hidden = false;
  if (hint) hint.hidden = false;
  // Never write the address into data-* or the DOM

  const copy = async () => {
    const email = decodeEmail();
    if (!email) return;
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

}

/* ── Signal contact ───────────────────────── */

function signalUsername() {
  return (CONTENT.signalUsername || "").trim().replace(/^@/, "");
}

function signalDeepLink(user) {
  // Prefer official share URL from the app if provided (#eu/…)
  const custom = (CONTENT.signalLink || "").trim();
  if (custom.startsWith("https://signal.me/")) return custom;
  // Plain username deep link (clients that still resolve #u/)
  return `https://signal.me/#u/${user}`;
}

function initSignal() {
  const btn = document.getElementById("signal-btn");
  if (!btn) return;

  const user = signalUsername();
  if (!user) {
    btn.hidden = true;
    return;
  }

  btn.hidden = false;
  const label = btn.querySelector(".signal-label");
  if (label) label.textContent = `Signal · @${user}`;

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        ta.remove();
        return ok;
      } catch {
        return false;
      }
    }
  };

  btn.addEventListener("click", async () => {
    const name = signalUsername();
    if (!name) return;

    await copyText(name);

    // Open Signal deep link in a new tab/app (not same-page #)
    const url = signalDeepLink(name);
    window.open(url, "_blank", "noopener,noreferrer");

    btn.classList.add("is-copied");
    window.setTimeout(() => btn.classList.remove("is-copied"), 1800);
  });
}

async function main() {
  applyStaticContent();
  applyI18n();
  initLang();
  initReveal();
  initCopyEmail();
  initSignal();
  // Render showcase with local data first, then enrich from public GitHub
  renderProjects();
  const boot = runBoot();
  await Promise.all([boot, loadGithubShowcase()]);
}

main();
