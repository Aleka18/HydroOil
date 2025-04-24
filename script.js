document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.bubble, .about-item, .service-card, .project-card');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

//Prueba
