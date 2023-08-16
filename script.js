const navegacao = document.querySelector('.navegacao');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = navegacao.getAttribute('data-visible');

  if (visibility === 'false') {
    navegacao.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    navegacao.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const metade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - metade < 0;
        if (sectionVisible) {
          section.classList.add('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

initAnimacaoScroll();
