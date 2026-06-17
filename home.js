/* =========================================================
   home.js — homepage-specific rendering & interactions
   ========================================================= */

/* ---------- Hero Slider ---------- */
function renderHeroSlider() {
  const wrap = document.getElementById('hero-slider');
  const dotsWrap = document.getElementById('hero-dots');
  if (!wrap) return;

  SITE.hero.forEach((slide, i) => {
    const slideEl = el(`
      <div class="hero-slide ${i === 0 ? 'active' : ''}" style="background-image:url('${slide.image}')">
        <div class="hero-slide-content">
          <span class="tag-eyebrow text-white/90 mb-4">Welcome to</span>
          <h1 class="font-display font-bold text-white text-3xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">${slide.heading}</h1>
          <p class="text-white/85 max-w-xl mt-5 text-base sm:text-lg">${slide.subheading}</p>
          <a href="${slide.cta.href}" class="btn-saffron mt-8">${slide.cta.label}</a>
        </div>
      </div>`);
    wrap.appendChild(slideEl);

    const dot = el(`<button class="hero-dot ${i === 0 ? 'active' : ''}" aria-label="Go to slide ${i + 1}" data-idx="${i}"></button>`);
    dotsWrap.appendChild(dot);
  });

  const slides = wrap.querySelectorAll('.hero-slide');
  const dots = dotsWrap.querySelectorAll('.hero-dot');
  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  document.getElementById('hero-next').addEventListener('click', () => { next(); startAuto(); });
  document.getElementById('hero-prev').addEventListener('click', () => { prev(); startAuto(); });
  dots.forEach(dot => dot.addEventListener('click', () => { goTo(Number(dot.dataset.idx)); startAuto(); }));

  startAuto();
}

/* ---------- Four Pillars ---------- */
function renderPillars() {
  const grid = document.getElementById('pillars-grid');
  if (!grid) return;
  SITE.pillars.forEach(p => {
    grid.appendChild(el(`
      <div class="reveal bg-white rounded-2xl border-t-4 border-[var(--saffron)] p-7 text-center hover:bg-[var(--tan)]/60 transition-colors shadow-sm">
        <div class="w-16 h-16 mx-auto rounded-full bg-[var(--saffron)]/10 flex items-center justify-center text-3xl mb-4">${p.icon}</div>
        <h3 class="font-display font-bold text-xl text-[var(--text-dark)] mb-2">${p.title}</h3>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">${p.desc}</p>
      </div>`));
  });
}

/* ---------- About section ---------- */
function renderAbout() {
  const { about } = SITE;
  const headingEl = document.getElementById('about-heading');
  const bodyEl = document.getElementById('about-body');
  const mottoEl = document.getElementById('about-motto');
  const collage = document.getElementById('about-collage');
  if (!headingEl) return;

  headingEl.textContent = about.heading;
  bodyEl.textContent = about.body;
  mottoEl.textContent = `“${about.motto}” — ${about.mottoTranslation}`;

  collage.appendChild(el(`<img src="${about.images[0]}" class="absolute top-0 left-0 w-2/3 rounded-2xl gold-border shadow-lg object-cover h-3/5" alt="Ashrama campus">`));
  collage.appendChild(el(`<img src="${about.images[1]}" class="absolute bottom-0 right-0 w-2/3 rounded-2xl gold-border shadow-lg object-cover h-3/5" alt="Ashrama activity">`));
  collage.appendChild(el(`<span class="absolute -top-2 -right-2 sm:right-8 text-5xl">🕉</span>`));

  animateCounter(document.getElementById('years-counter'), about.images ? SITE.org.yearsOfService : 0);
}

function animateCounter(node, target) {
  if (!node) return;
  let current = 0;
  const duration = 1400;
  const stepTime = 30;
  const steps = duration / stepTime;
  const increment = target / steps;
  const tick = () => {
    current += increment;
    if (current >= target) {
      node.textContent = target;
      return;
    }
    node.textContent = Math.floor(current);
    setTimeout(tick, stepTime);
  };
  tick();
}

/* ---------- Inspiration ---------- */
function renderInspiration() {
  const grid = document.getElementById('inspiration-grid');
  if (!grid) return;
  SITE.inspiration.forEach(person => {
    grid.appendChild(el(`
      <a href="inspiration.html#${person.id}" class="inspiration-card reveal block aspect-[3/4] group">
        <img src="${person.image}" alt="${person.name}" class="w-full h-full object-cover">
        <div class="inspiration-overlay">
          <h3 class="font-display font-bold text-2xl text-white">${person.name}</h3>
          <span class="text-[var(--gold)] text-sm font-semibold">${person.years}</span>
        </div>
      </a>`));
  });
}

/* ---------- Activities ---------- */
function renderActivitiesHome() {
  const grid = document.getElementById('activities-grid');
  if (!grid) return;
  SITE.activities.forEach(a => {
    grid.appendChild(el(`
      <div class="activity-card reveal bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start">
        <img src="${a.icon}" alt="" class="w-14 h-14 rounded-full object-cover border-2 border-[var(--saffron)]/40 shrink-0">
        <div>
          <h3 class="font-display font-bold text-lg text-[var(--text-dark)] mb-1">${a.title}</h3>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">${a.shortDesc}</p>
        </div>
      </div>`));
  });
}

