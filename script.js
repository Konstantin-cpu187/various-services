document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.service-container li');
    const feedbackForm = document.getElementById('feedbackForm');
    const closeForm = document.getElementById('closeForm');
    const listItemInfo = document.getElementById('listItemInfo');
    const openFormButtons = document.querySelectorAll('.open-form'); // Для кнопок с data-service
  
    // Обработчик на все элементы <li>
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceName = item.textContent; // Получаем текст элемента
            listItemInfo.textContent = `Вы выбрали: ${serviceName}`;
            feedbackForm.style.display = 'flex';
        });
    });
  
    // Обработчик для кнопок
    openFormButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceName = button.getAttribute('data-service'); // Получаем название услуги
            listItemInfo.textContent = `Вы выбрали: ${serviceName}`;
            feedbackForm.style.display = 'flex';
        });
    });
  
    // Закрытие формы
    closeForm.addEventListener('click', () => {
        feedbackForm.style.display = 'none';
    });
  });


  // Найти элементы
  const music = document.getElementById('background-music');
  const toggleButton = document.getElementById('music-toggle');

  // Переменная для отслеживания состояния музыки
  let isPlaying = true;

  // Обработчик для кнопки
  toggleButton.addEventListener('click', () => {
      if (isPlaying) {
          music.pause();
          
          toggleButton.classList.add('off');
      } else {
          music.play();
          
          toggleButton.classList.remove('off');
      }
      isPlaying = !isPlaying; // Переключить состояние
  });

  // Автозапуск на мобильных устройствах (требует первого взаимодействия)
  document.addEventListener('DOMContentLoaded', () => {
      const playPromise = music.play();
      if (playPromise !== undefined) {
          playPromise.catch(() => {
              console.log('Требуется взаимодействие пользователя для запуска музыки.');
          });
      }
  });
  