(function () {
  const button = document.querySelector('.menu-button');
  const links = document.querySelector('.nav-links');
  if (button && links) {
    button.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      links.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }));
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/data-shift';
  document.querySelectorAll('[data-route]').forEach((link) => {
    const target = new URL(link.getAttribute('href'), window.location.href);
    if (target.pathname.replace(/\/+$/, '') === path) link.setAttribute('aria-current', 'page');
  });

  const faqs = Array.from(document.querySelectorAll('.faq-list details'));
  faqs.forEach((item) => item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqs.filter((other) => other !== item).forEach((other) => { other.open = false; });
  }));
})();
