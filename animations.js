/* ═══════════════════════════════════════════════════
   THARSANAN PORTFOLIO — ANIMATIONS PREMIUM v3.0
   Inspiré Awwwards · Framer · Linear
═══════════════════════════════════════════════════ */

/* ── 1. PAGE LOADER ───────────────────────────────── */
(function initLoader() {
  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.innerHTML = `
    <div class="loader-inner">
      <div class="loader-logo">T<span>.</span></div>
      <div class="loader-bar"><div class="loader-fill"></div></div>
    </div>`;
  document.body.appendChild(loader);
  document.body.style.overflow = 'hidden';

  let progress = 0;
  const fill = loader.querySelector('.loader-fill');
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress >= 100) { progress = 100; clearInterval(interval); }
    fill.style.width = progress + '%';
    if (progress === 100) {
      setTimeout(() => {
        loader.classList.add('loader-exit');
        document.body.style.overflow = '';
        setTimeout(() => loader.remove(), 700);
      }, 250);
    }
  }, 80);
})();


/* ── 2. LINE MASK TEXT REVEAL ─────────────────────── */
function initLineMask() {
  document.querySelectorAll('.line-mask').forEach(el => {
    const text = el.innerHTML;
    el.innerHTML = `<span class="line-mask-inner">${text}</span>`;
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.line-mask-inner')?.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.line-mask').forEach(el => obs.observe(el));
}


/* ── 3. STAGGER CHILDREN REVEAL ──────────────────── */
function initStagger() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 100);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-parent').forEach(el => obs.observe(el));
}


/* ── 4. IMAGE PARALLAX ON SCROLL ─────────────────── */
function initImageParallax() {
  const items = [...document.querySelectorAll('[data-parallax]')];
  if (!items.length) return;

  function update() {
    items.forEach(el => {
      const rect = el.getBoundingClientRect();
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      const centerY = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${centerY * speed}px)`;
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}


/* ── 5. HORIZONTAL SCROLL GALLERY ────────────────── */
function initHorizontalGalleries() {
  document.querySelectorAll('.h-gallery').forEach(gallery => {
    const track = gallery.querySelector('.h-gallery-track');
    if (!track) return;

    // Drag to scroll
    let isDown = false, startX, scrollStart;

    gallery.addEventListener('mousedown', e => {
      isDown = true;
      gallery.classList.add('dragging');
      startX = e.pageX - gallery.offsetLeft;
      scrollStart = gallery.scrollLeft;
    });
    window.addEventListener('mouseup', () => {
      isDown = false;
      gallery.classList.remove('dragging');
    });
    gallery.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 1.5;
      gallery.scrollLeft = scrollStart - walk;
    });

    // Touch scroll (native, déjà géré)

    // Wheel → horizontal scroll
    gallery.addEventListener('wheel', e => {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY * 2;
    }, { passive: false });

    // Progress indicator
    const progress = gallery.parentElement?.querySelector('.h-gallery-progress-fill');
    if (progress) {
      gallery.addEventListener('scroll', () => {
        const max = gallery.scrollWidth - gallery.clientWidth;
        progress.style.width = (gallery.scrollLeft / max * 100) + '%';
      }, { passive: true });
    }
  });
}


/* ── 6. MARQUEE AUTO-SCROLL ──────────────────────── */
function initMarquee() {
  document.querySelectorAll('.marquee-track').forEach(track => {
    // Duplicate content pour boucle infinie
    track.innerHTML += track.innerHTML;
  });
}


/* ── 7. SPLIT TEXT HERO (mot par mot) ───────────────  */
function initSplitText() {
  document.querySelectorAll('.split-words').forEach(el => {
    const words = el.textContent.trim().split(' ');
    el.innerHTML = words
      .map((w, i) => `<span class="word-wrap"><span class="word" style="transition-delay:${i * 0.06}s">${w}</span></span>`)
      .join(' ');

    requestAnimationFrame(() => {
      el.querySelectorAll('.word').forEach(w => w.classList.add('visible'));
    });
  });
}


/* ── 8. SCROLL VELOCITY — skew effect ───────────────  */
(function initScrollSkew() {
  let lastY = 0, velocity = 0, ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        velocity = (y - lastY) * 0.04;
        lastY = y;
        const skewable = document.querySelectorAll('.skew-on-scroll');
        skewable.forEach(el => {
          el.style.transform = `skewY(${Math.max(-3, Math.min(3, velocity))}deg)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();


/* ── 9. SPOTLIGHT CURSOR on cards ────────────────── */
function initSpotlight() {
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--sx', x + 'px');
      card.style.setProperty('--sy', y + 'px');
    });
  });
}


/* ── 10. NUMBER TICKER (réutilisable) ────────────── */
function animateTicker(el, target, duration = 1200) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const plus = el.querySelector('.stat-plus');
    if (el.childNodes[0]) el.childNodes[0].nodeValue = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}


/* ── INIT ALL ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLineMask();
  initStagger();
  initImageParallax();
  initHorizontalGalleries();
  initMarquee();
  initSpotlight();

  // Split text hero — only on pages with .hero-title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) initSplitText();
});