/* ---------- Daily Quote ---------- */
function renderQuote() {
  const { dailyQuote } = SITE;
  const textEl = document.getElementById('quote-text');
  if (!textEl) return;
  textEl.textContent = `“${dailyQuote.text}”`;
  document.getElementById('quote-author').textContent = dailyQuote.author;
  document.getElementById('quote-avatar').src = dailyQuote.image;
  document.getElementById('quote-avatar').alt = dailyQuote.author;
}

/* ---------- Arati ---------- */
function renderArati() {
  const grid = document.getElementById('arati-grid');
  if (!grid) return;
  SITE.aratiTimings.forEach(a => {
    grid.appendChild(el(`
      <div class="arati-card reveal" style="background-image:url('${a.image}')">
        <div class="arati-card-content flex flex-col items-center justify-center text-center p-8">
          <span class="text-4xl mb-3">${a.icon}</span>
          <h3 class="font-display font-bold text-xl text-white mb-1">${a.title}</h3>
          <p class="text-[var(--gold)] font-semibold">${a.time}</p>
        </div>
      </div>`));
  });
}

/* ---------- Donate split ---------- */
function renderDonateHome() {
  const bodyEl = document.getElementById('donate-body');
  const imgEl = document.getElementById('donate-image');
  if (!bodyEl) return;
  bodyEl.textContent = SITE.donate.body;
  imgEl.style.backgroundImage = `url('${SITE.donate.image}')`;
}

/* ---------- What We Do ---------- */
function renderWhatWeDo() {
  const bodyEl = document.getElementById('whatwedo-body');
  if (!bodyEl) return;
  bodyEl.textContent = SITE.whatWeDo.body;
}

/* ---------- Testimonials carousel ---------- */
function renderTestimonials() {
  const track = document.getElementById('testimonial-track');
  if (!track) return;
  SITE.testimonials.forEach(t => {
    track.appendChild(el(`
      <div class="testimonial-slide">
        <div class="bg-[var(--tan)] rounded-2xl p-7 h-full flex flex-col">
          <p class="font-display italic text-lg text-[var(--text-dark)] leading-relaxed mb-6">&ldquo;${t.text}&rdquo;</p>
          <div class="flex items-center gap-3 mt-auto">
            <img src="${t.avatar}" alt="${t.name}" class="w-11 h-11 rounded-full object-cover gold-border">
            <div>
              <p class="font-semibold text-[var(--text-dark)] text-sm">${t.name}</p>
              <p class="text-xs text-[var(--text-muted)]">${t.role}</p>
            </div>
          </div>
        </div>
      </div>`));
  });

  const slides = track.querySelectorAll('.testimonial-slide');
  let index = 0;
  function visibleCount() { return window.innerWidth >= 768 ? 3 : 1; }
  function update() {
    const vc = visibleCount();
    const max = Math.max(0, slides.length - vc);
    if (index > max) index = max;
    const pct = (100 / vc) * index;
    track.style.transform = `translateX(-${pct}%)`;
  }
  document.getElementById('testimonial-next').addEventListener('click', () => {
    const vc = visibleCount();
    const max = Math.max(0, slides.length - vc);
    index = index >= max ? 0 : index + 1;
    update();
  });
  document.getElementById('testimonial-prev').addEventListener('click', () => {
    const vc = visibleCount();
    const max = Math.max(0, slides.length - vc);
    index = index <= 0 ? max : index - 1;
    update();
  });
  window.addEventListener('resize', update);
  update();
}

/* ---------- News ---------- */
function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function renderNewsHome() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  SITE.news.slice(0, 3).forEach(n => {
    grid.appendChild(el(`
      <article class="reveal bg-[var(--cream)] rounded-2xl overflow-hidden shadow-sm flex flex-col">
        <img src="${n.image}" alt="${n.title}" class="w-full h-48 object-cover">
        <div class="p-6 flex flex-col flex-1">
          <span class="text-xs text-[var(--text-muted)] font-semibold mb-2">${formatDate(n.date)}</span>
          <h3 class="font-display font-bold text-lg text-[var(--text-dark)] mb-2 leading-snug">${n.title}</h3>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-4 flex-1">${n.excerpt}</p>
          <a href="events.html" class="text-[var(--saffron)] font-semibold text-sm hover:text-[var(--maroon)] transition-colors">Read More →</a>
        </div>
      </article>`));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeroSlider();
  renderPillars();
  renderAbout();
  renderInspiration();
  renderActivitiesHome();
  renderQuote();
  renderArati();
  renderDonateHome();
  renderWhatWeDo();
  renderTestimonials();
  renderNewsHome();
  initScrollReveal();
});




/*videos: [
      { title: "Swami Vivekananda Jayanti 2024", youtubeId: "Qkm4zwVxrK4" },
      { title: "Evening Arati at RKVA Bidar", youtubeId: "IsHpwt8qGhM" },
      { title: "Youth Camp 2023 Highlights", youtubeId: "nhiU1Gk3BZc" },
      { title: "Guru Purnima Celebrations", youtubeId: "haSn5ksVjMg" }
    ]
  },