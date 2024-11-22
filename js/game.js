let currentSlideIndex1 = 0; // Индекс текущего слайда для первого слайдера
let currentSlideIndex2 = 0; // Индекс текущего слайда для второго слайдера

function moveSlide(direction, sliderId) {
  let slides;
  if (sliderId === 'slider1') {
    slides = document.querySelectorAll(`#${sliderId} .slide`);
    currentSlideIndex1 += direction;
    if (currentSlideIndex1 < 0) {
      currentSlideIndex1 = slides.length - 1;
    } else if (currentSlideIndex1 >= slides.length) {
      currentSlideIndex1 = 0;
    }
  } else if (sliderId === 'slider2') {
    slides = document.querySelectorAll(`#${sliderId} .slide`);
    currentSlideIndex2 += direction;
    if (currentSlideIndex2 < 0) {
      currentSlideIndex2 = slides.length - 1;
    } else if (currentSlideIndex2 >= slides.length) {
      currentSlideIndex2 = 0;
    }
  }

  // Прячем все слайды
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Показываем текущий слайд
  if (sliderId === 'slider1') {
    slides[currentSlideIndex1].style.display = 'block';
  } else if (sliderId === 'slider2') {
    slides[currentSlideIndex2].style.display = 'block';
  }
}

// Инициализация первого слайдера
document.addEventListener('DOMContentLoaded', function () {
  moveSlide(0, 'slider1'); // Показываем первый слайд при загрузке страницы
  moveSlide(0, 'slider2'); // Показываем первый слайд при загрузке страницы
});
