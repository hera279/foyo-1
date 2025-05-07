document.addEventListener("DOMContentLoaded", () => {
    const accordionTriggers = document.querySelectorAll(".accordion-trigger, .accordion");
    const accordionText = document.getElementById("accordion-text");

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            // Scroll to the footer section
            document.querySelector(".section-3").scrollIntoView({ behavior: "smooth" });

            // Replace custom placeholder ([[BR]]) with <br> tags
            const content = this.getAttribute("data-content").replace(/\s*\[\[BR\]\]\s*/g, "<br>");
            accordionText.innerHTML = content; // Render the content with breaks

            // Toggle the active state for footer accordions
            const footerAccordions = document.querySelectorAll(".accordion");
            footerAccordions.forEach(acc => acc.classList.remove("active"));
            footerAccordions.forEach(acc => {
                if (acc.getAttribute("data-content") === this.getAttribute("data-content")) {
                    acc.classList.add("active");
                }
            });
        });
    });

    // Close the accordion when clicking anywhere else on the screen
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".accordion") && !event.target.closest(".accordion-trigger")) {
            const footerAccordions = document.querySelectorAll(".accordion");
            footerAccordions.forEach(acc => acc.classList.remove("active"));
            accordionText.textContent = ""; // Clear the text content
        }
    });
});
