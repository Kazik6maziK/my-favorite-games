let currentSlides = { slider1: 0, slider2: 0 };

function moveSlide(direction, sliderId) {
  const slides = document.querySelectorAll(`#${sliderId} .slide`);
  const totalSlides = slides.length;

  // Скрываем все слайды
  slides.forEach(slide => (slide.style.display = "none"));

  // Обновление индекса текущего слайда
  currentSlides[sliderId] += direction;

  if (currentSlides[sliderId] < 0) {
    currentSlides[sliderId] = totalSlides - 1;
  } else if (currentSlides[sliderId] >= totalSlides) {
    currentSlides[sliderId] = 0;
  }

  //  текущий слайд
  slides[currentSlides[sliderId]].style.display = "block";
}

// Инициализация слайдеров при загрузке
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(currentSlides).forEach(sliderId => {
    moveSlide(0, sliderId); // Показать первый слайд каждого слайдера
  });
});
