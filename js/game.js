// Индексы для слайдера иллюстраций и смешных моментов
let slideIndexIllustrations = 0;  
let slideIndexMoments = 0;        

// Функция для переключения слайдов
function moveSlide(step, type) {
  let slides;
  let totalSlides;

  if (type === 'illustrations') {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    slideIndexIllustrations += step;

    // Если индекс выходит за пределы, начинаем с первого или последнего
    if (slideIndexIllustrations >= totalSlides) slideIndexIllustrations = 0;
    if (slideIndexIllustrations < 0) slideIndexIllustrations = totalSlides - 1;
  } else if (type === 'moments') {
    slides = document.querySelectorAll('.funny-slide');
    totalSlides = slides.length;
    slideIndexMoments += step;

    // Если индекс выходит за пределы, начинаем с первого или последнего
    if (slideIndexMoments >= totalSlides) slideIndexMoments = 0;
    if (slideIndexMoments < 0) slideIndexMoments = totalSlides - 1;
  }

  // Скрываем все слайды
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Показываем текущий слайд
  if (type === 'illustrations') {
    slides[slideIndexIllustrations].style.display = 'block';
  } else if (type === 'moments') {
    slides[slideIndexMoments].style.display = 'block';
  }
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Инициализация слайдера иллюстраций
  const illustrationSlides = document.querySelectorAll('.slide');
  illustrationSlides.forEach((slide, index) => {
    if (index !== slideIndexIllustrations) slide.style.display = 'none';
  });

  // Инициализация слайдера смешных моментов
  const momentSlides = document.querySelectorAll('.funny-slide');
  momentSlides.forEach((slide, index) => {
    if (index !== slideIndexMoments) slide.style.display = 'none';
  });
});
