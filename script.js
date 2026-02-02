document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for "Ceremonial" slow reveals
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-slow');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 1.5s cubic-bezier(0.2, 1, 0.3, 1), transform 1.5s cubic-bezier(0.2, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Custom class handler for visibility to keep CSS clean
    // We add this dynamically because standard CSS transitions need a trigger
    const style = document.createElement('style');
    style.innerHTML = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
