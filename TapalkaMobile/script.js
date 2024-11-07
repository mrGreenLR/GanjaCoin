let clickCount = 0;

// Знаходимо елементи
const clickCounter = document.getElementById('clickCount');
const tapCircle = document.getElementById('tapCircle');

// Обробник події для натискання на кругле зображення
tapCircle.addEventListener('click', () => {
    clickCount++;
    clickCounter.textContent = clickCount;
});
