/* ============================================================
   FAQ.JS — Accordion toggle
   ============================================================ */

(function () {
  function init() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach((item) => {
      const toggle = item.querySelector('.faq-toggle');
      const content = item.querySelector('.faq-content');
      if (!toggle) return;

      toggle.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Optionally close all other items (comment out to allow multiple open)
        items.forEach((other) => {
          if (other !== item && other.classList.contains('active')) {
            other.classList.remove('active');
            const otherToggle = other.querySelector('.faq-toggle');
            if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('active', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));

        if (window.lucide) window.lucide.createIcons();
      });

      // Keyboard support
      toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle.click();
        }
      });

      // Set initial ARIA
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('role', 'button');
      if (content) {
        content.setAttribute('role', 'region');
        const id = 'faq-content-' + Math.random().toString(36).slice(2, 7);
        content.id = id;
        toggle.setAttribute('aria-controls', id);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
