/* ============================================================
   VALIDATION.JS — Form field validation helpers
   ============================================================ */

window.Validation = (() => {
  const isEmpty = (val) => !val || val.trim() === '';

  const isValidEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(val).toLowerCase().trim());

  const isValidPhone = (val) =>
    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3,5}[-\s\.]?[0-9]{4,10}$/.test(
      String(val).replace(/\s/g, '')
    );

  const isMinLength = (val, min) => String(val).trim().length >= min;

  function showError(fieldEl, message) {
    if (!fieldEl) return;
    fieldEl.classList.remove('input-success');
    fieldEl.classList.add('input-error');
    fieldEl.setAttribute('aria-invalid', 'true');

    // Find or create error message element
    let errorEl = fieldEl.parentElement.querySelector('.field-error');
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'field-error';
      errorEl.setAttribute('role', 'alert');
      fieldEl.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
    errorEl.style.display = 'flex';
  }

  function clearError(fieldEl) {
    if (!fieldEl) return;
    fieldEl.classList.remove('input-error');
    fieldEl.setAttribute('aria-invalid', 'false');

    const errorEl = fieldEl.parentElement.querySelector('.field-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.style.display = 'none';
    }
  }

  function showSuccess(fieldEl) {
    if (!fieldEl) return;
    fieldEl.classList.remove('input-error');
    fieldEl.classList.add('input-success');
    clearError(fieldEl);
  }

  /**
   * Live validation — call on blur/change events.
   * Returns true if valid.
   */
  function validateField(fieldEl, rules = {}) {
    const val = fieldEl.value;

    if (rules.required && isEmpty(val)) {
      showError(fieldEl, rules.requiredMsg || 'This field is required.');
      return false;
    }

    if (rules.email && !isEmpty(val) && !isValidEmail(val)) {
      showError(fieldEl, rules.emailMsg || 'Please enter a valid email address.');
      return false;
    }

    if (rules.phone && !isEmpty(val) && !isValidPhone(val)) {
      showError(fieldEl, rules.phoneMsg || 'Please enter a valid phone number.');
      return false;
    }

    if (rules.minLength && !isMinLength(val, rules.minLength)) {
      showError(fieldEl, rules.minLengthMsg || `Please enter at least ${rules.minLength} characters.`);
      return false;
    }

    showSuccess(fieldEl);
    return true;
  }

  return { isEmpty, isValidEmail, isValidPhone, isMinLength, showError, clearError, showSuccess, validateField };
})();
