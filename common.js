/* =========================================================
   common.js — header, footer, nav, and shared behaviors
   Reads exclusively from SITE (content.js)
   ========================================================= */

/* ---------- helpers ---------- */
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path === '' ? 'index.html' : path;
}

/* ---------- Top bar ---------- */
function renderTopBar() {
  const { org } = SITE;
  return `
  <div class="bg-[var(--cream)] border-b border-amber-700/30 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between">
      <span class="hidden sm:inline text-[var(--saffron)] font-semibold tracking-wide">${org.name}</span>
      <span class="sm:hidden text-[var(--saffron)] font-semibold tracking-wide">${org.shortName}</span>
      <div class="flex items-center gap-4 text-[var(--text-muted)]">
        <a href="tel:${org.phoneHref}" class="hidden md:inline hover:text-[var(--saffron)] transition-colors">${org.phone}</a>
        <a href="${org.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook" class="hover:text-[var(--saffron)] transition-colors">
          <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.81 8.44-4.94 8.44-9.94Z"/></svg>
        </a>
        <a href="${org.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube" class="hover:text-[var(--saffron)] transition-colors">
          <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z"/></svg>
        </a>
      </div>
    </div>
  </div>`;
}

/* ---------- Desktop nav item builder ---------- */
function buildNavItem(item, isTop) {
  const page = currentPage();
  const isActive = item.href === page;
  const hasChildren = item.children && item.children.length;
  const linkClasses = `flex items-center gap-1 px-3 py-2 font-semibold text-[15px] text-[var(--text-dark)] hover:text-[var(--saffron)] transition-colors ${isActive ? 'nav-link-active text-[var(--saffron)]' : ''}`;

  if (item.highlight) {
    return `
      <a href="${item.href}" target="${item.external ? '_blank' : '_self'}" rel="${item.external ? 'noopener' : ''}"
         class="ml-1 px-4 py-2 rounded-full bg-[var(--saffron)] text-white text-sm font-semibold hover:bg-[var(--maroon)] transition-colors">
        ${item.label}
      </a>`;
  }

  if (!hasChildren) {
    return `<a href="${item.href}" target="${item.external ? '_blank' : '_self'}" rel="${item.external ? 'noopener' : ''}" class="${linkClasses}">${item.label}</a>`;
  }

  const childrenHtml = item.children.map(child => {
    const grandHasChildren = child.children && child.children.length;
    if (grandHasChildren) {
      const grandHtml = child.children.map(g => `
        <a href="${g.href}" class="block px-4 py-2 text-sm text-[var(--text-dark)] hover:bg-[var(--tan)] hover:text-[var(--saffron)] transition-colors">${g.label}</a>
      `).join('');
      return `
        <div class="nav-sub">
          <a href="${child.href}" class="flex items-center justify-between px-4 py-2 text-sm font-semibold text-[var(--text-dark)] hover:bg-[var(--tan)] hover:text-[var(--saffron)] transition-colors">
            ${child.label}
            <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current opacity-60"><path d="M8 5l8 7-8 7V5z"/></svg>
          </a>
          <div class="nav-subdropdown">${grandHtml}</div>
        </div>`;
    }
    return `<a href="${child.href}" class="block px-4 py-2 text-sm font-semibold text-[var(--text-dark)] hover:bg-[var(--tan)] hover:text-[var(--saffron)] transition-colors">${child.label}</a>`;
  }).join('');

  return `
    <div class="nav-item">
      <a href="${item.href}" class="${linkClasses}">
        ${item.label}
        <svg viewBox="0 0 24 24" class="w-3 h-3 fill-current opacity-60"><path d="M5 8l7 8 7-8H5z"/></svg>
      </a>
      <div class="nav-dropdown">${childrenHtml}</div>
    </div>`;
}

/* ---------- Mobile nav item builder (accordion) ---------- */
function buildMobileNavItem(item, idx) {
  const hasChildren = item.children && item.children.length;
  if (item.highlight) {
    return `
      <a href="${item.href}" target="${item.external ? '_blank' : '_self'}" rel="${item.external ? 'noopener' : ''}"
         class="block mx-4 my-2 px-4 py-2.5 rounded-full bg-[var(--saffron)] text-white text-center font-semibold">
        ${item.label}
      </a>`;
  }
  if (!hasChildren) {
    return `<a href="${item.href}" target="${item.external ? '_blank' : '_self'}" rel="${item.external ? 'noopener' : ''}" class="block px-5 py-3 text-[var(--text-dark)] font-semibold border-b border-amber-900/5">${item.label}</a>`;
  }
  const panelId = `mpanel-${idx}`;
  const childrenHtml = item.children.map((child, ci) => {
    const grandHasChildren = child.children && child.children.length;
    if (grandHasChildren) {
      const subPanelId = `mpanel-${idx}-${ci}`;
      const grandHtml = child.children.map(g => `<a href="${g.href}" class="block px-9 py-2.5 text-sm text-[var(--text-muted)]">${g.label}</a>`).join('');
      return `
        <div>
          <button type="button" class="mobile-accordion-trigger w-full flex items-center justify-between px-7 py-2.5 text-sm font-semibold text-[var(--text-dark)]" aria-expanded="false" data-target="${subPanelId}">
            ${child.label}
            <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current accordion-chevron opacity-60"><path d="M8 5l8 7-8 7V5z"/></svg>
          </button>
          <div id="${subPanelId}" class="mobile-panel">${grandHtml}</div>
        </div>`;
    }
    return `<a href="${child.href}" class="block px-7 py-2.5 text-sm text-[var(--text-muted)]">${child.label}</a>`;
  }).join('');

  return `
    <div class="border-b border-amber-900/5">
      <button type="button" class="mobile-accordion-trigger w-full flex items-center justify-between px-5 py-3 font-semibold text-[var(--text-dark)]" aria-expanded="false" data-target="${panelId}">
        ${item.label}
        <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current accordion-chevron opacity-60"><path d="M8 5l8 7-8 7V5z"/></svg>
      </button>
      <div id="${panelId}" class="mobile-panel">${childrenHtml}</div>
    </div>`;
}

