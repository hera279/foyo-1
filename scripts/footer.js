document.addEventListener("DOMContentLoaded", () => {
    const accordionTriggers = document.querySelectorAll(".accordion-trigger, .accordion");
    const accordionText = document.getElementById("accordion-text");
    const footerAccordions = document.querySelectorAll(".accordion");

    // Debounce function to limit event execution frequency
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    // Handle accordion click
    const handleAccordionClick = (trigger) => {
        document.querySelector(".section-3").scrollIntoView({ behavior: "smooth" });

        const content = trigger.getAttribute("data-content").replace(/\s*\[\[BR\]\]\s*/g, "<br>");
        accordionText.innerHTML = content;

        footerAccordions.forEach(acc => acc.classList.remove("active"));
        footerAccordions.forEach(acc => {
            if (acc.getAttribute("data-content") === trigger.getAttribute("data-content")) {
                acc.classList.add("active");
            }
        });
    };

    // Attach click event listeners with debouncing
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener("click", debounce(() => handleAccordionClick(trigger), 100));
    });

    // Close the accordion when clicking outside
    document.addEventListener("click", debounce((event) => {
        if (!event.target.closest(".accordion") && !event.target.closest(".accordion-trigger")) {
            footerAccordions.forEach(acc => acc.classList.remove("active"));
            accordionText.textContent = ""; // Clear the text content
        }
    }, 100));
});
