/* ============================================================
   BLOG.JS — Blog articles data + rendering
   ============================================================ */

const BLOG_ARTICLES = [
  {
    id: 'local-seo-guide-2025',
    title: 'The Local SEO Playbook: How Service Businesses Get Found in 2025',
    category: 'SEO',
    tags: ['Local SEO', 'Google Business', 'Lead Generation'],
    date: '2025-01-15',
    readTime: '7 min read',
    author: 'Syed Danish Raza',
    excerpt: 'Learn the exact local SEO strategies that help dental clinics, HVAC contractors, and law firms rank #1 on Google Maps and drive consistent inbound leads.',
    content: `
      <p>Local SEO is the single highest-ROI marketing channel for any service business serving a specific geographic area. Unlike paid ads that stop the moment you stop paying, a well-optimized local presence compounds over time.</p>
      <h2>1. Optimize Your Google Business Profile</h2>
      <p>Your Google Business Profile (formerly Google My Business) is the cornerstone of local SEO. Complete every field — categories, services, hours, photos, and Q&A. Businesses with complete profiles get 7x more clicks than those with incomplete ones.</p>
      <h2>2. Build Consistent NAP Citations</h2>
      <p>Your Name, Address, and Phone number must be identical across every directory: Yelp, Yellow Pages, Angi, Houzz, and industry-specific directories. Inconsistencies confuse search engines and suppress your rankings.</p>
      <h2>3. Generate and Respond to Reviews</h2>
      <p>Reviews are a direct ranking signal. Create a simple post-service workflow to ask satisfied clients for reviews via SMS or email. Always respond — to both positive and negative reviews — within 24 hours.</p>
      <h2>4. Create Location-Specific Landing Pages</h2>
      <p>If you serve multiple cities, create a dedicated landing page for each. Each page should include local keywords, a unique description of your service in that area, and location-specific testimonials.</p>
      <h2>5. Add LocalBusiness Schema</h2>
      <p>Structured data markup helps Google understand your business type, location, hours, and services. Add JSON-LD LocalBusiness schema to your homepage and location pages to enhance your search snippets.</p>
    `,
    related: ['website-conversion-tips', 'crm-for-local-business'],
  },
  {
    id: 'website-conversion-tips',
    title: '10 Website Changes That Double Your Lead Conversion Rate',
    category: 'CRO',
    tags: ['Conversion', 'Landing Pages', 'UX Design'],
    date: '2025-01-28',
    readTime: '9 min read',
    author: 'Syed Danish Raza',
    excerpt: 'Most service business websites lose 90% of their visitors without capturing a lead. These 10 specific changes will dramatically improve your conversion rate.',
    content: `
      <p>Traffic without conversion is just vanity. The average service business website converts less than 2% of visitors. With the right optimizations, you can realistically hit 5–12%.</p>
      <h2>1. Move Your Phone Number Above the Fold</h2>
      <p>Your phone number should be visible without scrolling on both desktop and mobile. Make it clickable (tel: link) for mobile users.</p>
      <h2>2. Use a Single, Clear Call-to-Action</h2>
      <p>Every page should have one primary CTA. "Book a Free Consultation," "Get a Free Quote," or "Call Now" — pick one and make it impossible to miss.</p>
      <h2>3. Add a Lead Capture Form to Your Hero</h2>
      <p>The hero section (first thing visitors see) should include a short form — name, phone, and service type. The shorter the form, the higher the conversion.</p>
      <h2>4. Display Social Proof Prominently</h2>
      <p>Star ratings, review counts, and client logos near your CTA reduce purchasing anxiety. Place them directly next to your call-to-action buttons.</p>
      <h2>5. Speed Up Your Website</h2>
      <p>A 1-second delay in page load reduces conversions by 7%. Aim for sub-2-second load times. Use lazy loading, compress images, and leverage browser caching.</p>
    `,
    related: ['local-seo-guide-2025', 'why-your-website-loses-clients'],
  },
  {
    id: 'crm-for-local-business',
    title: 'Why Every Local Service Business Needs a Custom CRM in 2025',
    category: 'Business Systems',
    tags: ['CRM', 'Automation', 'Business Growth'],
    date: '2025-02-10',
    readTime: '6 min read',
    author: 'Syed Danish Raza',
    excerpt: 'Off-the-shelf CRMs are built for enterprise sales teams, not service businesses. Here\'s why a custom CRM can transform how you capture, follow up, and close leads.',
    content: `
      <p>Most service businesses manage their leads in a spreadsheet, a stack of sticky notes, or worse — in their head. A purpose-built CRM changes that completely.</p>
      <h2>What a Custom CRM Does for Service Businesses</h2>
      <p>A custom CRM built for your specific workflow captures every lead from your website, tracks their status through your pipeline (New → Contacted → Quoted → Closed), and automatically sends follow-up reminders so you never lose a lead to forgetfulness.</p>
      <h2>The Follow-Up Problem</h2>
      <p>Studies show 44% of sales reps give up after one follow-up, but 80% of sales require at least five. A CRM with automated follow-up sequences solves this permanently.</p>
      <h2>Custom vs Off-the-Shelf</h2>
      <p>Tools like Salesforce and HubSpot are designed for enterprise B2B sales cycles, not a plumber booking a repair job or a dentist scheduling a consultation. A custom system fits your exact workflow, uses your terminology, and only includes what you actually need.</p>
    `,
    related: ['business-automation-guide', 'local-seo-guide-2025'],
  },
  {
    id: 'why-your-website-loses-clients',
    title: 'Why Your Website Is Losing You Clients (And How to Fix It)',
    category: 'Web Design',
    tags: ['Web Design', 'UX', 'Lead Generation'],
    date: '2025-02-22',
    readTime: '5 min read',
    author: 'Syed Danish Raza',
    excerpt: 'If your website was built more than 3 years ago, or by the lowest bidder, it\'s probably costing you clients every single week. Here\'s the diagnostic checklist.',
    content: `
      <p>A website that doesn't convert is an expensive liability, not an asset. These are the most common reasons local business websites fail to generate leads.</p>
      <h2>1. It Looks Outdated</h2>
      <p>Visitors form a trust opinion within 50 milliseconds. An outdated design immediately signals that your business might also be outdated, understaffed, or unreliable.</p>
      <h2>2. It's Not Mobile-Optimized</h2>
      <p>Over 60% of local business searches happen on mobile. If your website isn't perfectly usable on a phone — fast, readable, easy to tap — you're losing the majority of your traffic.</p>
      <h2>3. No Clear Value Proposition</h2>
      <p>Most service business websites say what they do, but not why a client should choose them over the competitor next door. Lead with your specific advantage.</p>
      <h2>4. Missing Social Proof</h2>
      <p>If a visitor can't see real reviews, before/after photos, or client testimonials within 10 seconds, they will leave and call your competitor who has them.</p>
    `,
    related: ['website-conversion-tips', 'local-seo-guide-2025'],
  },
  {
    id: 'business-automation-guide',
    title: 'Business Automation for Service Companies: Start Here',
    category: 'Automation',
    tags: ['Automation', 'Efficiency', 'Business Systems'],
    date: '2025-03-05',
    readTime: '8 min read',
    author: 'Syed Danish Raza',
    excerpt: 'Automation isn\'t just for tech companies. These are the exact workflows that save service businesses 10+ hours per week — starting with lead capture and follow-up.',
    content: `
      <p>The most successful local service businesses in 2025 are automating repetitive tasks so their team can focus on delivering excellent service. Here's where to start.</p>
      <h2>Lead Capture Automation</h2>
      <p>Every lead from your website should automatically create a record in your CRM, send the prospect a confirmation email, and notify your sales team — without anyone manually doing anything.</p>
      <h2>Follow-Up Sequences</h2>
      <p>Set up automated follow-up emails and SMS messages that go out at 1 day, 3 days, and 7 days after a lead enquires. Most service businesses never follow up more than once.</p>
      <h2>Appointment Reminders</h2>
      <p>Automated appointment reminders sent 24 hours and 2 hours before a booking can reduce no-shows by up to 90%. This alone can add thousands of dollars back to your revenue.</p>
      <h2>Review Request Automation</h2>
      <p>24 hours after a service is completed, automatically send a review request via SMS. The timing is perfect — the client is satisfied and the experience is fresh.</p>
    `,
    related: ['crm-for-local-business', 'website-conversion-tips'],
  },
  {
    id: 'premium-website-roi',
    title: 'What\'s the ROI of a Premium Website for a Local Service Business?',
    category: 'Business Case',
    tags: ['ROI', 'Investment', 'Lead Generation'],
    date: '2025-03-18',
    readTime: '6 min read',
    author: 'Syed Danish Raza',
    excerpt: 'A premium website is the highest-ROI investment most local businesses can make. Here\'s the math — based on real conversion data — that proves it.',
    content: `
      <p>Let's do the math on what a premium, conversion-optimized website actually returns for a local service business.</p>
      <h2>The Baseline</h2>
      <p>Suppose your business gets 500 website visitors per month and your current website converts at 1.5% — that's 7–8 leads per month.</p>
      <h2>After Optimization</h2>
      <p>A premium, conversion-focused website typically achieves 4–6% conversion. At 4%, 500 visitors becomes 20 leads — nearly 3x more leads from the same traffic.</p>
      <h2>The Revenue Math</h2>
      <p>If your average client is worth $800, the difference between 8 and 20 leads per month (assuming a 40% close rate) is 5 additional clients worth $4,000/month — or $48,000/year in additional revenue.</p>
      <h2>The Investment</h2>
      <p>A premium custom website costs $2,500–$6,000. At the numbers above, it pays for itself in the first month of operation. The ROI in year one is typically 800–1,500%.</p>
    `,
    related: ['website-conversion-tips', 'why-your-website-loses-clients'],
  },
  {
    id: 'lead-capture-systems',
    title: 'Lead Capture Systems: Beyond the Contact Form',
    category: 'Lead Generation',
    tags: ['Lead Capture', 'Forms', 'CRO'],
    date: '2025-04-02',
    readTime: '7 min read',
    author: 'Syed Danish Raza',
    excerpt: 'A basic contact form captures maybe 20% of interested visitors. These advanced lead capture systems catch the other 80% — and they\'re not as complex as you think.',
    content: `
      <p>The standard "name, email, message" contact form is a 2010 solution to a 2025 problem. Modern lead capture is smarter, faster, and far more effective.</p>
      <h2>Exit-Intent Popups</h2>
      <p>When a visitor is about to leave your site, an exit-intent popup can recover 10–15% of them with a compelling offer. "Get a Free Quote Before You Go" with a 2-field form is remarkably effective.</p>
      <h2>Live Chat and Chatbots</h2>
      <p>Live chat converts at 6x the rate of contact forms. Even a simple chatbot that asks "What service are you looking for?" and collects a name and phone number can significantly boost your lead capture rate.</p>
      <h2>Click-to-Call Buttons</h2>
      <p>Make calling you a one-tap action on mobile. Put a sticky "Call Now" button at the bottom of every mobile page. Phone leads convert at 30–50% — far higher than web form leads.</p>
      <h2>Free Resource Downloads</h2>
      <p>Offer a free guide relevant to your industry — "5 Things to Check Before Hiring an HVAC Company" — in exchange for an email address. This builds your email list with highly qualified prospects.</p>
    `,
    related: ['website-conversion-tips', 'business-automation-guide'],
  },
  {
    id: 'choosing-right-developer',
    title: 'How to Choose the Right Web Developer for Your Local Business',
    category: 'Hiring Guide',
    tags: ['Hiring', 'Web Development', 'Business'],
    date: '2025-04-15',
    readTime: '5 min read',
    author: 'Syed Danish Raza',
    excerpt: 'Not all web developers are equal — especially when it comes to local service businesses. Here\'s the exact checklist to avoid costly mistakes when hiring.',
    content: `
      <p>Choosing the wrong web developer is one of the most expensive mistakes a local business can make. Here's how to choose correctly.</p>
      <h2>1. Look for Business Understanding, Not Just Technical Skills</h2>
      <p>A developer who only talks about code and not about leads, conversions, and business outcomes will build you a beautiful website that doesn't make you money. Ask how their previous work increased client revenue.</p>
      <h2>2. Review Their Portfolio Critically</h2>
      <p>Look at their portfolio websites on your phone. Are they fast? Are the CTAs clear? Would you call the business? Pretty screenshots are not the same as effective, converting websites.</p>
      <h2>3. Ask About Post-Launch Support</h2>
      <p>Your website will need updates, security patches, and occasional fixes. What does their maintenance offering look like? A developer who disappears after launch is a liability.</p>
      <h2>4. Request a Clear Process</h2>
      <p>A professional developer should be able to explain their discovery, design, development, testing, and launch process clearly. Ambiguity in process leads to scope creep and missed deadlines.</p>
    `,
    related: ['premium-website-roi', 'why-your-website-loses-clients'],
  },
];

