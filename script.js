// ========== NAV TOGGLE ==========
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ========== NAV BACKGROUND ON SCROLL ==========
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========== STORIES CAROUSEL ==========
const storiesCarousel = document.getElementById('storiesCarousel');
const storiesLeft = document.getElementById('storiesLeft');
const storiesRight = document.getElementById('storiesRight');

if (storiesCarousel && storiesLeft && storiesRight) {
  storiesLeft.addEventListener('click', () => {
    const scrollAmount = storiesCarousel.clientWidth * 0.8;
    storiesCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  storiesRight.addEventListener('click', () => {
    const scrollAmount = storiesCarousel.clientWidth * 0.8;
    storiesCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// ========== ADS CAROUSEL ==========
const adsCarousel = document.getElementById('adsCarousel');
const adsLeft = document.getElementById('adsLeft');
const adsRight = document.getElementById('adsRight');

if (adsCarousel && adsLeft && adsRight) {
  adsLeft.addEventListener('click', () => {
    const scrollAmount = adsCarousel.clientWidth * 0.8;
    adsCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  adsRight.addEventListener('click', () => {
    const scrollAmount = adsCarousel.clientWidth * 0.8;
    adsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// ========== MUSIC VIDEOS CAROUSEL ==========
const musicCarousel = document.getElementById('musicCarousel');
const musicLeft = document.getElementById('musicLeft');
const musicRight = document.getElementById('musicRight');

if (musicCarousel && musicLeft && musicRight) {
  musicLeft.addEventListener('click', () => {
    const scrollAmount = musicCarousel.clientWidth * 0.8;
    musicCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  musicRight.addEventListener('click', () => {
    const scrollAmount = musicCarousel.clientWidth * 0.8;
    musicCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}


// ========== SCROLL REVEAL ANIMATIONS ==========
const revealElements = document.querySelectorAll(
  '.about__image-wrapper, .about__text-col, .work-card, .contact__container, .works__header'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ========== HERO PARALLAX (subtle) ==========
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    hero.style.setProperty('--parallax-y', `${scrolled * 0.3}px`);
  }
});

// ========== STAGGERED WORK CARDS ==========
const workCards = document.querySelectorAll('.work-card');
workCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
