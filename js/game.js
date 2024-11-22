let currentSlideIllustrations = 0;
let currentSlideMoments = 0;

// Функция для отображения слайдов
function showSlide(sliderId, index) {
  const slides = document.querySelectorAll(`#${sliderId} .slide`);
  const totalSlides = slides.length;

  if (index >= totalSlides) index = 0;  // Переход на первый слайд
  if (index < 0) index = totalSlides - 1; // Переход на последний слайд

  const slideWidth = slides[0].clientWidth;
  const slider = document.querySelector(`#${sliderId} .slider`);
  slider.style.transform = `translateX(-${index * slideWidth}px)`; // Сдвиг слайдера по оси X

  return index; // Возвращаем новый индекс слайда
}

// Функция для переключения слайдов
function moveSlide(sliderType, direction) {
  if (sliderType === 'illustrations') {
    currentSlideIllustrations += direction;
    currentSlideIllustrations = showSlide('illustrations-slider', currentSlideIllustrations);
  } else if (sliderType === 'moments') {
    currentSlideMoments += direction;
    currentSlideMoments = showSlide('moments-slider', currentSlideMoments);
  }
}

// Инициализация слайдеров при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Инициализация слайдера иллюстраций
  showSlide('illustrations-slider', currentSlideIllustrations);
  
  // Инициализация слайдера смешных моментов
  showSlide('moments-slider', currentSlideMoments);
});
