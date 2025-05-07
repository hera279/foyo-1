document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, .social-ico, .social-ico img, button, a");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-viewport");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});

function scrollToFooter(content) {
    const footerText = document.getElementById('accordion-text');
    footerText.textContent = content;
    document.querySelector('.section-3').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".accordion-trigger, .accordion");
    const display = document.getElementById("accordion-text");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            // Replace newlines (\n) in data-content with <br> tags
            const content = trigger.getAttribute("data-content").replace(/\\n/g, "<br>");
            display.innerHTML = content; // Use innerHTML to render <br> tags
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-trigger');
    const accordionContent = document.getElementById('accordion-text');

    accordionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Get the data-content attribute of the clicked button
            const content = button.getAttribute('data-content');

            // Update the accordion-content area with the data-content text
            accordionContent.innerHTML = content;
        });
    });
});