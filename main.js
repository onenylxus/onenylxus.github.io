// Snippet functions for HTML elements
function qs(sel) {
  return document.querySelector(sel);
}

function qsa(sel) {
  return document.querySelectorAll(sel);
}

function ct(cond) {
  return cond ? 'add' : 'remove';
}

/* ------------------------ division ------------------------ */

// Show menu
if (qs('.nav-toggle')) {
  qs('.nav-toggle').addEventListener('click', () => {
    qs('.nav-menu').classList.add('show-menu');
  });
}

// Hide menu
if (qs('.nav-close')) {
  qs('.nav-close').addEventListener('click', () => {
    qs('.nav-menu').classList.remove('show-menu');
  });
}

// Remove menu for mobile
qsa('.nav-link').forEach((link) => link.addEventListener('click', () => {
  qs('.nav-menu').classList.remove('show-menu');
}));

// Detect current section by scroll offset
window.addEventListener('scroll', () => {
  const dy = window.pageYOffset;
  qsa('section[id]').forEach((section) => {
    const h = section.offsetHeight, t = section.offsetTop - 50, id = section.getAttribute('id');
    qs(`.nav-menu a[href*=${id}]`).classList[ct(dy > t && dy <= t + h)]('active-link');
  });
});

/* ------------------------ division ------------------------ */

// Toggle skills
qsa('.skills-header').forEach((header) => header.addEventListener('click', () => {
  qsa('.skills-content').forEach((content) => {
    content.className = 'skills-content skills-close';
  });
  if (header.parentNode.className === 'skills-content skills-close') {
    header.parentNode.className = 'skills-content skills-open';
  }
}));

// Swipe projects
const swiper = new Swiper('.projects-container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true
});

/* ------------------------ division ------------------------ */

// Change background header
window.addEventListener('scroll', () => {
  qs('.header').classList[ct(window.scrollY >= 80)]('scroll-header');
});

// Toggle scroll up button
window.addEventListener('scroll', () => {
  qs('.scrollup').classList[ct(window.scrollY >= 600)]('show-scrollup');
});

/* ------------------------ division ------------------------ */

// Toggle theme
if (localStorage.getItem('theme')) {
  document.body.classList[ct(localStorage.getItem('theme') === 'dark')]('dark-theme');
  qs('.theme-changer').classList[ct(localStorage.getItem('theme') === 'dark')]('uil-sun');
}

qs('.theme-changer').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  qs('.theme-changer').classList.toggle('uil-sun');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});
