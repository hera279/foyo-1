document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Lazy initialize IntersectionObserver
    setTimeout(() => {
        const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, .social-ico, .social-ico img, button, a");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-viewport");
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));
    }, 100); // Delay initialization to prioritize critical tasks

    // Accordion logic
    const triggers = document.querySelectorAll(".accordion-trigger, .accordion");
    const display = document.getElementById("accordion-text");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const content = trigger.getAttribute("data-content").replace(/\\n/g, "<br>");
            display.innerHTML = content;
            document.querySelector('.section-3').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Page transition effect
    const pageLinks = document.querySelectorAll('.page-link');
    const pageTransition = document.getElementById('page-transition');

    pageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = link.getAttribute('href');

            // Activate the transition effect
            pageTransition.classList.add('active');

            // Wait for the animation to complete before navigating
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600); // Match the duration in CSS
        });
    });
});