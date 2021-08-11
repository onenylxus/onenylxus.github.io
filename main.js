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

/* ------------------------ division ------------------------ */

// Toggle skills
qsa('.skills-header').forEach((header) => header.addEventListener('click', () => {
  qsa('.skills-content').forEach((content) => {
    content.className = "skills-content skills-close";
  });
  if (header.parentNode.className === 'skills-content skills-close') {
    header.parentNode.className = 'skills-content skills-open';
  }
}));
