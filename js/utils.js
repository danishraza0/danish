/* ============================================================
   UTILS.JS — Shared utility functions
   ============================================================ */

window.Utils = (() => {
  /**
   * Debounce a function by a given wait time in ms.
   */
  function debounce(fn, wait = 200) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  /**
   * Throttle a function to at most once per `wait` ms.
   */
  function throttle(fn, wait = 100) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= wait) {
        last = now;
        fn.apply(this, args);
      }
    };
  }

  /**
   * Estimate reading time for a block of text.
   * @param {string} text
   * @param {number} wpm Words per minute (default 200)
   * @returns {string} e.g. "5 min read"
   */
  function calculateReadingTime(text, wpm = 200) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wpm);
    return `${minutes} min read`;
  }

  /**
   * Sanitize user-provided string to prevent XSS.
   */
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(String(str)));
    return div.innerHTML;
  }

  /**
   * Format a date string or Date object.
   * @param {string|Date} date
   * @param {string} locale default 'en-US'
   * @returns {string} e.g. "January 15, 2025"
   */
  function formatDate(date, locale = 'en-US') {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  /**
   * Truncate a string to `len` characters with ellipsis.
   */
  function truncateText(str, len = 120) {
    if (!str || str.length <= len) return str;
    return str.slice(0, len).trimEnd() + '…';
  }

  /**
   * Get a URL query parameter by name.
   */
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  /**
   * Smooth scroll to an element by selector.
   */
  function scrollTo(selector, offset = 80) {
    const el = document.querySelector(selector);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return { debounce, throttle, calculateReadingTime, escapeHTML, formatDate, truncateText, getParam, scrollTo };
})();
