// Функция для отображения слайда в конкретном слайдере
function showSlide(sliderId, index) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    const slider = document.querySelector(`#${sliderId}`);
    
    // Проверяем границы индекса
    if (index >= slides.length) {
      currentSlide[sliderId] = 0;
    } else if (index < 0) {
      currentSlide[sliderId] = slides.length - 1;
    } else {
      currentSlide[sliderId] = index;
    }
  
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlide[sliderId] * slideWidth}px)`;
  }
  
  // Функция для изменения слайда в конкретном слайдере
  function moveSlide(direction, sliderId) {
    currentSlide[sliderId] += direction;
    showSlide(sliderId, currentSlide[sliderId]);
  }
  
  // Инициализация слайдеров
  let currentSlide = {};
  document.querySelectorAll('.slider').forEach(slider => {
    const sliderId = slider.id;
    currentSlide[sliderId] = 0;
    showSlide(sliderId, currentSlide[sliderId]);
  });
  