// Navbar
const hamburger = document.querySelector ('.hamburger');
const line = document.querySelector ('.line');
const navbar = document.querySelector ('.navbar');

hamburger.addEventListener ('click', () => {
  line.classList.toggle ('active');
  navbar.classList.toggle ('active');
});

// Skills
const skillsSection = document.getElementById ('skills-section');
const progressBars = document.querySelectorAll ('.progress-bar');

const showProgress = () => {
  progressBars.forEach (progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
};
const hideProgress = () => {
  progressBars.forEach (progressBar => {
    progressBar.style.opacity = 0;
    progressBar.style.width = 0;
  });
};
window.addEventListener ('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect ().top;
  const screenPos = window.innerHeight;
  if (sectionPos < screenPos) {
    showProgress ();
  } else {
    hideProgress ();
  }
});

var typed = new Typed ('.info', {
  strings: ['Web Developer', 'Student'],
  smartBackspace: true,
  typeSpeed: 90,
  backSpeed: 90,
  loop: true, // Default value
});

const left = document.querySelector ('.left');
const right = document.querySelector ('.right');
console.log (left);
window.addEventListener ('scroll', () => {
  let value = window.scrollY;
  left.style.right = 0 + value / 15 + '%';
  right.style.left = -200 + value / 15 + '%';
});

const skillTop = document.getElementById ('skills-top');
const skillBottom = document.getElementById ('skills-bottom');
window.addEventListener ('scroll', () => {
  let value = window.scrollY;
  skillTop.style.right = 0 + value / 15 + '%';
  skillBottom.style.left = -200 + value / 15 + '%';
});

const projectTop = document.getElementById ('project-top');
const projectBottom = document.getElementById ('project-bottom');
window.addEventListener ('scroll', () => {
  let value = window.scrollY;
  projectTop.style.right = 0 + value / 15 + '%';
  projectBottom.style.left = -200 + value / 15 + '%';
});

const contactTop = document.getElementById ('contact-top');
const contactBottom = document.getElementById ('contact-bottom');
window.addEventListener ('scroll', () => {
  let value = window.scrollY;
  contactTop.style.right = -220 + value / 15 + '%';
  contactBottom.style.left = -350 + value / 15 + '%';
});

// Scroll to top
const header = document.querySelector ('header');
const scrollTop = document.querySelector ('.scroll-top');

window.addEventListener ('scroll', () => {
  if (window.pageYOffset > 150) {
    scrollTop.addEventListener ('click', () => {
      header.scrollIntoView ({behavior: 'smooth'});
    });
    scrollTop.classList.add ('active');
  } else {
    scrollTop.classList.remove ('active');
  }
});

// pre loader
const preloader = document.querySelector ('.loading');
window.addEventListener ('load', () => {
  preloader.style.display = 'none';
});
