// Snippet function for HTML elements
function qs(sel) {
  return document.querySelector(sel);
}

function qsa(sel) {
  return document.querySelectorAll(sel);
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
    if (dy > t && dy <= t + h) {
      qs(`.nav-menu a[href*=${id}]`).classList.add('active-link');
    } else {
      qs(`.nav-menu a[href*=${id}]`).classList.remove('active-link');
    }
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
  if (window.scrollY >= 80) {
    qs('.header').classList.add('scroll-header');
  } else {
    qs('.header').classList.remove('scroll-header');
  }
});

// Toggle scroll up button
window.addEventListener('scroll', () => {
  if (window.scrollY >= 600) {
    qs('.scrollup').classList.add('show-scrollup');
  } else {
    qs('.scrollup').classList.remove('show-scrollup');
  }
});
