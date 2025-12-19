document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const sections = document.querySelectorAll('.section');

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });

    // Add CSS class for hidden/visible
    const style = document.createElement('style');
    style.innerHTML = `
        .hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Glitch Effect Enhancement (Optional random twitch)
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        setInterval(() => {
            glitchTitle.classList.add('glitch-active');
            setTimeout(() => {
                glitchTitle.classList.remove('glitch-active');
            }, 200);
        }, 5000);
    }
});
