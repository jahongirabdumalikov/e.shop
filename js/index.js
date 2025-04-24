const carouselImages = document.getElementById('carousel-images');
let currentIndex = 0;
const totalSlides = 5;

function updateCarousel() {
  const offset = -currentIndex * 600; 
  carouselImages.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

setInterval(nextSlide, 3000);




function showCards() {
  const cardsSection = document.getElementById('cards-section');
  cardsSection.classList.remove('hidden');
  cardsSection.scrollIntoView({ behavior: 'smooth' });
}