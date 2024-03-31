// Находим все кнопки "Подробнее"
const showModalButtons = document.querySelectorAll('.show-modal-btn');

// Добавляем обработчик события клика для каждой кнопки "Подробнее"
showModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Находим модальное окно и его содержимое
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');

    // Получаем информацию о книге
    const bookTitle = button.closest('.product-card-wrapper').dataset.name;
    const bookPrice = button.closest('.product-card-wrapper').querySelector('.product-price').textContent;
    const bookImage = button.closest('.product-card-wrapper').querySelector('.product-image img').src;

    // Наполняем модальное окно информацией о книге
    modalContent.innerHTML = `
      <span class="close-button">&times;</span>
      <h2>${bookTitle}</h2>
      <img src="${bookImage}" alt="${bookTitle}" style="align-text: center;width: 300px; height: auto;">
      <p>Цена: ${bookPrice}</p>
      <button type="button" class="add-to-cart-btn">Купить</button>
      <!-- Другие детали о книге -->
    `;

    // Показываем модальное окно
    modal.style.display = 'block';

    // Добавляем обработчик события клика на кнопку закрытия модального окна
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Добавляем обработчик события клика на область вне модального окна
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });

    // Добавляем обработчик события клика на кнопку "Купить"
    const buyButton = modalContent.querySelector('.add-to-cart-btn');
    buyButton.addEventListener('click', () => {
      // Добавьте здесь логику для покупки книги
      // Например, открытие страницы с оформлением заказа
    });
  });
});
