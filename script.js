/* ============================================================
   CHUKWU SUNDAY NWABUEZE · portfolio interactions
   Plain JavaScript. No frameworks.
   ────────────────────────────────────────────────────────────
   CONTACT LINKS (edit here if anything changes):
     Calendly   https://calendly.com/chukwusunday445/new-meeting
     WhatsApp   https://wa.me/2349034431549
     Email      chukwusunday445@gmail.com
     GitHub     https://github.com/Maxdesign01
     LinkedIn   https://www.linkedin.com/in/chukwusunday445
     X          https://x.com/Nwachukwu_445
   ============================================================ */

(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE    = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Fabricated project data (edit freely) ---------- */
  const PROJECTS = {
    ledgerline: {
      title: "Ledgerline", cat: "AI product", year: "2025",
      role: "Design + engineering", stack: "Python · pgvector · FastAPI · React",
      desc: "Expense copilot for finance teams. Reads about 5,000 receipts a month into a vector index, so anyone can ask \"what did we spend on hosting in March?\" and get a sourced answer instead of a spreadsheet hunt.",
      points: [
        "RAG pipeline with a 40ms median retrieval",
        "96% field accuracy across the receipt corpus",
        "Answers cite the exact invoice they came from"
      ],
      art: "w1"
    },
    replyroom: {
      title: "Replyroom", cat: "AI product", year: "2024",
      role: "AI engineering", stack: "TypeScript · Qdrant · OpenAI-compatible LLMs",
      desc: "Support copilot trained on three years of a 20-person team's ticket history. Drafts each reply and cites the past ticket it learned the answer from, so agents can verify before they send.",
      points: [
        "Median first-reply time dropped 41% in six weeks",
        "Citations point to ticket IDs, never invented ones",
        "Confidence gate reroutes low-certainty drafts to a human"
      ],
      art: "w2"
    },
    paperstack: {
      title: "Paperstack", cat: "AI product", year: "2025",
      role: "Design + engineering", stack: "Python · layout parsers · Postgres",
      desc: "Invoice extraction that turns messy PDFs into structured, searchable data. Layout-aware parsing runs first, model checks run after, and low-confidence fields get flagged for a person before anything saves.",
      points: [
        "Handles scanned, photographed and emailed layouts",
        "Human-in-the-loop queue for flagged fields",
        "Searchable index of every line item it ever read"
      ],
      art: "w3"
    },
    kudiatlas: {
      title: "Kudi Atlas", cat: "Product design", year: "2025",
      role: "Lead product designer", stack: "Figma · motion research · prototypes",
      desc: "Personal finance app for Nigerian salaried users. Onboarding and accounts were redesigned around real payday behavior, which is to say: money arrives, decisions happen fast, and screens must keep up.",
      points: [
        "Activation up 38% in the following quarter",
        "Onboarding cut from 9 steps to 4",
        "Design system shipped with 120+ components"
      ],
      art: "w4"
    },
    fleetly: {
      title: "Fleetly", cat: "Product design", year: "2024",
      role: "Product designer", stack: "Figma · design system · user testing",
      desc: "Dispatch dashboard for a delivery startup: live driver status, route conflict warnings, and a map that loads under a second on 3G. Drivers and dispatchers finally work from the same screen.",
      points: [
        "14 screens covering dispatch, tracking and returns",
        "Route conflicts surface before a driver gets assigned",
        "Dashboard lightweight enough for field tablets"
      ],
      art: "w5"
    },
    maxweb: {
      title: "Maxweb (this site)", cat: "Creative dev", year: "2026",
      role: "Design + build", stack: "HTML · CSS · JavaScript, nothing else",
      desc: "This portfolio, hand-rolled with plain HTML, CSS and JavaScript: custom cursor, scroll choreography, CSS-drawn project covers, zero frameworks, and it deploys anywhere from a single folder.",
      points: [
        "No build step, no dependencies to break",
        "Motion respects the visitor's reduced-motion setting",
        "Static files ready for Vercel and Cloudflare Pages"
      ],
      art: "w6"
    }
  };

  /* ---------- Load curtain ---------- */
  const lift = () => document.body.classList.add("ready");
  const liftSoon = () => setTimeout(lift, REDUCED ? 0 : 220);
  if (document.readyState === "complete") liftSoon();
  else window.addEventListener("load", liftSoon);
  /* safety: never leave the curtain stuck */
  setTimeout(lift, REDUCED ? 0 : 1500);

  /* ---------- Custom cursor ---------- */
  const dot = document.querySelector(".cur-dot");
  const ring = document.querySelector(".cur-ring");
  if (FINE && !REDUCED && dot && ring) {
    document.documentElement.classList.add("cursor-on");
    let mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.opacity = ring.style.opacity = 1;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      const t = e.target.closest("[data-cursor='view']");
      const link = e.target.closest("a, button, .chip, .service .s-top");
      ring.classList.toggle("view", !!t);
      ring.classList.toggle("grow", !!link && !t);
    }, { passive: true });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    })();
  } else if (dot && ring) {
    dot.remove(); ring.remove();
  }

  /* ---------- Magnetic buttons ---------- */
  if (FINE && !REDUCED) {
    $$(".magnetic").forEach((el) => {
      let raf = null;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        if (raf) return;
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.28}px)`;
          raf = null;
        });
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ---------- Header: hide on scroll down, show on scroll up ---------- */
  const header = $(".header");
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 140 && y > lastY + 6 && !document.documentElement.classList.contains("menu-open")) {
      header.classList.add("hide");
    } else if (y < lastY - 6 || y < 140) {
      header.classList.remove("hide");
    }
    lastY = y;
  }, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = $(".burger");
  const menuX = $(".menu-x");
  if (burger && menuX) {
    const menu = $(".menu");
    const menuOpen = (open) => {
      document.documentElement.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", String(open));
      if (menu) menu.setAttribute("aria-hidden", String(!open));
      if (open) {
        const first = $(".menu-links a", menu);
        if (first) first.focus({ preventScroll: true });
      } else {
        burger.focus({ preventScroll: true });
      }
    };
    burger.addEventListener("click", () => menuOpen(true));
    menuX.addEventListener("click", () => menuOpen(false));
    $$(".menu a[href^='#']").forEach((a) => a.addEventListener("click", () => menuOpen(false)));
  }

  /* ---------- Reveals ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$("[data-reveal]").forEach((el) => {
    const i = el.dataset.reveal !== "" ? parseFloat(el.dataset.reveal) : NaN;
    if (!isNaN(i)) el.style.setProperty("--d", (i * 90) + "ms");
    io.observe(el);
  });

  /* group stagger helper */
  $$("[data-stagger]").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty("--d", (i * 80) + "ms");
      if (!child.hasAttribute("data-reveal")) child.setAttribute("data-reveal", "");
      io.observe(child);
    });
  });

  /* ---------- Counters ---------- */
  const animateCount = (el, end) => {
    if (REDUCED) { el.textContent = end; return; }
    const t0 = performance.now(), dur = 1300;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(end * e);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = end;
    };
    el.textContent = 0;
    requestAnimationFrame(step);
  };
  const counterEls = $$("[data-count]");
  const runCounter = (el) => {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const end = parseFloat(el.dataset.count || "0");
    if (isNaN(end)) { el.textContent = el.dataset.count || ""; return; }
    // If already visible, animate now; otherwise observe.
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
    if (inView) { animateCount(el, end); return; }
    const o = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        o.unobserve(el);
        animateCount(el, end);
      });
    }, { threshold: 0.1 });
    o.observe(el);
    // Safety: never leave a counter stuck at 0.
    setTimeout(() => { if (el.textContent === "0" || el.textContent === "") el.textContent = end; }, 2000);
  };
  counterEls.forEach(runCounter);
  // If IntersectionObserver unsupported, show finals immediately.
  if (!("IntersectionObserver" in window)) counterEls.forEach((el) => { el.textContent = parseFloat(el.dataset.count || "0"); });

  /* ---------- Progressive word-ink (about paragraph) ---------- */
  const big = $("#bigWords");
  if (big) {
    /* wrap every word in a span, preserving .hl highlights */
    const wrapWords = (node) => {
      Array.from(node.childNodes).forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((chunk) => {
            if (!chunk.trim()) { frag.appendChild(document.createTextNode(" ")); return; }
            const s = document.createElement("span");
            s.className = "w" + (n.parentElement.classList.contains("hl") ? " hl" : "");
            s.textContent = chunk;
            frag.appendChild(s);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains("w")) {
          wrapWords(n);
        }
      });
    };
    if (REDUCED) {
      /* no split, everything lit */
      $$("span.w", big).forEach((w) => w.classList.add("lit"));
    } else {
      wrapWords(big);
      const words = $$("span.w", big);
      let ticking = false;
      const paint = () => {
        ticking = false;
        const r = big.getBoundingClientRect();
        const start = window.innerHeight * 0.82;
        const p = Math.max(0, Math.min(1, (start - r.top) / (r.height + start * 0.45)));
        const litCount = Math.floor(p * words.length);
        words.forEach((w, i) => w.classList.toggle("lit", i < litCount));
      };
      window.addEventListener("scroll", () => {
        if (!ticking) { ticking = true; requestAnimationFrame(paint); }
      }, { passive: true });
      paint();
    }
  }

  /* ---------- Hero portrait parallax ---------- */
  const portrait = $(".hero-portrait img");
  if (portrait && !REDUCED) {
    let tick = false;
    window.addEventListener("scroll", () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * 0.05, 60);
        portrait.style.transform = `translateY(${y}px) scale(1.04)`;
        tick = false;
      });
    }, { passive: true });
  }

  /* ---------- Services accordion ---------- */
  const services = $$(".service");
  services.forEach((s) => {
    const top = $(".s-top", s);
    top.addEventListener("click", () => {
      const wasOpen = s.classList.contains("open");
      services.forEach((o) => { o.classList.remove("open"); $(".s-top", o).setAttribute("aria-expanded", "false"); });
      if (!wasOpen) { s.classList.add("open"); top.setAttribute("aria-expanded", "true"); }
    });
  });

  /* ---------- Work filters ---------- */
  const chips = $$(".chip[data-filter]");
  const cards = $$(".work-card");
  const count = $("#workCount");
  const empty = $("#workEmpty");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => { c.classList.remove("on"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("on");
      chip.setAttribute("aria-pressed", "true");
      const f = chip.dataset.filter;
      let visible = 0;
      cards.forEach((card) => {
        const show = f === "all" || card.dataset.filter === f;
        card.classList.toggle("hide", !show);
        card.classList.remove("pop");
        if (show) {
          visible++;
          void card.offsetWidth;               /* restart pop animation */
          card.classList.add("pop");
        }
      });
      if (count) count.textContent = visible + (visible === 1 ? " project" : " projects");
      if (empty) empty.hidden = visible !== 0;
    });
  });

  /* ---------- Card tilt ---------- */
  if (FINE && !REDUCED) {
    $$(".work-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-6px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------- Modals (booking + project) ---------- */
  let lastFocus = null;
  const openModal = (m) => {
    lastFocus = document.activeElement;
    m.classList.add("open");
    document.documentElement.classList.add("modal-open");
    const target = $(".modal-x", m) || $("a,button", m);
    if (target) target.focus({ preventScroll: true });
  };
  const closeModal = (m) => {
    m.classList.remove("open");
    document.documentElement.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  };
  $$("[data-book]").forEach((b) => b.addEventListener("click", () => openModal($("#bookModal"))));
  $$(".modal").forEach((m) => {
    $$("[data-close]", m).forEach((c) => c.addEventListener("click", () => closeModal(m)));
  });
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const m = $(".modal.open");
    if (m) closeModal(m);
    if (document.documentElement.classList.contains("menu-open")) {
      document.documentElement.classList.remove("menu-open");
    }
  });

  /* project modal fill */
  const ARTS = {
    w1: `<span class="art-pos mtag mono">RAG · 96% accurate</span>
         <div class="art-pos rc"><i style="height:32%"></i><i style="height:55%"></i><i style="height:44%"></i><i style="height:70%"></i><i style="height:58%"></i><i style="height:90%"></i></div>`,
    w2: `<div class="bub q1">How do we reset access for the Kano branch?</div>
         <div class="bub q2"><b>Draft reply</b>Same steps as ticket #4,182, access tab</div>`,
    w3: `<div class="doc">
           <div class="row"><span>invoice #Q-88</span><b>| 124,800</b></div>
           <div class="row"><span>fields parsed</span><b>14 / 14</b></div>
           <div class="row"><span>confidence</span><b>0.96</b></div>
           <div class="row"><span>review queue</span><b>cleared</b></div>
         </div>`,
    w4: `<div class="ph"><div class="scr">
           <div class="bal"><b>| 184,500</b><span>kudi atlas · balance</span></div>
           <div class="row2"><i></i><i></i></div>
         </div></div>`,
    w5: `<div class="panel">
           <svg viewBox="0 0 200 110" aria-hidden="true">
             <g stroke="#1D2015" stroke-opacity=".14"><path d="M0 28h200M0 55h200M0 82h200" /><path d="M40 0v110M80 0v110M120 0v110M160 0v110"/></g>
             <path d="M30 84 C60 60, 74 44, 104 40 S 150 30, 168 24" fill="none" stroke="#D9F953" stroke-width="3.5" stroke-dasharray="7 6" stroke-linecap="round"/>
             <circle cx="30" cy="84" r="7" fill="#1D2015"/><circle cx="168" cy="24" r="8" fill="#46E26B"/><circle cx="104" cy="40" r="5" fill="#D9F953"/>
           </svg>
         </div>`,
    w6: `<div class="art-pos code"><div></div><div></div><div></div><div></div><div></div></div>
         <span class="art-pos caret"></span><span class="art-pos brace">&lt;/&gt;</span>`
  };
  const pm = $("#projectModal");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const d = PROJECTS[card.dataset.id];
      if (!d) return;
      $(".pm-title", pm).textContent = d.title;
      $(".pm-cat", pm).textContent = d.cat;
      $(".pm-desc", pm).textContent = d.desc;
      $(".pm-role", pm).textContent = d.role;
      $(".pm-year", pm).textContent = d.year;
      $(".pm-stack", pm).textContent = d.stack;
      const list = $(".pm-list", pm);
      list.innerHTML = "";
      d.points.forEach((pt) => {
        const li = document.createElement("li");
        li.textContent = pt;
        list.appendChild(li);
      });
      const cover = $(".pm-cover", pm);
      cover.innerHTML = `<div class="art ${d.art}">${ARTS[d.art] || ""}</div>`;
      openModal(pm);
    });
  });

  /* stop clicks inside modal card from closing (backdrop only) */
  $$(".modal-card").forEach((c) => c.addEventListener("click", (e) => e.stopPropagation()));

  /* ---------- Copy email + toast ---------- */
  const toast = $("#toast");
  let toastTimer = null;
  const say = (msg) => {
    $("#toastMsg").textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  };
  $$("[data-copy]").forEach((b) => {
    b.addEventListener("click", () => {
      const text = b.dataset.copy;
      const done = () => say("Email copied ✦");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
      } else fallback();
      function fallback() {
        const ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta);
        ta.select(); try { document.execCommand("copy"); done(); } catch (_) {}
        ta.remove();
      }
    });
  });

  /* ---------- Floating WhatsApp bubble ---------- */
  const fab = $(".fab");
  const hero = $(".hero");
  if (fab && hero) {
    const fo = new IntersectionObserver((en) => {
      fab.classList.toggle("show", !en[0].isIntersecting);
    }, { threshold: 0.05 });
    fo.observe(hero);
  }

  /* ---------- Process steps ---------- */
  const steps = $$(".step");
  if (steps.length) {
    steps[0].classList.add("active");
    steps.forEach((s) => {
      s.addEventListener("click", () => {
        steps.forEach((o) => o.classList.remove("active"));
        s.classList.add("active");
      });
      s.addEventListener("mouseenter", () => {
        steps.forEach((o) => o.classList.remove("active"));
        s.classList.add("active");
      });
    });
  }

  /* ---------- Year ---------- */
  const yr = $("#year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Active nav pill ---------- */
  const navLinks = $$(".pill a[href^='#']");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = "#" + en.target.id;
      navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === id));
    });
  }, { threshold: 0.3, rootMargin: "-20% 0px -55% 0px" });
  $$("section[id], footer[id]").forEach((s) => spy.observe(s));

})();
