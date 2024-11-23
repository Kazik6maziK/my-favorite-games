document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); // стандартное поведение формы
  
    // Получ данные формы
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
  
    // Создаём новый элемент для отзыва
    const review = document.createElement("p");
    review.innerHTML = `<strong>${name}</strong>: ${message}`;
  
    // Добавляем отзыв в блок отзывов
    const reviewsContainer = document.getElementById("reviews");
    if (reviewsContainer.innerHTML.includes("Пока нет отзывов")) {
      reviewsContainer.innerHTML = ""; // Удаляем текст "Пока нет отзывов"
    }
    reviewsContainer.appendChild(review);
  
    // Очищаем форму
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  });
  