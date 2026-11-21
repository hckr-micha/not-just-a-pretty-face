/* ==========================================================
   NOT JUST A PRETTY FACE - script.js
   1. Sources (REFS)     2. Content data     3. Helpers
   4. Render sections    5. Interactions
   ========================================================== */


/* ---------- 1. SOURCES ----------
   s = short label shown on cards, t = full APA-style reference, u = link.
   Cards use `src: "key"` or `src: ["key1", "key2"]`. */
const REFS = {
  who: {
    s: "WHO: Obesity and overweight",
    t: "World Health Organization. (n.d.). Obesity and overweight [Fact sheet].",
    u: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
  },
  whoAgeism: {
    s: "WHO: Ageism is a global challenge",
    t: "World Health Organization. (2021, March 18). Ageism is a global challenge: UN [News release].",
    u: "https://www.who.int/news/item/18-03-2021-ageism-is-a-global-challenge-un"
  },
  inquirer: {
    s: "Inquirer: The worth of our weight",
    t: "The worth of our weight [Opinion column]. (2025, March 10). Inquirer.net.",
    u: "https://opinion.inquirer.net/181481/the-worth-of-our-weight"
  },
  bernard: {
    s: "Bernard et al. (2023)",
    t: "Bernard, L., Park, L. S., Martinez, L. R., & Kulason, K. (2023). Gender benders and job contenders: Cosmetics in selection contexts for women and men. Equality, Diversity and Inclusion, 42(6), 737-753.",
    u: "https://doi.org/10.1108/EDI-03-2022-0080"
  },
  dellinger: {
    s: "Dellinger & Williams (1997)",
    t: "Dellinger, K., & Williams, C. L. (1997). Makeup at work: Negotiating appearance rules in the workplace. Gender & Society, 11(2), 151-177.",
    u: "https://doi.org/10.1177/089124397011002002"
  },
  wienke: {
    s: "Wienke (1998)",
    t: "Wienke, C. (1998). Negotiating the male body: Men, masculinity, and cultural ideals. The Journal of Men's Studies, 6(3), 255-282.",
    u: "https://doi.org/10.1177/106082659800600301"
  },
  lavender: {
    s: "Lavender et al. (2017)",
    t: "Lavender, J. M., Brown, T. A., & Murray, S. B. (2017). Men, muscles, and eating disorders: An overview of traditional and muscularity-oriented disordered eating. Current Psychiatry Reports.",
    u: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5731454"
  },
  policarpio: {
    s: "Policarpio et al. (2022)",
    t: "Policarpio, M. R., Dreisbach, J. L., Masalunga, A. G. R., Redondo, A., & Demeterio, F. P. A. (2022). Generational and gender differences on the perception of the attractiveness of the darker skin complexion by Filipinos in Metro Manila. Revista Colombiana de Psicologia, 31(2), 93-104.",
    u: "https://doi.org/10.15446/rcp.v31n2.100516"
  },
  mayo: {
    s: "Mayo Clinic: Acne",
    t: "Mayo Clinic. (2024). Acne: Symptoms and causes.",
    u: "https://www.mayoclinic.org/diseases-conditions/acne/symptoms-causes/syc-20368047"
  },
  sharma: {
    s: "Sharma & Vidal (2023)",
    t: "Sharma, A., & Vidal, C. (2023). A scoping literature review of the associations between highly visual social media use and eating disorders and disordered eating: A changing landscape. Journal of Eating Disorders, 11, Article 170.",
    u: "https://doi.org/10.1186/s40337-023-00898-6"
  },
  couric: {
    s: "Katie Couric Media: Body goals then and now",
    t: "Katie Couric Media. (n.d.). Body goals then and now: Why the \"perfect\" figure is a total fallacy.",
    u: "https://katiecouric.com/health/mental-health/body-image-ideals-history"
  },
  gettysburg: {
    s: "Gettysburg College: Beauty ideals through a historical lens",
    t: "Gettysburg College Sociology Department. (n.d.). Beauty ideals through a historical lens [Student capstone].",
    u: "https://sociology.sites.gettysburg.edu/capstones/johnni03/beauty-ideals-through-a-historical-lens/"
  },
  media: {
    s: "PCW: Code of Ethics for Media",
    t: "Philippine Commission on Women. (n.d.). Code of ethics for media [PDF], citing Magna Carta of Women, Section 16.",
    u: "https://nsc.gov.ph/wp-content/uploads/2026/02/Code-of-Ethics-for-Media.pdf"
  },
  ra9710: {
    s: "Official Gazette: RA 9710",
    t: "Official Gazette of the Republic of the Philippines. (2009, August 14). Republic Act No. 9710: An act providing for the Magna Carta of Women.",
    u: "https://www.officialgazette.gov.ph/2009/08/14/republic-act-no-9710/"
  },
  pcw9710: {
    s: "PCW: Magna Carta of Women",
    t: "Philippine Commission on Women. (n.d.). Republic Act 9710: The Magna Carta of Women.",
    u: "https://pcw.gov.ph/?p=23202"
  },
  ra11313: {
    s: "Official Gazette: RA 11313",
    t: "Official Gazette of the Republic of the Philippines. (2019, April 17). Republic Act No. 11313: Safe Spaces Act.",
    u: "https://www.officialgazette.gov.ph/2019/04/17/republic-act-no-11313/"
  },
  pcw11313: {
    s: "PCW: Safe Spaces Act FAQ",
    t: "Philippine Commission on Women. (n.d.). FAQ: Republic Act No. 11313 (Safe Spaces Act).",
    u: "https://pcw.gov.ph/faq-republic-act-no-11313/"
  },
  ra10627: {
    s: "Official Gazette: RA 10627",
    t: "Official Gazette of the Republic of the Philippines. (2013, September 12). Republic Act No. 10627: Anti-Bullying Act of 2013.",
    u: "https://www.officialgazette.gov.ph/2013/09/12/republic-act-no-10627/"
  },
  irr10627: {
    s: "DepEd Order No. 55, s. 2013 (IRR)",
    t: "Supreme Court E-Library. (2013, December 23). DepEd Order No. 55, s. 2013: Implementing rules and regulations of Republic Act No. 10627.",
    u: "https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/72034"
  }
};