/* ---------- Header ---------- */
function renderHeader() {
  const { org, nav } = SITE;
  const desktopNav = nav.map(item => buildNavItem(item)).join('');
  const mobileNav = nav.map((item, idx) => buildMobileNavItem(item, idx)).join('');

  return `
    ${renderTopBar()}
    <header id="site-header" class="sticky top-0 z-40 bg-white transition-shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between py-3 lg:py-4">
          <a href="index.html" class="flex items-center gap-3 shrink-0">
            <span class="text-3xl">🕉</span>
            <span class="font-display font-bold text-lg sm:text-xl leading-tight text-[var(--maroon)]">
              Ramakrishna Vivekananda<br class="hidden sm:block"> <span class="sm:hidden"> </span>Ashrama, Bidar
            </span>
          </a>
          <nav class="hidden lg:flex items-center">${desktopNav}</nav>
          <button id="mobile-menu-btn" type="button" aria-label="Open menu" class="lg:hidden p-2 text-[var(--maroon)]">
            <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
          </button>
        </div>
      </div>
      <div id="mobile-nav-panel" class="lg:hidden hidden bg-white border-t border-amber-900/10 max-h-[80vh] overflow-y-auto">
        ${mobileNav}
      </div>
    </header>`;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const { org, footer, openingHours } = SITE;
  const quickLinks = footer.quickLinks.map(l =>
    `<li><a href="${l.href}" target="${l.external ? '_blank' : '_self'}" rel="${l.external ? 'noopener' : ''}" class="text-white/70 hover:text-[var(--saffron)] transition-colors">${l.label}</a></li>`
  ).join('');

  const hours = openingHours.map(o =>
    `<tr class="border-b border-white/10 last:border-0">
       <td class="py-1.5 pr-3 text-white/70">${o.day}</td>
       <td class="py-1.5 text-white/90 text-right">${o.hours}</td>
     </tr>`
  ).join('');

  return `
  <footer class="bg-[var(--primary-dark)] text-white pt-14 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="index.html" class="flex items-center gap-2 mb-4">
            <span class="text-3xl">🕉</span>
            <span class="font-display font-bold text-lg text-white">${org.shortName}</span>
          </a>
          <p class="text-white/70 text-sm leading-relaxed mb-4">${footer.description}</p>
          <p class="text-white/70 text-sm mb-1">${org.address}</p>
          <p class="text-white/70 text-sm mb-1"><a href="tel:${org.phoneHref}" class="hover:text-[var(--saffron)]">${org.phone}</a></p>
          <p class="text-white/70 text-sm"><a href="mailto:${org.email}" class="hover:text-[var(--saffron)]">${org.email}</a></p>
        </div>
        <div>
          <h4 class="font-display text-xl text-[var(--gold)] mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">${quickLinks}</ul>
        </div>
        <div>
          <h4 class="font-display text-xl text-[var(--gold)] mb-4">Opening Hours</h4>
          <table class="w-full text-sm"><tbody>${hours}</tbody></table>
        </div>
        <div>
          <h4 class="font-display text-xl text-[var(--gold)] mb-4">Location Map</h4>
          <div class="rounded-xl overflow-hidden border-2 border-white/10">
            <iframe src="${org.mapsEmbed}" width="100%" height="160" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ashrama location map"></iframe>
          </div>
        </div>
      </div>
      <div class="border-t border-[var(--saffron)]/30 mt-10 pt-5 text-center text-xs text-white/60">
        ${footer.copyright}
      </div>
    </div>
  </footer>`;
}

/* ---------- Mount header/footer + wire up interactions ---------- */
function mountLayout() {
  const headerMount = document.getElementById('site-header-mount');
  const footerMount = document.getElementById('site-footer-mount');
  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();

  // sticky shadow
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    });
  }

  // mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobilePanel = document.getElementById('mobile-nav-panel');
  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener('click', () => {
      mobilePanel.classList.toggle('hidden');
    });
  }

  // mobile accordion
  document.querySelectorAll('.mobile-accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(btn.dataset.target);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0px';
      }
    });
  });
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(t => observer.observe(t));

  // Safety net: in case any element is missed (e.g. zero-height parent at
  // observe-time, or a browser quirk), make sure nothing stays invisible.
  window.setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in-view)').forEach(t => {
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        t.classList.add('in-view');
      }
    });
  }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
  mountLayout();
});
