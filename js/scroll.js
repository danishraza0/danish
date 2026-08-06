/* ============================================================
   SCROLL.JS — Progress bar + back-to-top
   ============================================================ */

(function () {
  const BACK_TO_TOP_THRESHOLD = 500;

  let progressBar, backToTopBtn;

  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct.toFixed(2) + '%';
  }

  function updateBackToTop() {
    if (!backToTopBtn) return;
    if ((window.scrollY || document.documentElement.scrollTop) > BACK_TO_TOP_THRESHOLD) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleAnchorClick(e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = 88; // header height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function init() {
    progressBar = document.getElementById('scroll-progress');
    backToTopBtn = document.getElementById('back-to-top');

    const onScroll = window.Utils
      ? window.Utils.throttle(() => {
          updateScrollProgress();
          updateBackToTop();
        }, 16)
      : () => {
          updateScrollProgress();
          updateBackToTop();
        };

    window.addEventListener('scroll', onScroll, { passive: true });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', scrollToTop);
    }

    document.addEventListener('click', handleAnchorClick);

    // Initial call
    updateScrollProgress();
    updateBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
