// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('active');
}

// Typing Animation
const text = ["Front-End Developer", "BCA Student"];
let index = 0, charIndex = 0;
const typingElement = document.getElementById("typing-text");

function type() {
  if (index >= text.length) index = 0;
  typingElement.textContent = text[index].slice(0, ++charIndex);
  if (charIndex === text[index].length) {
    setTimeout(() => {
      charIndex = 0;
      index++;
      setTimeout(type, 500);
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Scroll Reveal
  ScrollReveal().reveal('.section', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });
});
// Auto-close nav on link click (mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('active');
  });
});
