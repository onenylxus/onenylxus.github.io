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

/* ------------------------ division ------------------------ */

// Remove menu for mobile
qsa('.nav-link').forEach((link) => link.addEventListener('click', () => {
  qs('.nav-menu').classList.remove('show-menu');
}));