/* ---------- 2. CONTENT DATA (edit text here) ---------- */
const SAYINGS = [
  {
    s: "\u201cWomen are just too lazy. If they want to lose weight, they should work out more.\u201d",
    t: "Body weight is shaped by genetics, hormones, medications, health conditions, sleep, environment, and lifestyle. Exercise is helpful, but reducing someone's body to \u201claziness\u201d is inaccurate and unfair.",
    src: "who"
  },
  {
    s: "\u201cWomen should always wear makeup to look presentable.\u201d",
    t: "Makeup is a personal choice. Professionalism, competence, and worth do not depend on whether someone wears it. Research does find that women who wear makeup can face less discrimination when job-seeking, which shows how strong the social pressure is, not that makeup measures ability.",
    src: ["bernard", "dellinger"]
  },
  {
    s: "\u201cMen should always be muscular and physically strong.\u201d",
    t: "Men face body-image pressure too. Research describes the muscular body as a dominant cultural ideal for men, linked to ideas of masculinity. Muscle, height, and strength do not measure masculinity or worth.",
    src: ["wienke", "lavender"]
  },
  {
    s: "\u201cDark skin is less beautiful than fair skin.\u201d",
    t: "Skin color does not determine beauty or value. A Metro Manila study found a general preference for lighter skin, but Generation Z respondents rated light and dark skin as equally attractive, which shows these attitudes can change.",
    src: "policarpio"
  },
  {
    s: "\u201cPeople with acne don't take care of themselves.\u201d",
    t: "Acne is not caused by dirty skin. Genetics and hormones play a role, and scrubbing too hard can make it worse. It is not an automatic sign of poor hygiene.",
    src: "mayo"
  },
  {
    s: "\u201cBeing overweight means someone is unhealthy.\u201d",
    t: "Weight alone cannot fully describe health. Health is judged using several factors, ideally by a health professional. Weight stigma is also widely discussed in the Philippines.",
    src: ["who", "inquirer"]
  },
  {
    s: "\u201cWomen become less attractive as they age.\u201d",
    t: "Aging is natural. The WHO reports that age-based stereotypes and discrimination harm health and well-being, so expectations about youth should not decide how people are valued.",
    src: "whoAgeism"
  },
  {
    s: "\u201cPeople should change their appearance to fit society's expectations.\u201d",
    t: "Everyone deserves dignity and respect whether or not they match conventional beauty standards. The Magna Carta of Women itself calls for non-derogatory portrayal of women in media.",
    src: "media"
  }
];

const TIMELINE = [
  {
    p: "1920s\u20131930s",
    imgs: [
      { f: "assets/images/timeline-1920s-1.jpg", alt: "A woman in a 1920s drop-waist dress and bobbed haircut", credit: "" },
      { f: "assets/images/timeline-1920s-2.jpg", alt: "A 1920s fashion illustration of slim, straight silhouettes", credit: "" }
    ],
    t: "The slim, boyish silhouette",
    d: "Straight, slim shapes and short bobbed hair became fashionable after the corseted looks of earlier years.",
    src: "couric"
  },
  {
    p: "1950s\u20131960s",
    imgs: [
      { f: "assets/images/timeline-1950s-1.jpg", alt: "A 1950s-style hourglass dress and styled hair", credit: "" },
      { f: "assets/images/timeline-1950s-2.jpg", alt: "A 1960s-style slim mod fashion look", credit: "" }
    ],
    t: "From hourglass to ultra-slim",
    d: "The 1950s favored a curvy hourglass figure, symbolized by Hollywood stars like Marilyn Monroe. The 1960s moved toward a very slim, youthful look.",
    src: "couric"
  },
  {
    p: "1980s\u20131990s",
    imgs: [
      { f: "assets/images/timeline-1980s-1.jpg", alt: "People exercising in a 1980s aerobics class", credit: "" },
      { f: "assets/images/timeline-1980s-2.jpg", alt: "A 1990s minimalist fashion look", credit: "" }
    ],
    t: "Athletic, then extremely thin",
    d: "In the 1980s, slim but strong, toned bodies became the ideal. By the 1990s, high fashion favored a very thin \u201cwaif\u201d look.",
    src: ["couric", "gettysburg"]
  },
  {
    p: "2000s\u20132010s",
    imgs: [
      { f: "assets/images/timeline-2000s-1.jpg", alt: "A person taking a selfie with a phone", credit: "" },
      { f: "assets/images/timeline-2000s-2.jpg", alt: "A person scrolling social media on a phone", credit: "" }
    ],
    t: "Athletic ideals and social media",
    d: "In the 2000s, supermodels brought back an athletic, toned look after the \u201cwaif\u201d era. Social media later made comparing ourselves with polished images a daily habit.",
    src: ["couric", "sharma"]
  },
  {
    p: "2020s\u2013present",
    imgs: [
      { f: "assets/images/timeline-2020s-1.jpg", alt: "A phone showing a photo-filter app on a face", credit: "" },
      { f: "assets/images/timeline-2020s-2.jpg", alt: "People of different body types smiling together outdoors", credit: "" }
    ],
    t: "Filters and pushback",
    d: "Photo filters and editing apps blur the line between real and edited faces, and research links them to body dissatisfaction. Body-positivity messaging has pushed back, though weight-based judgment remains common.",
    src: ["sharma", "inquirer"]
  }
];

