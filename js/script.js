let currentSlide = {
    main: 0,
    illustration: 0,
    moment: 0
  };
  
  // Функция для отображения слайда
  function showSlide(slideType, index) {
    const slides = document.querySelectorAll(`.${slideType} .slide`);
    if (index >= slides.length) {
      currentSlide[slideType] = 0; // если индекс превышает количество слайдов, начинаем сначала
    }
    if (index < 0) {
      currentSlide[slideType] = slides.length - 1; // если индекс меньше 0, идем к последнему слайду
    }
  
    const slideWidth = slides[0].clientWidth; // Ширина слайда
    const slider = document.querySelector(`.${slideType} .slider`);
    slider.style.transform = `translateX(-${currentSlide[slideType] * slideWidth}px)`; // Перемещение слайдера
  }
  
  // Функция для перемещения слайдов
  function moveSlide(slideType, direction) {
    currentSlide[slideType] += direction;
    showSlide(slideType, currentSlide[slideType]);
  }
  
  // Инициализация слайдеров
  document.addEventListener('DOMContentLoaded', () => {
    // Инициализация всех слайдеров
    showSlide('main', currentSlide.main);
    showSlide('illustration', currentSlide.illustration);
    showSlide('moment', currentSlide.moment);
  });
  