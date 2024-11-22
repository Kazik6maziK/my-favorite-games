let currentSlideIndex1 = 0; // Индекс текущего слайда для первого слайдера
let currentSlideIndex2 = 0; // Индекс текущего слайда для второго слайдера

function moveSlide(direction, sliderId) {
  let slides;
  let currentIndex;

  if (sliderId === 'slider1') {
    slides = document.querySelectorAll(`#${sliderId} .slide`);
    currentIndex = currentSlideIndex1;
  } else if (sliderId === 'slider2') {
    slides = document.querySelectorAll(`#${sliderId} .slide`);
    currentIndex = currentSlideIndex2;
  }

  // Скрыть все слайды
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Обновляем индекс слайда
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Если индекс меньше 0, возвращаемся к последнему слайду
  } else if (currentIndex >= slides.length) {
    currentIndex = 0; // Если индекс больше последнего слайда, идем к первому
  }

  // Показываем текущий слайд
  slides[currentIndex].style.display = 'block';

  // Сохраняем текущий индекс
  if (sliderId === 'slider1') {
    currentSlideIndex1 = currentIndex;
  } else if (sliderId === 'slider2') {
    currentSlideIndex2 = currentIndex;
  }
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  moveSlide(0, 'slider1'); // Показываем первый слайд при загрузке страницы
  moveSlide(0, 'slider2'); // Показываем первый слайд при загрузке страницы
});
