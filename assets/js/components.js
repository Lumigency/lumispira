(function () {
  function normalize(path) {
    return path.replace(/^\/+/, '');
  }

  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/articles/')) return '../../';
    if (path.endsWith('/index.html') || path !== '/') return '../';
    return '';
  }

  function resolveHref(basePath, href) {
    return `${basePath}${normalize(href)}`;
  }

  function renderNavigation(basePath, currentPath) {
    const { branding, navigation, cta } = window.LUMISPIRA_CONTENT;
    const navLinks = navigation.map((item) => {
      const href = resolveHref(basePath, item.href);
      const isActive = currentPath.includes(`/${normalize(item.href).replace('/index.html', '')}`);
      return `<li><a href="${href}"${isActive ? ' class="active"' : ''}>${item.label}</a></li>`;
    }).join('');

    const mobileLinks = navigation.map((item) => {
      const href = resolveHref(basePath, item.href);
      return `<a href="${href}">${item.label}</a>`;
    }).join('');

    return `
<header id="navbar" role="banner">
  <nav class="nav-inner" aria-label="Navigation principale">
    <a href="${resolveHref(basePath, 'index.html')}" class="nav-logo" aria-label="${branding.name} — Accueil">
      <span class="nav-logo-name">${branding.name}</span>
      <span class="nav-logo-tagline">${branding.tagline}</span>
    </a>
    <ul class="nav-links" role="list">${navLinks}</ul>
    <a href="${resolveHref(basePath, cta.href)}" class="nav-cta">${cta.label}</a>
    <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </nav>
</header>
<nav class="mobile-menu" id="mobile-menu" aria-label="Menu mobile">
  ${mobileLinks}
  <a href="${resolveHref(basePath, cta.href)}" class="nav-cta">${cta.label}</a>
</nav>`;
  }

  function renderLeadMagnet(basePath) {
    const lead = window.LUMISPIRA_CONTENT.leadMagnet;
    return `<aside id="lead-magnet" aria-label="Cadeau gratuit">
      <div class="lead-card">
        <div class="lead-icon">${lead.icon}</div>
        <span class="lead-cadeau label">${lead.label}</span>
        <p class="lead-title serif">${lead.title}</p>
        <p class="lead-sub">${lead.subtitle}</p>
        <a href="${resolveHref(basePath, lead.href)}" class="lead-btn">${lead.action}</a>
        <span class="lead-note">${lead.note}</span>
      </div>
    </aside>`;
  }

  function renderFooter(basePath) {
    const { branding, navigation, footer } = window.LUMISPIRA_CONTENT;
    const links = [
      ...navigation.map((item) => ({ label: item.label, href: resolveHref(basePath, item.href) })),
      ...footer.legalLinks
    ];

    return `<footer id="footer" role="contentinfo">
      <div class="footer-inner">
        <div>
          <p class="footer-logo-name serif">${branding.name}</p>
          <p class="footer-tagline">${branding.tagline}</p>
        </div>
        <nav class="footer-links" aria-label="Liens du pied de page">
          ${links.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
        </nav>
        <div class="footer-copy">
          <p>${footer.copyright}</p>
          <p style="opacity:0.5;">${footer.rights}</p>
        </div>
      </div>
      <hr class="footer-divider" />
      <div class="footer-bottom">
        <span>${footer.bottomLeft}</span>
        <span>${branding.domain}</span>
      </div>
    </footer>`;
  }

  function mountShell() {
    const currentPath = window.location.pathname;
    const basePath = getBasePath();
    const headerMount = document.querySelector('[data-site-header]');
    const leadMount = document.querySelector('[data-site-lead-magnet]');
    const footerMount = document.querySelector('[data-site-footer]');

    if (headerMount) headerMount.outerHTML = renderNavigation(basePath, currentPath);
    if (leadMount) leadMount.outerHTML = renderLeadMagnet(basePath);
    if (footerMount) footerMount.outerHTML = renderFooter(basePath);
  }

  window.LUMISPIRA_COMPONENTS = { mountShell };
})();
