let slideIndex = 0;

// Функция для переключения слайдов
function moveSlide(step) {
  const slides = document.querySelectorAll('.slide'); // Получаем все слайды
  const funnySlides = document.querySelectorAll('.funny-slide'); // Для смешных моментов
  const totalSlides = slides.length > 0 ? slides.length : funnySlides.length; // Проверка, какой слайдер использовать

  slideIndex += step;

  // Если индекс выходит за пределы, начинаем с первого или последнего
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  // Скрываем все слайды
  if (slides.length > 0) {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
  }
  if (funnySlides.length > 0) {
    funnySlides.forEach(slide => {
      slide.style.display = 'none';
    });
  }

  // Показываем текущий слайд
  if (slides.length > 0) {
    slides[slideIndex].style.display = 'block';
  }
  if (funnySlides.length > 0) {
    funnySlides[slideIndex].style.display = 'block';
  }
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const funnySlides = document.querySelectorAll('.funny-slide');

  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      if (index !== slideIndex) slide.style.display = 'none'; // Скрываем все слайды, кроме первого
    });
  }

  if (funnySlides.length > 0) {
    funnySlides.forEach((slide, index) => {
      if (index !== slideIndex) slide.style.display = 'none'; // Скрываем все слайды смешных моментов, кроме первого
    });
  }
});
