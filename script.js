// Открытие разделов
function openSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Показ услуги
function showService(service) {
    let description = '';
    if (service === 'dezinfekciya') {
        description = '<h3>Дезинсекция</h3><p>Описание услуги...</p><p>Юр. лица: 500₸/м²<br>Частные лица: 1-комн — 5000₸, 2-комн — 8000₸</p>';
    } else if (service === 'deratizaciya') {
        description = '<h3>Дератизация</h3><p>Описание услуги...</p><p>Юр. лица: 700₸/м²<br>Частные лица: 1-комн — 7000₸, 2-комн — 10000₸</p>';
    } else if (service === 'dezinficir') {
        description = '<h3>Дезинфекция</h3><p>Описание услуги...</p><p>Юр. лица: 800₸/м²<br>Частные лица: 1-комн — 9000₸, 2-комн — 12000₸</p>';
    }
    document.getElementById('service-description').innerHTML = description;
}

// Функция для добавления отзыва
function addReview() {
    const name = document.getElementById('name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();

    if (name && reviewText) {
        const reviewList = document.getElementById('reviews-list');

        // Создаем новый элемент отзыва
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        // Добавляем имя и текст отзыва
        reviewItem.innerHTML = `<strong>${name}</strong><p>${reviewText}</p>`;
        reviewList.appendChild(reviewItem);

        // Очищаем поля после добавления
        document.getElementById('name').value = '';
        document.getElementById('review-text').value = '';
    } else {
        alert("Пожалуйста, заполните оба поля: имя и отзыв.");
    }
}
