// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero typing animation
const heroText = "Joseph Kioko";
let i = 0;
const speed = 150;
function typeWriter() {
  if (i < heroText.length) {
    document.getElementById("hero-text").innerHTML += heroText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("hero-text").innerHTML = "";
typeWriter();
