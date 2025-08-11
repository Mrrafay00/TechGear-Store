document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Function for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form validation and submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (!name.value || !email.value || !message.value) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = '#C0392B';
            formMessage.style.display = 'block';
        } else if (!email.value.includes('@') || !email.value.includes('.')) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = '#C0392B';
            formMessage.style.display = 'block';
        } else {
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.style.color = 'var(--accent-color)';
            formMessage.style.display = 'block';
            contactForm.reset();
        }
    });

    // Scroll-to-top button functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
