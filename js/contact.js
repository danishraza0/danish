/* ============================================================
   CONTACT.JS — Contact form submission handler
   ============================================================ */

(function () {
  const CONFIG = {
    // FormSubmit AJAX endpoint — delivers submissions to the inbox as a formatted table
    endpoint: 'https://formsubmit.co/ajax/syeddanishraza0@gmail.com',
    useMock: false,
    mockDelay: 1800,
  };

  function init() {
    const forms = document.querySelectorAll('form[data-contact]');
    forms.forEach(bindForm);
  }

  function bindForm(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const fieldsWrap = form.querySelector('#form-fields') || form;
    const successPanel = document.getElementById('form-success') ||
                         form.closest('[data-form-container]')?.querySelector('.form-success-panel');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate(form)) return;

      // Loading state
      setLoading(submitBtn, true);

      try {
        if (CONFIG.useMock) {
          await mockSubmit();
        } else {
          await realSubmit(form, CONFIG.endpoint);
        }
        showSuccess(fieldsWrap, successPanel, submitBtn);
      } catch (err) {
        setLoading(submitBtn, false);
        showFormError(
          form,
          'There was a problem sending your message. Please try again, or email me directly at <a href="mailto:syeddanishraza0@gmail.com">syeddanishraza0@gmail.com</a>.'
        );
        console.error('[Contact] Submission error:', err);
      }
    });

    // Live validation on blur
    const fields = form.querySelectorAll('.input-field');
    fields.forEach((field) => {
      field.addEventListener('blur', () => liveValidateField(field));
    });
  }

  function validate(form) {
    if (!window.Validation) return true;
    const V = window.Validation;
    let valid = true;

    const name = form.querySelector('#contact-name') || form.querySelector('[name="name"]');
    const email = form.querySelector('#contact-email') || form.querySelector('[name="email"]');
    const message = form.querySelector('#contact-message') || form.querySelector('[name="message"]');

    if (name && !V.validateField(name, { required: true, minLength: 2 })) valid = false;
    if (email && !V.validateField(email, { required: true, email: true })) valid = false;
    if (message && !V.validateField(message, { required: true, minLength: 10 })) valid = false;

    return valid;
  }

  function liveValidateField(field) {
    if (!window.Validation) return;
    const V = window.Validation;
    const name = field.getAttribute('name') || field.id;

    if (name === 'email') {
      V.validateField(field, { required: true, email: true });
    } else if (name === 'message') {
      V.validateField(field, { required: true, minLength: 10 });
    } else if (field.hasAttribute('required')) {
      V.validateField(field, { required: true });
    }
  }

  function setLoading(btn, isLoading) {
    if (!btn) return;
    if (isLoading) {
      btn.disabled = true;
      btn.dataset.originalText = btn.textContent;
      btn.classList.add('btn-loading');
      btn.setAttribute('aria-busy', 'true');
    } else {
      btn.disabled = false;
      btn.textContent = btn.dataset.originalText || 'Send Message';
      btn.classList.remove('btn-loading');
      btn.setAttribute('aria-busy', 'false');
    }
  }

  function mockSubmit() {
    return new Promise((resolve) => setTimeout(resolve, CONFIG.mockDelay));
  }

  async function realSubmit(form, endpoint) {
    const data = Object.fromEntries(new FormData(form).entries());

    // FormSubmit preferences: table-formatted email, captcha disabled for AJAX
    const payload = {
      ...data,
      _subject: 'New consultation request from syeddanishraza.vercel.app',
      _template: 'table',
      _captcha: 'false',
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.message || `HTTP ${res.status}`);
    }
    return res.json();
  }

  function showSuccess(fieldsWrap, successPanel, btn) {
    setLoading(btn, false);
    if (successPanel) {
      if (fieldsWrap && fieldsWrap !== document.querySelector('form[data-contact]')) {
        fieldsWrap.style.display = 'none';
      } else {
        // hide form fields div
        const formFields = document.getElementById('form-fields');
        if (formFields) formFields.style.display = 'none';
        const submitWrap = document.getElementById('form-submit-wrap');
        if (submitWrap) submitWrap.style.display = 'none';
      }
      successPanel.style.display = 'flex';
      successPanel.setAttribute('aria-live', 'polite');
      if (window.lucide) window.lucide.createIcons();
    } else {
      // Inline fallback
      const form = fieldsWrap.closest('form') || fieldsWrap;
      const msg = document.createElement('div');
      msg.className = 'form-success-panel';
      msg.setAttribute('role', 'status');
      msg.innerHTML = `
        <div class="form-success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 class="text-h4" style="margin-top:0.5rem;">Message Sent!</h3>
        <p style="color:var(--color-body);font-size:var(--text-sm);">Thank you! I'll get back to you within 1 business day.</p>
      `;
      form.replaceWith(msg);
    }
  }

  function showFormError(form, message) {
    let errEl = form.querySelector('.form-submit-error');
    if (!errEl) {
      errEl = document.createElement('p');
      errEl.className = 'form-submit-error field-error';
      errEl.style.cssText = 'margin-top:0.75rem;font-size:var(--text-sm);';
      form.appendChild(errEl);
    }
    errEl.innerHTML = message;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
