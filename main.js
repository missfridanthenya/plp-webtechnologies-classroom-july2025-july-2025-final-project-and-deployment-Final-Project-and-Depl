// main.js — small helpers: mobile menu, year update, contact validation
document.addEventListener('DOMContentLoaded', () => {
  // set footer years
  const years = [ 'year', 'year2', 'year3', 'year4' ];
  const y = new Date().getFullYear();
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // mobile nav toggles (works across pages where navToggle exists)
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.getElementById('siteNav');
      if (!nav) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
      // small visual: toggle body overflow
      document.body.classList.toggle('nav-open');
    });
  });

  // Contact form validation + friendly message
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');
      const out = document.getElementById('formMessage');

      // simple checks
      if (!name.value.trim() || name.value.trim().length < 2) {
        out.textContent = 'Please provide a valid name (2+ characters).';
        name.focus();
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        out.textContent = 'Please provide a valid email address.';
        email.focus();
        return;
      }
      if (!message.value.trim() || message.value.trim().length < 8) {
        out.textContent = 'Message must be at least 8 characters.';
        message.focus();
        return;
      }

      // if you have a backend, send fetch here. For the assignment we simulate success:
      out.textContent = 'Thanks! Your message was sent (simulated).';
      contactForm.reset();
    });
  }
});
