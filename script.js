document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.className = savedTheme === 'light' ? 'light-theme' : 'dark-theme';
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        

        body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
        

        updateThemeIcon(newTheme);
        

        localStorage.setItem('theme', newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    }

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = body.classList.contains('light-theme') 
                ? 'rgba(248, 248, 242, 0.98)' 
                : 'rgba(30, 30, 30, 0.98)';
        } else {
            navbar.style.backgroundColor = body.classList.contains('light-theme') 
                ? 'rgba(248, 248, 242, 0.95)' 
                : 'rgba(30, 30, 30, 0.95)';
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.about-section, .requirements-section, .guide-section, .gallery-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const requirementCards = document.querySelectorAll('.requirement-card');
    requirementCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    const guideSteps = document.querySelectorAll('.guide-step');
    guideSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(step);
    });

    const pluginCards = document.querySelectorAll('.plugin-card');
    pluginCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});