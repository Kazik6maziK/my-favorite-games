let slideIndex = 0;

// Функция для переключения слайдов
function moveSlide(step) {
  const slides = document.querySelectorAll('.slide'); // Получаем все слайды
  const totalSlides = slides.length;

  slideIndex += step;

  // Если индекс выходит за пределы, начинаем с первого или последнего
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  // Скрываем все слайды
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Показываем текущий слайд
  slides[slideIndex].style.display = 'block';
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    if (index !== slideIndex) slide.style.display = 'none'; // Скрываем все слайды, кроме первого
  });
});
