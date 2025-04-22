const carouselImages = document.getElementById('carousel-images');
let currentIndex = 0;
const totalSlides = 4;

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

setInterval(nextSlide, 2200);
