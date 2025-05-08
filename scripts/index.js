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
            const content = trigger.getAttribute("data-content").replace(/\\n/g, "<br>");
            display.innerHTML = content;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-trigger');
    const accordionContent = document.getElementById('accordion-text');

    accordionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.getAttribute('data-content');
            accordionContent.innerHTML = content;
        });
    });
});

document.getElementById('signup-button').addEventListener('click', () => {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('signup-dialog').classList.remove('hidden');
});

document.getElementById('close-dialog').addEventListener('click', () => {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('signup-dialog').classList.add('hidden');
});