const FACTS = [
  {
    h: "Weight stigma and health myths",
    img: { f: "assets/images/reality-1.jpg", alt: "People of different body sizes walking together outdoors" },
    t: "Body weight is one indicator among many. WHO describes overweight and obesity as health risks measured at population level, which is different from judging an individual's health or character by size.",
    src: "who"
  },
  {
    h: "Media representation",
    img: { f: "assets/images/reality-2.jpg", alt: "A person looking at a screen full of polished fashion images" },
    t: "Philippine law requires the State to promote non-derogatory portrayal of women in media and film (Magna Carta of Women, Sec. 16), recognizing that how bodies are shown affects how people are treated.",
    src: "media"
  },
  {
    h: "Online appearance-based harassment",
    img: { f: "assets/images/reality-3.jpg", alt: "A person reading hurtful comments on a phone" },
    t: "Gender-based sexual harassment online, including sexist remarks, is covered by the Safe Spaces Act. Not all appearance insults are covered; see the law cards below.",
    src: "pcw11313"
  },
  {
    h: "Colorism, filters, and gender-specific expectations",
    img: { f: "assets/images/reality-4.jpg", alt: "A close-up of a face with a beauty filter on a phone" },
    t: "Skin-tone preferences, edited photos, and \u201cideal\u201d male bodies all shape self-esteem. A Metro Manila study found a general preference for lighter skin, a scoping review links filtered photo activity to body dissatisfaction, and research on men documents the pressure to be muscular.",
    src: ["policarpio", "sharma", "wienke"]
  }
];

const LAWS = [
  {
    n: "Republic Act No. 9710",
    f: "An Act Providing for the Magna Carta of Women",
    d: "A comprehensive women's rights law requiring non-discrimination and gender equality. Section 16 covers nondiscriminatory and nonderogatory portrayal of women in media and film. Section 17 covers women's right to comprehensive, gender-responsive health services.",
    links: ["ra9710", "pcw9710"]
  },
  {
    n: "Republic Act No. 11313",
    f: "Safe Spaces Act (An Act Defining Gender-Based Sexual Harassment in Streets, Public Spaces, Online, Workplaces, and Educational or Training Institutions, Providing Protective Measures and Prescribing Penalties Therefor)",
    d: "Addresses gender-based sexual harassment in streets, public spaces, online, workplaces, and schools or training institutions. It covers sexual harassment acts, which can include sexist remarks or catcalling; it is not a law against all insults.",
    links: ["ra11313", "pcw11313"]
  },
  {
    n: "Republic Act No. 10627",
    f: "Anti-Bullying Act of 2013 (An Act Requiring All Elementary and Secondary Schools to Adopt Policies to Prevent and Address the Acts of Bullying in Their Institutions)",
    d: "Requires elementary and secondary schools to adopt anti-bullying policies. Bullying includes verbal and social bullying, cyber-bullying, and gender-based bullying. Appearance-based teasing may count when it is severe or repeated and meets the definition. It covers basic education, not every setting.",
    links: ["ra10627", "irr10627"]
  }
];

const REMINDERS = [
  "Your appearance is not your entire identity.",
  "You do not owe society a certain version of beauty.",
  "Your body deserves respect, not judgment.",
  "There is no single definition of beauty.",
  "You are more than what people see."
];


/* Hero photos: upload hero1.jpg, hero2.jpg ... up to hero20.jpg into assets/images/.
   Four tiles are always shown; every 5-7 s one tile swaps to a photo not on screen.
   Add alt text for extra photos here (number = file number). */
const HERO_MAX = 20;
const HERO_DEFAULT_ALT = "Photograph from the NOT JUST A PRETTY FACE collage";
const HERO_ALT = {
  1: "Portrait split between a younger and an older woman, each with a hand on her cheek",
  2: "Close-up of a man with vitiligo and the words \u201cwhat's wrong with your skin\u201d written on his cheek",
  3: "Group of women with different skin tones and hair types posing close together",
  4: "Woman with smudged blue eye makeup pulling a thin layer away from her face"
};

/* ---------- 3. HELPERS & SHARED PAGE PARTS ---------- */
const $ = id => document.getElementById(id);
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

