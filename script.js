// Ripple effect for all .btn
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = (e.clientX - rect.left - size/2) + 'px';
    circle.style.top = (e.clientY - rect.top - size/2) + 'px';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== TYPED TEXT ANIMATION =====
const texts = [
  'Front End Developer',
  'AI & ML Engineer',
  'Flutter App Builder',
  'Java Backend Dev'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeEffect() {
  const current = texts[textIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
  }
  let speed = isDeleting ? 60 : 100;
  if (!isDeleting && charIndex === current.length + 1) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === -1) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 400;
    charIndex = 0;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

// ===== PROJECT FILTER =====
// ===== CONTACT FORM TO WHATSAPP =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
    const subject = contactForm.querySelector('input[placeholder="Subject"]').value.trim();
    const message = contactForm.querySelector('textarea[placeholder="Your Message..."]').value.trim();
    let whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappNumber = '923426435527';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.location.href = whatsappURL;
  });
}
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const cats = card.dataset.cat || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.4s ease';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-category, .highlight, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== CONTACT FORM =====


// ===== SMOOTH ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.id;
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});