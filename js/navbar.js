/* ============================================================
   NAVBAR.JS — Sticky header, mobile menu, active nav
   ============================================================ */

(function () {
  function init() {
    const header = document.querySelector('header');
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const desktopLinks = document.querySelectorAll('.nav-link');

    // ─── Sticky shadow on scroll ──────────────────────────────
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 8) {
        header.classList.add('header-shadow');
      } else {
        header.classList.remove('header-shadow');
      }
    }

    const scrollHandler = window.Utils
      ? window.Utils.throttle(onScroll, 50)
      : onScroll;

    window.addEventListener('scroll', scrollHandler, { passive: true });
    onScroll();

    // ─── Mobile menu toggle ───────────────────────────────────
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        // Swap icon
        const icon = hamburger.querySelector('[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
          if (window.lucide) window.lucide.createIcons({ nodes: [icon] });
        }
      });

      // Close on mobile link click
      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          const icon = hamburger.querySelector('[data-lucide]');
          if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            if (window.lucide) window.lucide.createIcons({ nodes: [icon] });
          }
        });
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // ─── Active nav link ──────────────────────────────────────
    function setActiveLink(links) {
      const path = window.location.pathname;
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href) return;

        const isRoot = path === '/' || path.endsWith('/index.html') || path === '';
        const isActive =
          (isRoot && (href === '/' || href === 'index.html' || href === '../index.html' || href.endsWith('/index.html'))) ||
          (!isRoot && href !== '/' && href !== 'index.html' && path.includes(href.replace('../', '').replace('.html', '')));

        if (isActive) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    setActiveLink(desktopLinks);
    setActiveLink(mobileLinks);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