const linkList = src => (Array.isArray(src) ? src : [src])
  .map(k => `<a href="${REFS[k].u}" target="_blank" rel="noopener">${REFS[k].s}</a>`).join(" &middot; ");
const srcHtml = src => src
  ? `<p class="src">${Array.isArray(src) && src.length > 1 ? "Sources" : "Source"}: ${linkList(src)}</p>`
  : `<p class="src"><span class="flag">Source needed</span></p>`;



/* ---------- 4. PHOTO HELPERS ---------- */
function loadImg(it) {   // resolves with the item, or null if the file is missing
  return new Promise(done => {
    const t = new Image();
    t.onload = () => done(it);
    t.onerror = () => done(null);
    t.src = it.f;
  });
}

function crossfade(box, items, ms = 6000) {   // fades through photos in `box`
  Promise.all(items.map(loadImg)).then(list => {
    list = list.filter(Boolean);
    if (!list.length) return box.classList.add("missing");
    const imgs = list.map((it, k) => {
      const im = document.createElement("img");
      im.src = it.f; im.alt = it.alt;
      if (k === 0) im.className = "on"; else im.setAttribute("aria-hidden", "true");
      box.append(im);
      return im;
    });
    if (imgs.length < 2 || REDUCED) return;
    let k = 0;
    setInterval(() => {
      imgs[k].classList.remove("on"); imgs[k].setAttribute("aria-hidden", "true");
      k = (k + 1) % imgs.length;
      imgs[k].classList.add("on"); imgs[k].removeAttribute("aria-hidden");
    }, ms);
  });
}


/* ---------- 5. PAGE CONTENT (each block only runs on its own page) ---------- */

// HOME: hero collage (4 tiles, a new unused photo every 5-7 s)
if ($("collage")) {
  const tiles = ["Your worth", "is not", "your face.", "\u2665"].map(label => {
    const t = document.createElement("div");
    t.className = "tile ph"; t.dataset.label = label;
    $("collage").append(t);
    return t;
  });
  Promise.all(Array.from({ length: HERO_MAX }, (_, k) =>
    loadImg({ f: `assets/images/hero${k + 1}.jpg`, alt: HERO_ALT[k + 1] || HERO_DEFAULT_ALT })
  )).then(list => {
    const pool = list.filter(Boolean);
    if (!pool.length) return tiles.forEach(t => t.classList.add("missing"));
    const shown = tiles.map((_, i) => i % pool.length);
    const cur = tiles.map(() => 0);
    const layers = tiles.map(t => [0, 1].map(() => {
      const im = document.createElement("img");
      im.setAttribute("aria-hidden", "true");
      return t.appendChild(im);
    }));
    const put = (i, k, first) => {
      const off = layers[i][first ? 0 : 1 - cur[i]];
      off.src = pool[k].f; off.alt = pool[k].alt;
      off.removeAttribute("aria-hidden"); off.className = "on";
      if (!first) {
        const old = layers[i][cur[i]];
        old.className = ""; old.setAttribute("aria-hidden", "true");
        cur[i] = 1 - cur[i];
      }
    };
    tiles.forEach((_, i) => put(i, shown[i], true));
    if (pool.length < 2 || REDUCED) return;
    const next = i => {
      const free = pool.map((_, k) => k).filter(k => !shown.includes(k));
      return free.length ? free[Math.floor(Math.random() * free.length)] : (shown[i] + 1) % pool.length;
    };
    const loop = i => setTimeout(() => { shown[i] = next(i); put(i, shown[i]); loop(i); }, 5000 + Math.random() * 2000);
    tiles.forEach((_, i) => setTimeout(() => loop(i), i * 1200));
  });
}

// SAYINGS: cards that rip apart to reveal the truth
if ($("sayGrid")) {
  $("sayGrid").innerHTML = SAYINGS.map((c, i) => `
    <article class="rip" id="rip${i}">
      <div class="face front">
        <p class="quote">${c.s}</p>
        <button data-i="${i}" aria-expanded="false">Reveal the Truth</button>
      </div>
      <div class="face back" inert aria-hidden="true">
        <p>${c.t}</p>
        ${srcHtml(c.src)}
        <button data-i="${i}" aria-expanded="true">Hide</button>
      </div>
    </article>`).join("");

  $("sayGrid").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const card = $("rip" + b.dataset.i);
    const front = card.querySelector(".front"), back = card.querySelector(".back");
    const open = !card.classList.contains("torn");
    card.classList.toggle("torn", open);
    front.inert = open; back.inert = !open;
    front.setAttribute("aria-hidden", open); back.setAttribute("aria-hidden", !open);
    if (open && !REDUCED) {                      // two torn halves fly apart
      ["l", "r"].forEach(side => {
        const half = front.cloneNode(true);
        half.className = "face half " + side;
        card.append(half);
        setTimeout(() => half.remove(), 900);
      });
    }
    (open ? back : front).querySelector("button").focus({ preventScroll: true });
  });
}

