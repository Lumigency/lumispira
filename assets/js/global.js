/* ═══════════════════════════════════════════════════
   LUMISPIRA — Global JavaScript
   Partagé par toutes les pages du site
════════════════════════════════════════════════════*/

document.addEventListener('DOMContentLoaded', () => {

  if (window.LUMISPIRA_COMPONENTS?.mountShell) {
    window.LUMISPIRA_COMPONENTS.mountShell();
  }

  // ── Hamburger menu ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  // ── Active nav link ──
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '/' && href !== '../' && href !== '../../') {
      link.classList.add('active');
    }
  });

  // ── Lead magnet slide in ──
  const leadMagnet = document.getElementById('lead-magnet');
  if (leadMagnet) {
    setTimeout(() => leadMagnet.classList.add('visible'), 1400);
  }

  // ── Intersection Observer — fade-up ──
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  fadeEls.forEach(el => observer.observe(el));

  // ── Newsletter forms ──
  document.querySelectorAll('.nl-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.nl-submit');
      const input = form.querySelector('.nl-input');
      if (btn) { btn.textContent = 'Bienvenue ✦'; btn.style.background = 'var(--sage)'; }
      if (input) { input.value = ''; input.placeholder = 'Merci ! Vérifie ta boîte mail 🌿'; }
      setTimeout(() => {
        if (btn) { btn.textContent = 'Je m\'abonne ✦'; btn.style.background = ''; }
        if (input) input.placeholder = 'ton@email.com';
      }, 4000);
    });
  });

  // ── Filtres articles ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articleCards = document.querySelectorAll('.article-card[data-cat]');
  if (filterBtns.length && articleCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        articleCards.forEach(card => {
          if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

});
