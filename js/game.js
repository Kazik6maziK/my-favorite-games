let currentSlideIllustrations = 0;
let currentSlideMoments = 0;

// Функция для отображения слайдов
function showSlide(sliderId, index) {
  const slides = document.querySelectorAll(`#${sliderId} .slide`);
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  const slideWidth = slides[0].clientWidth;
  const slider = document.querySelector(`#${sliderId}`);
  slider.style.transform = `translateX(-${index * slideWidth}px)`;

  return index; // Возвращаем текущий индекс для обновления
}

// Функция для переключения слайдов
function moveSlide(sliderId, direction) {
  if (sliderId === 'illustrations') {
    currentSlideIllustrations += direction;
    currentSlideIllustrations = showSlide('illustrations-slider', currentSlideIllustrations);
  } else if (sliderId === 'moments') {
    currentSlideMoments += direction;
    currentSlideMoments = showSlide('moments-slider', currentSlideMoments);
  }
}

// Инициализация слайдеров при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  showSlide('illustrations-slider', currentSlideIllustrations); // Инициализация слайдера иллюстраций
  showSlide('moments-slider', currentSlideMoments); // Инициализация слайдера смешных моментов
});