// TIMELINE: one slideshow (swipe or click to go on, no arrow buttons)
if ($("tl")) {
  $("tl").innerHTML = `
    <div class="tl-track" id="tlTrack">${TIMELINE.map((p, i) => `
      <article class="tl-slide" data-year="${p.p.slice(0, 5)}">
        <div class="tl-photo ph" id="tlPhoto${i}" data-label="${p.p}"></div>
        <div class="tl-text"><h3>${p.p}</h3><h4>${p.t}</h4><p>${p.d}</p>${srcHtml(p.src)}</div>
      </article>`).join("")}</div>
    <div class="dots">${TIMELINE.map((p, i) => `<button class="dot${i ? "" : " on"}" aria-label="Go to ${p.p}"></button>`).join("")}</div>`;
  TIMELINE.forEach((p, i) => crossfade($("tlPhoto" + i), p.imgs));

  const track = $("tlTrack"), box = $("tl"), n = TIMELINE.length, dots = box.querySelectorAll(".dot");
  const cur = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = k => track.scrollTo({ left: k * track.clientWidth, behavior: "smooth" });
  const step = () => go((cur() + 1) % n);
  track.addEventListener("click", e => { if (!e.target.closest("a")) step(); });
  dots.forEach((d, k) => { d.onclick = () => go(k); });
  track.addEventListener("scroll", () => dots.forEach((d, k) => d.classList.toggle("on", k === cur())));
  if (!REDUCED) {
    let t;
    const start = () => { clearInterval(t); t = setInterval(step, 7000); };
    ["mouseenter", "focusin", "touchstart"].forEach(ev => box.addEventListener(ev, () => clearInterval(t)));
    ["mouseleave", "focusout"].forEach(ev => box.addEventListener(ev, start));
    start();
  }
}

// REALITY: fact cards with photos
if ($("factGrid")) {
  $("factGrid").innerHTML = FACTS.map((f, i) => `
    <article class="card">
      <div class="card-img ph" id="factImg${i}" data-label="${f.h}"></div>
      <h3>${f.h}</h3><p>${f.t}</p>${srcHtml(f.src)}
    </article>`).join("");
  FACTS.forEach((f, i) => crossfade($("factImg" + i), [f.img]));
}

// RIGHTS: law cards
if ($("lawGrid")) {
  $("lawGrid").innerHTML = LAWS.map(l => `
    <article class="card">
      <h3>${l.n}</h3><p><strong>${l.f}</strong></p><p>${l.d}</p>
      <p class="src">Official references: ${linkList(l.links)}</p>
    </article>`).join("");
}

// BEYOND: random reminder + floating hearts
if ($("remindBtn")) {
  let last = -1;
  $("remindBtn").addEventListener("click", e => {
    let i;
    do { i = Math.floor(Math.random() * REMINDERS.length); } while (i === last);
    last = i;
    const out = $("reminder");
    out.textContent = REMINDERS[i];
    out.classList.remove("pop"); void out.offsetWidth; out.classList.add("pop");
    if (REDUCED) return;
    const r = e.currentTarget.getBoundingClientRect();
    for (let k = 0; k < 8; k++) {
      const h = document.createElement("span");
      h.className = "heart"; h.textContent = "\u2665";
      h.style.cssText = `left:${r.left + r.width / 2}px;top:${r.top + scrollY}px;--dx:${(Math.random() - 0.5) * 160}px;--s:${0.8 + Math.random()}`;
      document.body.append(h);
      setTimeout(() => h.remove(), 1400);
    }
  });
}


/* ---------- 6. SHARED INTERACTIONS ---------- */
const nav = $("navLinks"), menuBtn = $("menuBtn");
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", e => {   // close the mobile menu after choosing a section
  if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});
const navLinks = [...nav.querySelectorAll("a")];   // highlight the section you are reading
const spy = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.hash === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(sec => spy.observe(sec));

const toTop = $("toTop"), bar = $("progress");
addEventListener("scroll", () => {
  toTop.hidden = scrollY < 600;
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
});
toTop.addEventListener("click", () => scrollTo({ top: 0 }));

if (!REDUCED) {   // scroll reveal (classes are only added when motion is allowed)
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll("section h2, section .lead, .tl, .collage, .chips, blockquote, .cab")
    .forEach(el => { el.classList.add("reveal"); io.observe(el); });
  document.querySelectorAll(".grid").forEach(g => {
    g.classList.add("stag");
    [...g.children].forEach((c, i) => c.style.setProperty("--n", i));
    io.observe(g);
  });
}


/* ---------- 7. CONFETTI (used when you win the game) ---------- */
function confetti() {
  if (REDUCED) return;
  const c = document.createElement("canvas");
  c.className = "confetti"; c.width = innerWidth; c.height = innerHeight;
  document.body.append(c);
  const x = c.getContext("2d"), cols = ["#C93A56", "#F4B63A", "#3E6CB4", "#BBD6E0", "#fff"];
  const bits = Array.from({ length: 150 }, () => ({
    x: Math.random() * c.width, y: -20 - Math.random() * c.height * 0.6,
    w: 6 + Math.random() * 6, h: 8 + Math.random() * 8,
    vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 3,
    r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
    c: cols[Math.floor(Math.random() * cols.length)]
  }));
  let t = 0;
  (function tick() {
    x.clearRect(0, 0, c.width, c.height);
    bits.forEach(b => {
      b.x += b.vx; b.y += b.vy; b.r += b.vr;
      x.save(); x.translate(b.x, b.y); x.rotate(b.r);
      x.fillStyle = b.c; x.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
      x.restore();
    });
    if (++t < 280) requestAnimationFrame(tick); else c.remove();
  })();
}


