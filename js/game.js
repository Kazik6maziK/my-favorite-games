// Индексы для каждого слайдера
let currentSlideIllustrations = 0;
let currentSlideMoments = 0;

// Функция для показа слайдов с учетом направления и типа слайдера
function showSlide(index, type) {
  let slides;
  let totalSlides;

  // В зависимости от типа слайдера (illustrations или moments)
  if (type === 'illustrations') {
    slides = document.querySelectorAll('#illustrations-slider .slide');
    totalSlides = slides.length;
    if (index >= totalSlides) currentSlideIllustrations = 0;
    if (index < 0) currentSlideIllustrations = totalSlides - 1;
  } else if (type === 'moments') {
    slides = document.querySelectorAll('#moments-slider .funny-slide');
    totalSlides = slides.length;
    if (index >= totalSlides) currentSlideMoments = 0;
    if (index < 0) currentSlideMoments = totalSlides - 1;
  }

  const slideWidth = slides[0].clientWidth;
  const slider = document.querySelector(`#${type}-slider`);
  slider.style.transform = `translateX(-${(type === 'illustrations' ? currentSlideIllustrations : currentSlideMoments) * slideWidth}px)`;
}

// Функция для переключения слайдов
function moveSlide(direction, type) {
  if (type === 'illustrations') {
    currentSlideIllustrations += direction;
    showSlide(currentSlideIllustrations, 'illustrations');
  } else if (type === 'moments') {
    currentSlideMoments += direction;
    showSlide(currentSlideMoments, 'moments');
  }
}

// Инициализация слайдера
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlideIllustrations, 'illustrations');
  showSlide(currentSlideMoments, 'moments');
});
