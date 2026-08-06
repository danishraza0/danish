/* ============================================================
   ANIMATIONS.JS — Scroll-driven reveal via Intersection Observer
   ============================================================ */

(function () {
  const SELECTORS = '.reveal, .reveal-scale, .reveal-left, .reveal-right';
  const SKILL_SELECTOR = '.skill-bar-fill';

  function initReveal() {
    const elements = document.querySelectorAll(SELECTORS);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // Honour data-delay attribute (ms)
            const delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(() => {
              el.classList.add('in-view');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  function initSkillBars() {
    const bars = document.querySelectorAll(SKILL_SELECTOR);
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            // target width set via CSS variable or data-width attr
            const targetWidth = bar.dataset.width || bar.style.getPropertyValue('--target-width') || '80%';
            bar.style.setProperty('--target-width', targetWidth);
            setTimeout(() => bar.classList.add('animated'), 150);
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((b) => observer.observe(b));
  }

  function reinitIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function init() {
    initReveal();
    initSkillBars();
    reinitIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose reinit for dynamic content
  window.AnimationsReinit = init;
})();
