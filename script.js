// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
    // Close mobile nav if open
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.nav-toggle');
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinksWrap = document.querySelector('.nav-links');
if (navToggle && navLinksWrap) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinksWrap.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
