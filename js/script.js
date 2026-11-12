const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const typingTarget = document.querySelector('.typing');
const phrases = ['desenvolvimento de software', 'análise de dados', 'tecnologia assistiva'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typingTarget && !reduceMotion) {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typePhrase() {
    const phrase = phrases[phraseIndex];
    typingTarget.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex < phrase.length) {
      charIndex++;
      setTimeout(typePhrase, 75);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typePhrase, 1500);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(typePhrase, 35);
    } else {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 350);
    }
  }

  typePhrase();
}