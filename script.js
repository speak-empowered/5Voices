// Small enhancements; the site is intentionally dependency-free.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.setAttribute('tabindex', '-1');
  });
});

// Show a simple confirmation after a Netlify form submission.
if (new URLSearchParams(window.location.search).get('success') === 'true') {
  const form = document.querySelector('form[name="5-voices-contact"]');
  const success = document.getElementById('form-success');
  if (form && success) {
    form.hidden = true;
    success.hidden = false;
  }
}
