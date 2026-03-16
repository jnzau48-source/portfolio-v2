// Smooth scroll to reservation
function scrollToReservation() {
  document.getElementById("reservation").scrollIntoView({ behavior: "smooth" });
}

// Menu filtering
function filterMenu(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if(category === 'all') card.style.display = 'block';
    else card.style.display = card.classList.contains(category) ? 'block' : 'none';
  });
}

// Auto-slide gallery
const gallery = document.querySelector('.gallery-slider');
let scrollAmount = 0;
const scrollStep = 1; // pixels per interval
const scrollInterval = 20; // ms

function autoScrollGallery() {
  if (!gallery) return;
  scrollAmount += scrollStep;
  if(scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
    scrollAmount = 0; // loop back
  }
  gallery.scrollLeft = scrollAmount;
}

setInterval(autoScrollGallery, scrollInterval);
