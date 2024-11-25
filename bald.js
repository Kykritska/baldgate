// Плавный скроллинг к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Обработка формы подписки
document.querySelector('.subscribe form').addEventListener('submit', function (e) {
    e.preventDefault(); // Отменяем стандартное поведение формы
    
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert(Спасибо за подписку! Вы подписаны на новости по адресу: ${email});
        emailInput.value = ''; // Очищаем поле ввода
    } else {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
    }
});

// Функция для валидации электронной почты
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}