(function () {
  // ─── Blog List Page ──────────────────────────────────────────
  function initBlogList() {
    const grid = document.getElementById('blog-grid');
    const searchInput = document.getElementById('blog-search');
    const categoryButtons = document.querySelectorAll('[data-category]');
    const countEl = document.getElementById('article-count');

    if (!grid) return;

    let currentCategory = 'all';
    let currentSearch = '';

    function renderArticles(articles) {
      if (!articles.length) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem 1rem;color:var(--color-body)">
          <p style="font-size:var(--text-lg);font-weight:600;">No articles found.</p>
          <p style="margin-top:0.5rem;">Try a different search or category.</p>
        </div>`;
        if (countEl) countEl.textContent = '0 articles';
        return;
      }

      if (countEl) countEl.textContent = `${articles.length} article${articles.length !== 1 ? 's' : ''}`;

      grid.innerHTML = articles.map((a, i) => `
        <article class="blog-card reveal stagger-${(i % 3) + 1}">
          <div class="blog-card-body">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
              <span class="tag tag-primary">${window.Utils.escapeHTML(a.category)}</span>
              <span style="font-size:var(--text-xs);color:var(--color-body);">${window.Utils.formatDate(a.date)}</span>
            </div>
            <h2 style="font-family:var(--font-display);font-size:var(--text-lg);font-weight:700;color:var(--color-heading);line-height:var(--leading-snug);margin-bottom:0.75rem;">
              <a href="blog/${a.id}.html" style="text-decoration:none;color:inherit;transition:color 0.15s;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='inherit'">
                ${window.Utils.escapeHTML(a.title)}
              </a>
            </h2>
            <p style="font-size:var(--text-sm);color:var(--color-body);line-height:var(--leading-relaxed);margin-bottom:1.25rem;">${window.Utils.escapeHTML(a.excerpt)}</p>
            <div style="display:flex;flex-wrap:wrap;gap:0.375rem;margin-bottom:1.25rem;">
              ${a.tags.map(t => `<span class="tag">${window.Utils.escapeHTML(t)}</span>`).join('')}
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--color-border);padding-top:1rem;margin-top:auto;">
              <span style="font-size:var(--text-xs);color:var(--color-body);">${a.readTime}</span>
              <a href="blog/${a.id}.html" class="btn btn-ghost btn-sm" style="padding:0.375rem 0.875rem;font-size:var(--text-xs);">
                Read Article <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </article>
      `).join('');

      // Re-init animations
      if (window.AnimationsReinit) window.AnimationsReinit();
    }

    function filterAndRender() {
      let filtered = [...BLOG_ARTICLES];

      if (currentCategory !== 'all') {
        filtered = filtered.filter(a => a.category.toLowerCase() === currentCategory.toLowerCase());
      }

      if (currentSearch.trim()) {
        const q = currentSearch.trim().toLowerCase();
        filtered = filtered.filter(a =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some(t => t.toLowerCase().includes(q))
        );
      }

      renderArticles(filtered);
    }

    // Category pills
    if (categoryButtons.length) {
      categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          categoryButtons.forEach(b => b.classList.remove('active', 'tag-primary'));
          btn.classList.add('active', 'tag-primary');
          currentCategory = btn.dataset.category;
          filterAndRender();
        });
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', window.Utils ? window.Utils.debounce((e) => {
        currentSearch = e.target.value;
        filterAndRender();
      }, 300) : (e) => {
        currentSearch = e.target.value;
        filterAndRender();
      });
    }

    // Support ?q= search param (SearchAction endpoint)
    const urlQuery = window.Utils ? window.Utils.getParam('q') : new URLSearchParams(window.location.search).get('q');
    if (urlQuery && searchInput) {
      currentSearch = urlQuery;
      searchInput.value = urlQuery;
    }

    renderArticles(BLOG_ARTICLES);
  }

  // ─── Blog Post Page ──────────────────────────────────────────
  function initBlogPost() {
    const container = document.getElementById('blog-post-content');
    if (!container) return;

    const id = window.Utils ? window.Utils.getParam('id') : new URLSearchParams(window.location.search).get('id');
    const article = BLOG_ARTICLES.find(a => a.id === id);

    if (!article) {
      container.innerHTML = `
        <div style="text-align:center;padding:5rem 1rem;">
          <h1 class="text-h2">Article Not Found</h1>
          <p style="margin-top:1rem;">The article you're looking for doesn't exist or has been moved.</p>
          <a href="blog.html" class="btn btn-primary" style="margin-top:2rem;">Back to Blog</a>
        </div>
      `;
      return;
    }

    // Update page title & meta
    document.title = `${article.title} | Syed Danish Raza`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', article.excerpt);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', article.title);
    if (ogDesc) ogDesc.setAttribute('content', article.excerpt);

    // Breadcrumb
    const breadcrumb = document.getElementById('post-breadcrumb');
    if (breadcrumb) {
      breadcrumb.innerHTML = `
        <a href="../index.html">Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="blog.html">Blog</a>
        <span class="breadcrumb-sep">›</span>
        <span>${window.Utils.escapeHTML(article.title)}</span>
      `;
    }

    // Render article
    container.innerHTML = `
      <header style="margin-bottom:2.5rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">
          <span class="tag tag-primary">${window.Utils.escapeHTML(article.category)}</span>
          <span style="font-size:var(--text-xs);color:var(--color-body);">${window.Utils.formatDate(article.date)}</span>
          <span style="font-size:var(--text-xs);color:var(--color-body);">·</span>
          <span style="font-size:var(--text-xs);color:var(--color-body);">${article.readTime}</span>
        </div>
        <h1 class="text-h1" style="margin-bottom:1.25rem;">${window.Utils.escapeHTML(article.title)}</h1>
        <p class="text-lead" style="margin-bottom:1.5rem;">${window.Utils.escapeHTML(article.excerpt)}</p>
        <div style="display:flex;align-items:center;gap:0.75rem;padding:1rem 0;border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border);">
          <div class="avatar">${article.author.charAt(0)}</div>
          <div>
            <p style="font-weight:700;color:var(--color-heading);font-size:var(--text-sm);">${window.Utils.escapeHTML(article.author)}</p>
            <p style="font-size:var(--text-xs);color:var(--color-body);">Web Solutions Developer</p>
          </div>
        </div>
      </header>
      <div class="prose" style="line-height:var(--leading-relaxed);color:var(--color-body);">
        ${article.content}
      </div>
      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--color-border);">
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          ${article.tags.map(t => `<span class="tag">${window.Utils.escapeHTML(t)}</span>`).join('')}
        </div>
      </div>
    `;

    // Related articles
    const relatedContainer = document.getElementById('related-posts');
    if (relatedContainer && article.related?.length) {
      const relatedArticles = article.related
        .map(id => BLOG_ARTICLES.find(a => a.id === id))
        .filter(Boolean)
        .slice(0, 3);

      if (relatedArticles.length) {
        relatedContainer.innerHTML = `
          <h2 class="text-h3" style="margin-bottom:1.5rem;">Related Articles</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;">
            ${relatedArticles.map(a => `
              <a href="blog/${a.id}.html" class="card" style="text-decoration:none;display:block;padding:1.5rem;">
                <span class="tag tag-primary" style="margin-bottom:0.75rem;">${window.Utils.escapeHTML(a.category)}</span>
                <h3 style="font-family:var(--font-display);font-size:var(--text-base);font-weight:700;color:var(--color-heading);line-height:var(--leading-snug);margin-top:0.75rem;margin-bottom:0.5rem;">${window.Utils.escapeHTML(a.title)}</h3>
                <p style="font-size:var(--text-xs);color:var(--color-body);">${a.readTime}</p>
              </a>
            `).join('')}
          </div>
        `;
      }
    }

    // Prose styles
    const style = document.createElement('style');
    style.textContent = `
      .prose h2 { font-family:var(--font-display);font-size:var(--text-2xl);font-weight:700;color:var(--color-heading);margin:2rem 0 0.75rem;line-height:var(--leading-snug); }
      .prose h3 { font-family:var(--font-display);font-size:var(--text-xl);font-weight:700;color:var(--color-heading);margin:1.5rem 0 0.5rem; }
      .prose p { margin-bottom:1.25rem;font-size:var(--text-base);line-height:1.8; }
      .prose ul { list-style:disc;padding-left:1.5rem;margin-bottom:1.25rem; }
      .prose li { margin-bottom:0.5rem;font-size:var(--text-base); }
      .prose strong { color:var(--color-heading);font-weight:700; }
    `;
    document.head.appendChild(style);
  }

  // ─── Newsletter ──────────────────────────────────────────────
  function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;

      if (window.Validation && !window.Validation.isValidEmail(emailInput.value)) {
        window.Validation.showError(emailInput, 'Please enter a valid email address.');
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Subscribing…';
      }

      try {
        const res = await fetch('https://formsubmit.co/ajax/syeddanishraza0@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email: emailInput.value,
            _subject: 'New newsletter subscription from syeddanishraza.vercel.app',
            _template: 'table',
            _captcha: 'false',
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        if (btn) {
          btn.textContent = 'Subscribed!';
          btn.style.background = 'var(--color-success)';
        }
        emailInput.value = '';
      } catch (err) {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }
        if (window.Validation) {
          window.Validation.showError(emailInput, 'Could not subscribe. Please try again or email me at syeddanishraza0@gmail.com.');
        }
        console.error('[Newsletter] Subscription error:', err);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initBlogList();
      initBlogPost();
      initNewsletter();
    });
  } else {
    initBlogList();
    initBlogPost();
    initNewsletter();
  }
})();
