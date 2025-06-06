document.addEventListener('DOMContentLoaded', () => {
    // --- Testimonial Carousel Logic ---
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        const testimonialCards = testimonialCarousel.querySelectorAll('.testimonial-card');
        let currentIndex = 0;

        // Function to show a specific card
        const showCard = (index) => {
            testimonialCards.forEach((card, i) => {
                card.style.display = 'none'; // Hide all cards
            });
            testimonialCards[index].style.display = 'flex'; // Show the current card
            testimonialCards[index].style.opacity = 0; // Start faded
            testimonialCards[index].style.transform = 'scale(0.9)'; // Start slightly scaled down

            // Smooth fade in and scale up
            setTimeout(() => {
                testimonialCards[index].style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                testimonialCards[index].style.opacity = 1;
                testimonialCards[index].style.transform = 'scale(1)';
            }, 50); // Small delay to allow display change to register

        };

        // Function to go to next card
        const nextCard = () => {
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            showCard(currentIndex);
        };

        // Initial display
        if (testimonialCards.length > 0) {
            showCard(currentIndex);
            // Auto-advance every 7 seconds
            setInterval(nextCard, 7000);
        }
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Smooth scroll effect
            });
        });
    });

    // --- Dynamic Glitch Effect for specific elements (if needed beyond CSS) ---
    // This is more for complex, on-demand glitches. For now, rely on CSS.
    // Future expansion: You could add JS here to trigger glitch on hover for some elements
    // const glitchElements = document.querySelectorAll('.glitch-effect');
    // glitchElements.forEach(el => {
    //     el.addEventListener('mouseover', () => {
    //         el.classList.add('active-glitch'); // Add a class that triggers JS glitch
    //     });
    //     el.addEventListener('animationend', () => {
    //         el.classList.remove('active-glitch');
    //     });
    // });
});
