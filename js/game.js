// Инициализация слайдера
function initSlider(sliderElement) {
    let currentSlide = 0;

    const slides = sliderElement.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    const slider = sliderElement.querySelector('.slider');

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function moveSlide(direction) {
        currentSlide += direction;
        showSlide(currentSlide);
    }

    sliderElement.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    sliderElement.querySelector('.next').addEventListener('click', () => moveSlide(1));

    showSlide(currentSlide); // Показать первый слайд
}

// Применяем функцию ко всем слайдерам на странице
document.querySelectorAll('.slider-container').forEach(initSlider);