/* ---------- 8. ARCADE GAME: STIGMA SMASH ---------- */
if ($("game")) (function () {
  const cv = $("game"), g = cv.getContext("2d"), W = 360, H = 520;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  cv.width = W * dpr; cv.height = H * dpr; g.scale(dpr, dpr);

  // [stereotype the monster throws, truth shown when you shoot it]
  const BANK = [
    ["Too lazy", "Bodies aren't laziness"], ["Wear makeup", "Makeup is a choice"], ["Be muscular", "Worth isn't muscle"],
    ["Too dark", "All skin tones glow"], ["Dirty skin", "Skin is just skin"], ["Too fat", "Health isn't a size"],
    ["Too old", "Age is natural"], ["Fit in", "Be yourself"], ["Too skinny", "All bodies are valid"],
    ["Too short", "Height isn't worth"], ["Not pretty", "Beauty has no rules"], ["Fix your nose", "Faces aren't projects"],
    ["Cover the acne", "Skin has texture"], ["Too hairy", "Hair is natural"], ["Look younger", "Aging is living"],
    ["Lose weight", "You're not a number"], ["Ugly", "Worth isn't looks"], ["Girls must be thin", "Bodies come in all sizes"],
    ["Real men are tall", "Men come in all sizes"], ["Dress sexy", "Dress for you"], ["Smile more", "Your face is yours"],
    ["Too plain", "Simple is enough"], ["Wrinkles are bad", "Wrinkles are stories"], ["Use a filter", "Real faces are real"],
    ["Skip dessert", "Food isn't a sin"], ["Hide your scars", "Scars tell stories"], ["Girls don't sweat", "Sweat is strength"],
    ["Be fair-skinned", "Skin owes no shade"]
  ];
  // ===== GAME TEXT: change the words inside the quotes =====
  const T = {
    marquee: "STIGMA SMASH",   // sign on top of the machine
    title: "STIGMA SMASH",     // start screen title
    intro: "Shoot the stereotypes, dodge the rest, and take down the 1,000 HP monster. You have 3 lives.",
    start: "START",            // start button
    winTitle: "YOU WIN!",
    win: "You beat the Stigma Monster! Your worth was never decided by your face, your size, or your skin. Keep challenging beauty standards.",
    loseTitle: "TRY AGAIN",
    lose: "The monster won this round, but its stereotypes are never true. You are worth more than how you look. Try again!",
    again: "PLAY AGAIN",       // button after winning
    retry: "RETRY",            // button after losing
    ko: "K.O.!"                // big text when the monster is defeated
  };
  document.querySelector(".cab-top").textContent = T.marquee;
  $("gTitle").textContent = T.title;
  $("gMsg").textContent = T.intro;
  $("gStart").textContent = T.start;

  let state = "menu", keys = {}, deck = [];
  let p, bullets, foes, pops, bits, rings, boss, lives, score, last, spawn, cool, inv, dyingT, flash, boom;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const nextFoe = () => {   // shuffled deck: every statement appears before any repeats
    if (!deck.length) deck = BANK.map((_, i) => i).sort(() => Math.random() - 0.5);
    return BANK[deck.pop()];
  };

  function hud() {
    $("gLives").innerHTML = "<i>\u2665</i>".repeat(lives) + '<i class="off">\u2665</i>'.repeat(3 - lives);
    $("gHpBar").style.width = Math.max(0, boss.hp / 10) + "%";
    $("gHpTxt").textContent = Math.max(0, boss.hp) + " HP";
    $("gScore").textContent = score;
  }

  function reset() {
    p = { x: W / 2, y: H - 50 };
    bullets = []; foes = []; pops = []; bits = []; rings = []; flash = 0; boom = false;
    lives = 3; score = 0; cool = 0; spawn = 1; inv = 0; dyingT = 0;
    boss = { x: W / 2, y: 85, hp: 1000, t: 0, flash: 0 };
    hud();
  }

  function finish(win) {
    state = "end";
    $("gTitle").textContent = win ? T.winTitle : T.loseTitle;
    $("gMsg").textContent = win ? T.win : T.lose;
    $("gStart").textContent = win ? T.again : T.retry;
    $("gOverlay").hidden = false;
    if (win) confetti();
  }

  const shake = () => {   // jolt the game screen
    const el = cv.parentElement;
    el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake");
  };

  function die() {   // defeat: the monster shakes and flashes with X eyes...
    state = "dying"; dyingT = 0; keys = {}; foes = []; boom = false;
    shake();
  }

  function explode() {   // ...then bursts into pieces, with a shockwave and K.O.!
    boom = true; flash = 1; shake();
    rings.push({ x: boss.x, y: boss.y, r: 20, life: 0.8 }, { x: boss.x, y: boss.y, r: 4, life: 1 });
    const cols = ["#C93A56", "#F4B63A", "#3E6CB4", "#241B33", "#F08FC0"];
    for (let i = 0; i < 70; i++) {
      const a = Math.random() * 6.28, v = 100 + Math.random() * 280;
      bits.push({ x: boss.x, y: boss.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 60, g: 420, life: 1.7, r: 4 + Math.random() * 6, c: cols[i % cols.length], star: i % 5 === 0 });
    }
  }

  function hit(x, y) {   // every hit takes 50, 70 or 100 HP
    const d = [50, 70, 100][Math.floor(Math.random() * 3)];
    boss.hp -= d; boss.flash = 0.15; score += d;
    pops.push({ x, y: y - 22, s: "-" + d, life: 0.9, dmg: true });
    hud();
    if (boss.hp <= 0 && state === "play") die();
  }

  function update(dt) {
    boss.flash = Math.max(0, boss.flash - dt);
    bits.forEach(b => { b.vy += (b.g || 0) * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt; });
    bits = bits.filter(b => b.life > 0);
    rings.forEach(r => { r.r += 260 * dt; r.life -= dt * 1.2; });
    rings = rings.filter(r => r.life > 0);
    pops.forEach(o => { o.life -= dt; o.y -= 30 * dt; });
    pops = pops.filter(o => o.life > 0);
    if (state === "dying") {
      dyingT += dt; flash = Math.max(0, flash - dt * 2.2);
      if (!boom && dyingT > 1) explode();
      if (dyingT > 2.7) finish(true);
      return;
    }

    const dir = ((keys.ArrowRight || keys.KeyD || keys.right) ? 1 : 0) - ((keys.ArrowLeft || keys.KeyA || keys.left) ? 1 : 0);
    p.x = clamp(p.x + dir * 280 * dt, 24, W - 24);
    cool -= dt; inv -= dt;
    if ((keys.Space || keys.fire) && cool <= 0) { bullets.push({ x: p.x, y: p.y - 20 }); cool = 0.28; }

    boss.t += dt;
    boss.x = W / 2 + Math.sin(boss.t * 0.9) * 110;
    const rage = 1 - boss.hp / 1000;
    spawn -= dt;
    if (spawn <= 0) {
      const f = nextFoe();
      g.font = "700 15px 'DM Sans', sans-serif";
      foes.push({ x: boss.x, y: boss.y + 50, w: g.measureText(f[0]).width + 26, s: f[0], t: f[1], vy: 80 + Math.random() * 40 + rage * 40, vx: (Math.random() - 0.5) * 50 });
      spawn = 1.5 - rage * 0.6;
    }
    bullets.forEach(b => { b.y -= 430 * dt; });
    foes.forEach(f => { f.y += f.vy * dt; f.x = clamp(f.x + f.vx * dt, f.w / 2, W - f.w / 2); });

    for (const b of bullets) {
      if (state !== "play") break;
      const f = foes.find(f => !f.dead && Math.abs(b.x - f.x) < f.w / 2 && Math.abs(b.y - f.y) < 16);
      if (f) { b.dead = f.dead = true; pops.push({ x: f.x, y: f.y, s: f.t, life: 1.3 }); hit(f.x, f.y); }
      else if (Math.abs(b.x - boss.x) < 55 && b.y < boss.y + 40 && b.y > boss.y - 45) { b.dead = true; hit(boss.x, boss.y + 40); }
    }
    if (state !== "play") return;
    foes.forEach(f => {
      if (!f.dead && inv <= 0 && Math.abs(f.x - p.x) < f.w / 2 + 14 && Math.abs(f.y - p.y) < 24) {
        f.dead = true; lives--; inv = 1.2; hud();
        if (lives <= 0) finish(false);
      }
    });
    bullets = bullets.filter(b => !b.dead && b.y > -10);
    foes = foes.filter(f => !f.dead && f.y < H + 30);
  }

  const rbox = (x, y, w, h, r) => { g.beginPath(); (g.roundRect || g.rect).call(g, x, y, w, h, r); };
  const ring = (x, y, r, fill) => { g.beginPath(); g.arc(x, y, r, 0, 7); g.fillStyle = fill; g.fill(); };

  function draw() {
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#D5E8EE"); bg.addColorStop(1, "#A5C6D4");
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.textAlign = "center"; g.lineJoin = "round";

    // monster: shakes, flashes and shows X eyes while dying, then explodes
    const dead = state === "dying";
    if (!(dead && boom)) {
      const sh = dead ? Math.min(1, dyingT) * 9 : 0, grow = dead ? 1 + Math.min(dyingT, 1) * 0.25 : 1;
      g.save();
      g.translate(boss.x + (Math.random() - 0.5) * sh, boss.y + (Math.random() - 0.5) * sh);
      g.scale(grow, grow);
      g.strokeStyle = "#241B33"; g.lineWidth = 4;
      g.fillStyle = "#F4B63A";   // horns
      [-1, 1].forEach(d => { g.beginPath(); g.moveTo(d * 20, -40); g.lineTo(d * 40, -72); g.lineTo(d * 44, -30); g.closePath(); g.fill(); g.stroke(); });
      g.beginPath(); g.arc(0, 0, 48, 0, 7);
      g.fillStyle = (boss.flash > 0 || (dead && Math.floor(dyingT * 12) % 2)) ? "#fff" : "#C93A56"; g.fill(); g.stroke();
      if (dead) {   // X eyes and an open mouth
        g.beginPath();
        [-18, 18].forEach(d => { g.moveTo(d - 9, -17); g.lineTo(d + 9, 1); g.moveTo(d + 9, -17); g.lineTo(d - 9, 1); });
        g.stroke();
        g.beginPath(); g.arc(0, 26, 9, 0, 7); g.stroke();
      } else {
        [-18, 18].forEach(d => { ring(d, -8, 11, "#fff"); g.beginPath(); g.arc(d, -8, 11, 0, 7); g.stroke(); ring(d, -5, 5, "#241B33"); });
        g.beginPath(); g.moveTo(-32, -28); g.lineTo(-8, -18); g.moveTo(32, -28); g.lineTo(8, -18); g.stroke();
        g.beginPath(); g.moveTo(-24, 24); for (let i = 0; i < 6; i++) g.lineTo(-24 + i * 9.6 + 4.8, i % 2 ? 24 : 12); g.stroke();
      }
      g.restore();
    }
    // shockwave rings and flying pieces
    rings.forEach(r => { g.globalAlpha = Math.max(0, Math.min(1, r.life)); g.strokeStyle = "#F4B63A"; g.lineWidth = 6; g.beginPath(); g.arc(r.x, r.y, r.r, 0, 7); g.stroke(); });
    g.font = "16px sans-serif";
    bits.forEach(b => {
      g.globalAlpha = Math.max(0, Math.min(1, b.life)); g.fillStyle = b.c;
      if (b.star) g.fillText("\u2605", b.x, b.y); else g.fillRect(b.x, b.y, b.r, b.r);
    });
    g.globalAlpha = 1;
    if (dead && boom) {   // K.O.! pops in
      const k = Math.min(1, (dyingT - 1) * 3), z = 0.4 + k * 0.6;
      g.save(); g.translate(W / 2, H / 2 - 20); g.scale(z, z);
      g.font = "400 46px 'Press Start 2P', monospace"; g.lineWidth = 10; g.strokeStyle = "#241B33"; g.strokeText(T.ko, 0, 0);
      g.fillStyle = "#F4B63A"; g.fillText(T.ko, 0, 0); g.restore();
    }
    if (flash > 0) { g.globalAlpha = flash * 0.85; g.fillStyle = "#fff"; g.fillRect(0, 0, W, H); g.globalAlpha = 1; }

    // stereotypes
    g.font = "700 15px 'DM Sans', sans-serif";
    foes.forEach(f => {
      g.fillStyle = "#241B33"; rbox(f.x - f.w / 2, f.y - 14, f.w, 28, 8); g.fill();
      g.fillStyle = "#FFD98A"; g.fillText(f.s, f.x, f.y + 5);
    });
    // popups: truths (blue) and damage (red)
    pops.forEach(o => {
      g.globalAlpha = Math.min(1, o.life * 1.5);
      g.font = o.dmg ? "800 18px 'DM Sans', sans-serif" : "700 14px 'DM Sans', sans-serif";
      g.lineWidth = 4; g.strokeStyle = "#fff";
      const x = clamp(o.x, 75, W - 75);
      g.strokeText(o.s, x, o.y);
      g.fillStyle = o.dmg ? "#C93A56" : "#274B88"; g.fillText(o.s, x, o.y);
    });
    g.globalAlpha = 1;
    // shots and player flower (blinks while protected)
    g.font = "18px sans-serif"; g.fillStyle = "#C93A56";
    bullets.forEach(b => g.fillText("\u2665", b.x, b.y));
    if (state !== "dying" && !(inv > 0 && Math.floor(inv * 10) % 2)) {
      g.strokeStyle = "#241B33"; g.lineWidth = 2;
      for (let i = 0; i < 6; i++) {
        const px = p.x + Math.cos(i * 1.047) * 10, py = p.y + Math.sin(i * 1.047) * 10;
        ring(px, py, 8, "#F4B63A"); g.beginPath(); g.arc(px, py, 8, 0, 7); g.stroke();
      }
      ring(p.x, p.y, 7, "#C93A56");
    }
  }

  function loop(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    update(dt); draw();
    if (state === "play" || state === "dying") requestAnimationFrame(loop);
  }

  $("gStart").onclick = () => {
    reset(); keys = {};
    $("gOverlay").hidden = true;
    state = "play"; last = performance.now();
    requestAnimationFrame(loop);
  };

  // Keyboard (only while playing, so the page can still scroll normally)
  addEventListener("keydown", e => {
    if (state !== "play" || !["ArrowLeft", "ArrowRight", "KeyA", "KeyD", "Space"].includes(e.code)) return;
    e.preventDefault(); keys[e.code] = true;
  });
  addEventListener("keyup", e => { keys[e.code] = false; });

  // Arcade buttons (mouse and touch)
  [["gLeft", "left"], ["gRight", "right"], ["gFire", "fire"]].forEach(([id, k]) => {
    const b = $(id);
    b.addEventListener("pointerdown", e => { e.preventDefault(); keys[k] = true; b.classList.add("on"); });
    ["pointerup", "pointerleave", "pointercancel"].forEach(ev =>
      b.addEventListener(ev, () => { keys[k] = false; b.classList.remove("on"); }));
  });

  // Touch / mouse drag on the screen moves the flower
  const drag = e => {
    if (state !== "play" || !e.buttons) return;
    const r = cv.getBoundingClientRect();
    p.x = clamp((e.clientX - r.left) / r.width * W, 24, W - 24);
  };
  cv.addEventListener("pointerdown", drag);
  cv.addEventListener("pointermove", drag);

  reset(); draw();   // show the monster behind the start screen
})();