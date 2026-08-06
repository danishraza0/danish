/* ============================================================
   MAIN.JS — App initialization entry point
   ============================================================ */

(function () {
  function init() {
    // Initialize Lucide icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    console.info('%c Syed Danish Raza Portfolio ', 'background:#2563EB;color:#fff;font-weight:700;padding:4px 8px;border-radius:4px;', '\nWeb Solutions Developer | syeddanishraza.vercel.app');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
