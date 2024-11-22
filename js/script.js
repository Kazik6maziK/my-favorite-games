let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  
  const slideWidth = slides[0].clientWidth;
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function moveSlide(direction) {
  currentSlide += direction;
  showSlide(currentSlide);
}

// Инициализация слайдера
showSlide(currentSlide);
