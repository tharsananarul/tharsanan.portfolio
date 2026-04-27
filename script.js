/* ═══════════════════════════════════════════════════
   THARSANAN PORTFOLIO — MOTION UI v2.0
   Framer-inspired animations & interactions
═══════════════════════════════════════════════════ */

/* ── 1. CUSTOM CURSOR ─────────────────────────────── */
(function initCursor() {
  if ('ontouchstart' in window) return;
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let isHovering = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.querySelector('.cursor-dot').style.transform =
      `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    const ring = cursor.querySelector('.cursor-ring');
    ring.style.transform =
      `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${isHovering ? 1.7 : 1})`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const interactives = 'a, button, .project-card, .logiciel-card, .savoir-card, input, textarea';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) { isHovering = true; cursor.classList.add('hovering'); }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) { isHovering = false; cursor.classList.remove('hovering'); }
  });
  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
})();


/* ── 2. NAVBAR — hide on scroll down, show on up ──── */
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 40);
  if (y > lastScrollY && y > 200) {
    navbar.style.transform = 'translateY(-110%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = y;
}, { passive: true });


/* ── 3. SCROLL REVEAL ─────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── 4. MAGNETIC BUTTONS ──────────────────────────── */
document.querySelectorAll('.btn-primary, .btn-ghost, .project-link').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transition = 'none';
    btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    btn.style.transform = '';
  });
});


/* ── 5. HERO SCROLL PARALLAX ─────────────────────── */
const heroBlobs = document.querySelectorAll('.blob');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const s = window.scrollY;
  heroBlobs.forEach((blob, i) => {
    blob.style.transform = `translateY(${s * (i % 2 === 0 ? 0.25 : 0.15)}px)`;
  });
  if (heroContent) {
    heroContent.style.transform = `translateY(${s * 0.08}px)`;
    heroContent.style.opacity = Math.max(0, 1 - s / 550);
  }
}, { passive: true });


/* ── 6. MOUSE PARALLAX (hero only) ────────────────── */
const heroSection = document.querySelector('.hero');
if (heroSection) {
  heroSection.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = heroSection.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / width;
    const y = (e.clientY - top - height / 2) / height;
    heroBlobs.forEach((blob, i) => {
      const f = (i + 1) * 16;
      blob.style.transform += ` translate(${x * f}px, ${y * f}px)`;
    });
  });
}


/* ── 7. TILT + SHINE ON CARDS ─────────────────────── */
document.querySelectorAll('.project-card, .logiciel-card, .stat-card').forEach(card => {
  let shine = null;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = 'none';
    card.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-5px) scale(1.02)`;

    if (!shine) {
      shine = document.createElement('div');
      shine.className = 'card-shine';
      card.style.position = 'relative';
      card.style.overflow = 'hidden';
      card.appendChild(shine);
    }
    shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(188,217,245,0.1) 0%, transparent 65%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    card.style.transform = '';
    if (shine) shine.style.background = 'none';
  });
});


/* ── 8. TEXT SCRAMBLE on hero highlight ────────────── */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const length = newText.length;
    const promise = new Promise(r => this.resolve = r);
    this.queue = Array.from({ length }, (_, i) => ({
      to: newText[i],
      start: Math.floor(Math.random() * 15),
      end: Math.floor(Math.random() * 15) + 15,
    }));
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let out = '', done = 0;
    for (const q of this.queue) {
      if (this.frame >= q.end) { done++; out += q.to; }
      else if (this.frame >= q.start) {
        out += `<span class="scramble-char">${this.chars[Math.floor(Math.random() * this.chars.length)]}</span>`;
      } else out += q.to;
    }
    this.el.innerHTML = out;
    if (done === this.queue.length) this.resolve();
    else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; }
  }
}

const highlightEl = document.querySelector('.hero-title .highlight');
if (highlightEl) {
  const orig = highlightEl.textContent;
  setTimeout(() => new TextScramble(highlightEl).setText(orig), 900);
}


/* ── 9. COUNTER ANIMATION ─────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.textContent.replace(/\D/g, ''));
  if (!target) return;
  let current = 0;
  const step = target / (1200 / 16);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    // Replace only the text node, keep child elements (like .stat-plus)
    const plus = el.querySelector('.stat-plus');
    el.childNodes[0].nodeValue = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.apropos-home-stats').forEach(el => counterObserver.observe(el));


/* ── 10. SKILL BAR ANIMATION ─────────────────────── */
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
        const w = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.transition = `width 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`;
          bar.style.width = w;
        }, 150);
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.logiciel-card, .langue-card').forEach(el => skillBarObserver.observe(el));


/* ── 11. HAMBURGER MENU ───────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger?.addEventListener('click', () => {
  menuOpen = !menuOpen;
  hamburger.classList.toggle('open', menuOpen);
  if (menuOpen) {
    navLinks.style.cssText = `
      display:flex; flex-direction:column; position:absolute;
      top:70px; right:6vw; gap:20px; z-index:200;
      background:rgba(8,14,26,0.97); backdrop-filter:blur(24px);
      border:1px solid rgba(188,217,245,0.15); border-radius:20px;
      padding:24px 36px; animation:menuSlideIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
    `;
  } else {
    navLinks.style.display = 'none';
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1100) {
      navLinks.style.display = 'none';
      menuOpen = false;
      hamburger?.classList.remove('open');
    }
  });
});


/* ── 12. CONTACT FORM ─────────────────────────────── */
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const originalBtnText = btn.innerHTML;
  
  btn.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.7s linear infinite;"></span> Envoi...';
  btn.disabled = true;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  fetch("https://formsubmit.co/ajax/412d984908829a738c7bafb37a72fb4c", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      btn.style.display = 'none';
      if (success) success.classList.add('show');
    } else {
      throw new Error('Erreur FormSubmit');
    }
  })
  .catch((error) => {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    btn.innerHTML = originalBtnText;
    btn.disabled = false;
    alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou me contacter par email.');
  });
});

document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
  input.addEventListener('focus', () => input.closest('.form-group').classList.add('focused'));
  input.addEventListener('blur', () => {
    input.closest('.form-group').classList.remove('focused');
    input.closest('.form-group').classList.toggle('has-value', !!input.value);
  });
});


/* ── 13. PAGE TRANSITIONS ─────────────────────────── */
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('http') &&
      !href.startsWith('mailto') && !href.startsWith('tel') &&
      !link.hasAttribute('download')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => { window.location.href = href; }, 320);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');
});


/* ── 14. SCROLL PROGRESS BAR ─────────────────────── */
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${window.scrollY / total})`;
}, { passive: true });


/* ── 15. LOGO GLITCH ──────────────────────────────── */
const logo = document.querySelector('.logo');
logo?.addEventListener('mouseenter', () => {
  logo.classList.add('glitch');
  setTimeout(() => logo.classList.remove('glitch'), 700);
});


/* ── 16. TYPING CURSOR on hero description ─────────── */
const heroDesc = document.querySelector('.hero-desc');
if (heroDesc) {
  const tc = document.createElement('span');
  tc.className = 'typing-cursor';
  tc.textContent = '|';
  heroDesc.appendChild(tc);
}