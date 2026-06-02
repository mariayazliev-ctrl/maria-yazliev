document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Анімація почнеться, як тільки з'явиться перші 10% елемента
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Додаємо клас, коли доскролили вниз
            } else {
                entry.target.classList.remove('visible'); // ВИДАЛЯЄМО клас, коли гортаємо вгору
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});